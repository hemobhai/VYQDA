import express from "express";
import fetch from "node-fetch";

const app = express();
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const postData = async (phoneNumber) => {
  try {
    const url = "https://chimpu.online/api/post.php";
    const data = { phonenumber: phoneNumber };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        phonenumber: phoneNumber,
      },
      body: JSON.stringify(data),
    });

    const headers = [...response.headers.entries()];
    const responseBody = await response.json();

    return { headers, responseBody };
  } catch (error) {
    console.error("Error in POST request:", error);
    return { headers: null, responseBody: null, error };
  }
};

app.get("/", (req, res) => {
  res.send(`
        <html>
            <head>
                <title>API Data Display</title>
            </head>
            <body>
                <h1>Submit Phone Number to Get Headers Data</h1>
                <form method="POST" action="/submit">
                    <label for="phonenumber">Phone Number:</label>
                    <input type="text" id="phonenumber" name="phonenumber" required>
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
});

app.post("/submit", async (req, res) => {
  const { phonenumber } = req.body;

  if (!phonenumber) {
    return res.status(400).send("Phone number is required.");
  }

  const { headers, responseBody, error } = await postData(phonenumber);

  if (error) {
    return res.status(500).send("Error fetching data");
  }

  let headersHtml = "<h3>Response Headers:</h3><ul>";
  if (headers && headers.length > 0) {
    headers.forEach(([key, value]) => {
      headersHtml += `<li><strong>${key}</strong>: ${value}</li>`;
    });
  } else {
    headersHtml += "<li>No headers found</li>";
  }
  headersHtml += "</ul>";

  const html = `
        <html>
            <head>
                <title>API Data Display</title>
            </head>
            <body>
                <h1>Response for Phone Number: ${phonenumber}</h1>
                ${headersHtml}
                <h3>Response Body:</h3>
                <pre>${JSON.stringify(responseBody, null, 2)}</pre>
                <br>
                <a href="/">Go back</a>
            </body>
        </html>
    `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
