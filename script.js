  function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "WEBHOOK URL HERE");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "My Webhook Name",
      avatar_url: "",
      content: "The message to send"
    }

    request.send(JSON.stringify(params));
  }

  console.log(`Webhook name: ${params.username}`);