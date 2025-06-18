/**
 * Text macros plugin for Marp
 * Provides macro expansion for common patterns
 * 
 * Usage examples:
 * @important{text} → **text**{.important}
 * @negative{text} → **text**{.negative}
 * @pro{text} → ✓ text{.green}
 * @con{text} → ✗ text{.red}
 * @date → current date
 * @todo → [TODO]
 */

export default function textMacrosPlugin(md) {
  // Define available macros
  const macros = {
    // Style macros (aligned with design principles)
    'important': (content) => `**${content}**{.important}`,
    'negative': (content) => `**${content}**{.negative}`,
    'positive': (content) => `**${content}**{.positive}`,
    'warning': (content) => `⚠️ ${content}{.negative}`,
    
    // Status macros
    'done': (content) => `✓ ${content || 'Completed'}`,
    'pending': (content) => `○ ${content || 'Pending'}`,
    'todo': (content) => `[ ] ${content || 'TODO'}`,
    
    // Date/time macros
    'date': () => new Date().toLocaleDateString('ja-JP'),
    'year': () => new Date().getFullYear().toString(),
    'month': () => (new Date().getMonth() + 1).toString(),
    
    // Common phrases (Japanese context)
    'thanks': () => 'ご清聴ありがとうございました',
    'questions': () => 'ご質問はありますか？',
    'contact': () => 'お問い合わせ',
    
    // Presentation helpers
    'nextslide': () => '→ 次のスライドで詳しく説明',
    'summary': () => 'まとめ',
    'agenda': () => '本日の内容',
  };

  function macroRule(state, silent) {
    const start = state.pos;
    const max = state.posMax;
    
    // Check for @
    if (state.src.charCodeAt(start) !== 0x40 /* @ */) return false;
    
    // Find macro name (alphanumeric)
    let nameEnd = start + 1;
    while (nameEnd < max && /[a-zA-Z0-9]/.test(state.src[nameEnd])) {
      nameEnd++;
    }
    
    if (nameEnd === start + 1) return false;
    
    const macroName = state.src.slice(start + 1, nameEnd);
    
    // Check if macro exists
    if (!macros[macroName]) return false;
    
    let content = '';
    let pos = nameEnd;
    
    // Check if macro has arguments
    if (state.src.charCodeAt(nameEnd) === 0x7B /* { */) {
      // Find closing brace
      let braceCount = 1;
      pos = nameEnd + 1;
      let contentStart = pos;
      
      while (pos < max && braceCount > 0) {
        if (state.src.charCodeAt(pos) === 0x7B /* { */) {
          braceCount++;
        } else if (state.src.charCodeAt(pos) === 0x7D /* } */) {
          braceCount--;
        }
        pos++;
      }
      
      if (braceCount !== 0) return false;
      
      content = state.src.slice(contentStart, pos - 1);
    }
    
    if (silent) return true;
    
    // Expand macro
    const macro = macros[macroName];
    const expansion = typeof macro === 'function' ? macro(content) : macro;
    
    // Insert the expanded text
    const token = state.push('text', '', 0);
    token.content = expansion;
    
    state.pos = pos;
    return true;
  }
  
  // Add the rule to the inline parser
  md.inline.ruler.before('emphasis', 'macro', macroRule);
}