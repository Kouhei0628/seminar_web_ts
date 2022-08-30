const UA = navigator.userAgent;

type UAFlags = {
  youUseMobile: boolean;
  youScrollToBottom: boolean;
  innerWidthNarrow: boolean;
};

const userAgentFlags: UAFlags = {
  youUseMobile:
    (UA.indexOf("iPhone") > 0 && UA.indexOf("iPad") === -1) ||
    UA.indexOf("iPod") > 0 ||
    UA.indexOf("Android") > 0,
  youScrollToBottom:
    window.scrollY >
    document.getElementById("root")!.getBoundingClientRect().bottom * 3,
  innerWidthNarrow: window.innerWidth < 630,
};
export { userAgentFlags };
