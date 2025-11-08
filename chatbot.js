// Simple chatbot logic for SchoolAbroad.eu

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const messagesContainer = document.getElementById('chatbot-messages');
  const form = document.getElementById('chatbot-form');
  const input = document.getElementById('chatbot-input');

  // Toggle chatbot visibility
  toggleButton.addEventListener('click', () => {
    chatbotWindow.classList.toggle('hidden');
    if (!chatbotWindow.classList.contains('hidden')) {
      input.focus();
    }
  });

  // Handle user messages
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = input.value.trim();
    if (!userMessage) return;
    addMessage(userMessage, 'user');
    input.value = '';
    // Generate AI response with a slight delay to simulate processing
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      addMessage(response, 'bot');
      // Scroll to bottom
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 600);
  });

  /**
   * Append a new message to the chat window.
   * @param {string} text The message text.
   * @param {'user'|'bot'} sender Who sent the message.
   */
  function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = text;
    messagesContainer.appendChild(msg);
  }

  /**
   * Simple rule-based AI to generate responses.
   * @param {string} query User input.
   * @returns {string} AI response.
   */
  function getAIResponse(query) {
    const q = query.toLowerCase();
    // Basic pattern matching
    if (q.includes('program')) {
      return 'You can explore our Programs page to find the best study options. We match you to schools based on your interests.';
    }
    if (q.includes('apply')) {
      return 'Our Apply page lets you submit your details once and apply to multiple European institutions at once.';
    }
    if (q.includes('visa')) {
      return 'After you receive an offer, our AI will generate a personalised visa checklist and assist with scheduling your appointment.';
    }
    if (q.includes('accommodation') || q.includes('housing')) {
      return 'We partner with trusted housing providers. Visit our Accommodation page to browse student housing and book your stay.';
    }
    if (q.includes('franchise') || q.includes('partner')) {
      return 'If you are interested in partnering or obtaining a country desk licence, check out our Franchise page for more details.';
    }
    if (q.includes('contact')) {
      return 'You can send us a message via the Contact page or email us at support@schoolabroad.eu.';
    }
    // Default reply
    return 'I\'m here to help with your study journey! For detailed guidance, please explore our site or reach out through the Contact page.';
  }
});