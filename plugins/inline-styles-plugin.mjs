/**
 * Custom inline styles plugin for Marp
 * Provides shortcuts for common inline styles
 * 
 * Usage examples:
 * ::comment::This is a comment::
 * ::highlight::Important text::
 * ::small::Small text::
 * ::large::Large text::
 * ::primary::Primary colored text::
 * ::secondary::Secondary colored text::
 */

export default function inlineStylesPlugin(md) {
  // Define available styles and their corresponding CSS classes
  const styleMap = {
    'comment': 'text-secondary text-sm',
    'highlight': 'text-accent-orange font-bold',
    'small': 'text-sm',
    'large': 'text-lg',
    'primary': 'text-primary',
    'secondary': 'text-secondary',
    'accent': 'text-accent-orange',
    'blue': 'text-accent-blue',
    'bold': 'font-bold',
    'dim': 'opacity-70'
  };

  function inlineStyleRule(state, silent) {
    const start = state.pos;
    const marker = state.src.charCodeAt(start);
    
    // Check if we have a double colon (::)
    if (marker !== 0x3A /* : */) return false;
    if (state.src.charCodeAt(start + 1) !== 0x3A) return false;
    
    // Don't match if preceded by backslash (escaped)
    if (start > 0 && state.src.charCodeAt(start - 1) === 0x5C /* \ */) {
      return false;
    }
    
    // Find the style name
    let styleEnd = start + 2;
    while (styleEnd < state.posMax && state.src.charCodeAt(styleEnd) !== 0x3A) {
      styleEnd++;
    }
    
    // Check if we have another double colon after style name
    if (styleEnd + 1 >= state.posMax || 
        state.src.charCodeAt(styleEnd) !== 0x3A ||
        state.src.charCodeAt(styleEnd + 1) !== 0x3A) {
      return false;
    }
    
    // Extract style name
    const styleName = state.src.slice(start + 2, styleEnd);
    
    // Check if style exists
    if (!styleMap[styleName]) return false;
    
    // Find the closing double colon
    let contentStart = styleEnd + 2;
    let pos = contentStart;
    let found = false;
    
    while (pos < state.posMax - 1) {
      if (state.src.charCodeAt(pos) === 0x3A && 
          state.src.charCodeAt(pos + 1) === 0x3A) {
        found = true;
        break;
      }
      pos++;
    }
    
    if (!found) return false;
    
    // Make sure we have content
    if (pos === contentStart) return false;
    
    // In validation mode, just return true
    if (silent) return true;
    
    // Extract the content
    const content = state.src.slice(contentStart, pos);
    
    // Create tokens
    let token;
    
    // Opening span with classes
    token = state.push('span_open', 'span', 1);
    token.attrs = [['class', styleMap[styleName]]];
    
    // Parse the content recursively to allow nested formatting
    const oldPos = state.pos;
    const oldPosMax = state.posMax;
    state.pos = contentStart;
    state.posMax = pos;
    state.md.inline.tokenize(state);
    state.pos = oldPos;
    state.posMax = oldPosMax;
    
    // Closing span
    token = state.push('span_close', 'span', -1);
    
    // Update position
    state.pos = pos + 2;
    
    return true;
  }
  
  // Add the rule to the inline parser before emphasis
  md.inline.ruler.before('emphasis', 'inline_style', inlineStyleRule);
}