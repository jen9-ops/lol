export function createRandomButton(customId, customClass) {
  try {
    // Use provided ID and class, or generate random ones if not provided
    const id = customId || 'btn-' + Math.random().toString(36).substr(2, 9);
    const className = customClass || 'cls-' + Math.random().toString(36).substr(2, 9);
    
    // Create button element
    const button = document.createElement('button');
    button.id = id;
    button.className = className;
    button.textContent = 'Click Me';
    
    // Append button to the document body
    document.body.appendChild(button);
    
    // Return the ID and class
    return {
      id: id,
      class: className
    };
  } catch (error) {
    console.error('Error creating button:', error.message);
    return null;
  }
}
