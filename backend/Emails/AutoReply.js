function AutoReply({ name }) {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:20px;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="
          background:#ffffff;
          border-radius:10px;
          padding:20px;
          font-family:Arial, sans-serif;
          color:#000000;
        ">

          <tr>
            <td>
              <h2 style="margin-bottom:10px;">Hi ${name},</h2>

              <p style="margin-bottom:10px;">
                Thank you for contacting us!  
                We have received your message and will get back to you shortly.
              </p>

              <p style="margin-bottom:20px;">
                Please do not reply to this email.
              </p>

              <p>
                — <strong>The Eagle Hub</strong>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
  `;
}

export default AutoReply;
