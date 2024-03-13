var ajaxCall = (key, url, prompt) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: https://api.openai.com/v1
/chat/completions,
      type: "POST",
      dataType: "json",
      data: JSON.stringify({
        model: "gpt-4",
        prompt: prompt,
        max_tokens: 1024,
        n: 1,
        temperature: 0.5,
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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",
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

const url = "https://api.openai.com/v1";

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
        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,
        `${url}/$ completions`,
        prompt
      );
      //console.log(response.choices[0].text);
      return response.choices[0].text;
    }
  }
  customElements.define("custom-widget", MainWebComponent);
})();