if (/AppleWebKit\/([\d.]+)/.exec(navigator.userAgent)) {
    var e = null;
    document.addEventListener(
      "click",
      function () {
        var t = window.event.target;
        e &&
          "true" == e.contentEditable &&
          "true" !== t.contentEditable &&
          (document.getElementById("editableFix").setSelectionRange(0, 0),
          t.focus()),
          (e = t);
      },
      !1
    );
  }