export const prerender = false; //This will not work without this line and has to be here for server-side rendering

//Imports
import type { APIRoute } from "astro";
import { experimental_AstroContainer } from "astro/container";
import { Resend } from "resend";
import UserEmailTemplate from "../../components/UserEmail.astro";
import AdminEmailTemplate from "../../components/AdminEmail.astro";

//Get Resend API key from environment variables
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const container = await experimental_AstroContainer.create(); //Creating Container

  //Fetching formData
  const data = await request.formData();
  const name = data.get("firstName") as string;
  const email = data.get("email") as string;
  const message = data.get("message") as string;

  //Checking all fields
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: `Fill out all fields.`,
      }),
      {
        status: 404,
        statusText: "Did not provide the right data",
      }
    );
  }

  //Rendering the templates
  const emailAdminHtml = await container.renderToString(AdminEmailTemplate, {
    props: { firstName: name, message },
  });

  const emailUserHtml = await container.renderToString(UserEmailTemplate, {
    props: { firstName: name, message },
  });

  //Sending the emails
  const sendUserResend = await resend.emails.send({
    from: "info@anthonycandaele.com",
    to: `${email}`,
    subject: `Hi ${name}`,
    html: emailUserHtml,
  });

  const sendAdminEmail = await resend.emails.send({
    from: "info@anthonycandaele.com",
    to: `info@webmoov.be`,
    subject: `Submission from ${name}`,
    html: emailAdminHtml,
  });

  //Checking for success or failure
  if (sendUserResend.data && sendAdminEmail) {
    return new Response(
      JSON.stringify({
        message: `Messages successfully sent!`,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: `Messages failed to send: User- ${JSON.stringify(
          sendUserResend.error
        )} Admin-${JSON.stringify(sendAdminEmail.error)} `,
      }),
      {
        status: 500,
        statusText: `Internal Server Error: User- ${JSON.stringify(
          sendUserResend.error
        )} Admin-${JSON.stringify(sendAdminEmail.error)} `,
      }
    );
  }
};
