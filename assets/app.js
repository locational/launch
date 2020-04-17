
var callback = function () {
  // Handler when the DOM is fully loaded
  document.getElementById('close-fullscreen').onclick = function () {
    const els = document.getElementsByClassName('fullscreen');
    for (const el of els) {
      const remaining_styles = el.className.split(' ').filter(i => i !== 'fullscreen');
      el.className = remaining_styles;
    }
    document.getElementById('close-fullscreen').style.display = 'none';
  };

  function add_iframe_buttons() {
    const iframes = document.getElementsByTagName('iframe');

    for (const el of iframes) {
      const parent = el.parentElement;

      const button = document.createElement("button");
      button.type = "button";
      button.className = 'fullscreen-btn';
      button.innerText = 'Fullscreen';
      button.onclick = function (ev) {
        console.log('thing');

        el.className += 'fullscreen';
        document.getElementById('close-fullscreen').style.display = 'block';
      };
      el.after(button);
    }
  }

  add_iframe_buttons();

  console.log('included!');

};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
