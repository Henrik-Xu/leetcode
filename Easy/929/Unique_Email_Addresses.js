/**
 * Unique Email Addresses
 */
let numUniqueEmails = function(emails) {
    return (new Set(emails.map(email => {
      const [local, domain] = email.split('@');
      return local.split('+').shift().split('.').join('') + '@' + domain;
    }))).size;
  };