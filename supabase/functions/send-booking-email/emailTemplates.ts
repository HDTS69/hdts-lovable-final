import { BookingData, FileUrls } from "./types.ts";

const styles = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #1e293b;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .header {
    text-align: center;
    padding: 20px;
    border-radius: 8px 8px 0 0;
  }
  .logo {
    max-width: 200px;
    margin-bottom: 20px;
  }
  .header h1 {
    margin: 0;
    font-size: 28px;
    color: #14b8a6;
    font-weight: 600;
  }
  .header p {
    color: #e2e8f0;
    margin: 10px 0 0;
    font-size: 16px;
  }
  .section {
    margin-bottom: 24px;
    padding: 20px;
    background-color: #1e293b;
    border-radius: 6px;
  }
  .section h2 {
    font-size: 22px;
    color: #14b8a6;
    border-bottom: 1px solid #334155;
    padding-bottom: 12px;
    margin-bottom: 16px;
    font-weight: 600;
  }
  .section p {
    font-size: 15px;
    color: #e2e8f0;
    margin: 8px 0;
    line-height: 1.6;
  }
  .highlight {
    font-weight: 500;
    color: #14b8a6;
    margin-right: 8px;
    font-size: 16px;
  }
  .field-value {
    color: #f8fafc;
    font-weight: 400;
    font-size: 16px;
  }
  a {
    color: #14b8a6;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .footer {
    text-align: center;
    font-size: 14px;
    color: #94a3b8;
    margin-top: 24px;
    padding: 20px;
    border-top: 1px solid #334155;
  }
  
  .field-row {
    display: flex;
    align-items: flex-start;
    margin: 12px 0;
    padding: 12px;
    background-color: #0f172a;
    border-radius: 6px;
  }
  
  .field-content {
    flex: 1;
  }

  .service-details {
    background-color: #0f172a;
    border: 1px solid #334155;
    border-radius: 6px;
    padding: 16px;
    margin: 12px 0;
  }

  .copyable {
    user-select: all;
    cursor: text;
  }
`;

const generateCustomerDetails = (booking: BookingData) => `
  <div class="section">
    <h2>Customer Details</h2>
    <div class="field-row">
      <div class="field-content">
        <span class="highlight">Name:</span>
        <span class="field-value copyable">${booking.name}</span>
      </div>
    </div>
    <div class="field-row">
      <div class="field-content">
        <span class="highlight">Email:</span>
        <span class="field-value copyable">${booking.email}</span>
      </div>
    </div>
    <div class="field-row">
      <div class="field-content">
        <span class="highlight">Phone:</span>
        <span class="field-value copyable">${booking.phone}</span>
      </div>
    </div>
    <div class="field-row">
      <div class="field-content">
        <span class="highlight">Address:</span>
        <span class="field-value copyable">${booking.address}</span>
      </div>
    </div>
    <div class="field-row">
      <div class="field-content">
        <span class="highlight">Newsletter Subscription:</span>
        <span class="field-value copyable">${booking.newsletter_subscription ? 'Yes' : 'No'}</span>
      </div>
    </div>
  </div>
`;

const generateServiceDetails = (booking: BookingData) => `
  <div class="section">
    <h2>Service Details</h2>
    <div class="service-details">
      <p>
        <span class="highlight">Services:</span>
        <span class="field-value copyable">${booking.services.join(', ')}</span>
      </p>
      <p>
        <span class="highlight">Preferred Time:</span>
        <span class="field-value copyable">${booking.preferred_time}</span>
      </p>
      ${booking.message ? `
        <p><span class="highlight">Message:</span></p>
        <p class="field-value copyable">${booking.message}</p>
      ` : ''}
    </div>
  </div>
`;

const generateHeader = () => `
  <div class="header">
    <h1>New Booking Request</h1>
    <p>A new booking has been submitted through the website</p>
  </div>
`;

const generateFooter = () => `
  <div class="footer">
    <p>HD Trade Services | <a href="https://hdtradeservices.com.au" target="_blank">hdtradeservices.com.au</a></p>
    <p>Need help? Contact us at <a href="mailto:support@hdtradeservices.com.au">support@hdtradeservices.com.au</a></p>
  </div>
`;

export const generateFileAttachmentsHtml = (fileUrls: FileUrls[]): string => {
  if (!fileUrls || fileUrls.length === 0) return '';

  return `
    <div class="section">
      <h2>Attached Files</h2>
      ${fileUrls.map(({originalName, publicUrl}) => `
        <div class="field-row">
          <div class="field-content">
            <a href="${publicUrl}" target="_blank" style="color: #14b8a6; text-decoration: none;">
              📎 ${originalName}
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  `;
};

export const generatePlainTextEmail = (booking: BookingData, fileUrls: FileUrls[]): string => {
  const sections = [
    'New Booking Request',
    '',
    'Customer Details:',
    `Name: ${booking.name}`,
    `Email: ${booking.email}`,
    `Phone: ${booking.phone}`,
    `Address: ${booking.address}`,
    '',
    'Service Details:',
    `Service Type: ${booking.services.join(', ')}`,
    `Preferred Time: ${booking.preferred_time}`,
  ];

  if (booking.message) {
    sections.push('', 'Message:', booking.message);
  }

  if (fileUrls && fileUrls.length > 0) {
    sections.push(
      '',
      'Attached Files:',
      ...fileUrls.map(({originalName, publicUrl}) => `${originalName}: ${publicUrl}`)
    );
  }

  sections.push(
    '',
    'Booking Details (for automation):',
    `booking_id: ${booking.id}`,
    `booking_status: ${booking.status || 'pending'}`,
    `booking_date: ${new Date().toISOString()}`,
    '',
    'This booking was received through HD Trade Services website'
  );

  return sections.join('\n');
};

export const generateEmailHtml = (booking: BookingData, fileAttachmentsHtml: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${styles}</style>
    </head>
    <body>
      <div class="container">
        ${generateHeader()}
        ${generateCustomerDetails(booking)}
        ${generateServiceDetails(booking)}
        ${fileAttachmentsHtml}
        ${generateFooter()}
      </div>
    </body>
    </html>
  `;
};