const BFDAPI = require("bfdapi.js"),
    bfd = new BFDAPI("510122334795989003","3e2ae91a8942bb8e59cb10f582de4342b13ac937b10b7f01843542fee894a0bcc85c95ef16ce718b3834fdcfb3bc35f5fee4b37e555e5c7d2fb7803608b9dc79");
    
    exports.run = async (bots, message, args) => {
    
    let omg = args[0]
    
bfd.getBotInfo(omg);

}

exports.help = {
  name: "bfdgetbotinfo"
}
