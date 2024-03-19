var ajaxCall = (key, url, prompt) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: "POST",
      dataType: "json",
      data: JSON.stringify({
  "messages": [
    {
      "role": "system",
      "content": prompt
    }
  ]
}),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic c29vcml5YTo0NDQkU2llcnJh`
      },
      crossDomain: true,
      success: function (response, status, xhr) {
        resolve({ response, status, xhr });
      },
      error: function (xhr, status, error) {
        const err = new Error('xhr error');
        err.status = xhr.status;
        reject(err);
      },
    });
  });
};

const url = "https://poc-mc10-org-poc-mc-space10-openai-apis-srv.cfapps.us10-001.hana.ondemand.com/genai/chat";

(function () {
  const template = document.createElement("template");
  template.innerHTML = `
      <style>
      </style>
      <div id="root" style="width: 100%; height: 100%;">
      </div>
    `;
  class MainWebComponent extends HTMLElement {
    async post(apiKey, endpoint, prompt) {
      const { response } = await ajaxCall(
        apiKey,
        `${url}`,
        prompt
      );
      //console.log(response.choices[0].message.content);
      return response.choices[0].message.content;
    }
  }
  customElements.define("custom-widget", MainWebComponent);
})();
