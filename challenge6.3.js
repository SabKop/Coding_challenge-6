// Question 3: Write a function that converts HEX to RGB.
// Then Make that function autodect the formats so that if you enter HEX color
// format it returns RGB and if you enter RGB color format it returns HEX.
// Bonus: Release this tool as a npm package.

const convert = (color) => {

if(color.includes("#")){
      let hexInput = color.replace("#","");
      if(hexInput.length === 6) {
            const r = parseInt(hexInput.substr(0,2),16);
            const g = parseInt(hexInput.substr(2,2),16);
            const b = parseInt(hexInput.substr(4,2),16);

            const rgb = "rgb(" + r + ", " + g + ", " + b + ")";

            return rgb;
        }else{
            return "Uupss!! Wrong HEX color format. Please try again. Start with #, and then enter six signs from: 0123456789abcdef, e.g. #1a67bd";
        }
  } else if(color.includes("rgb")){
          let rgbInput = color.replace("rgb(","").replace(")","").split(",");
          let hex = [];
          let rIn = parseInt(rgbInput[0]);
          let gIn = parseInt(rgbInput[1]);
          let bIn = parseInt(rgbInput[2]);
          if(rIn<=255 && rIn>=0 && gIn<=255 && gIn>=0 && bIn<=255 && bIn>=0){
              rIn = rIn.toString(16);
              gIn = gIn.toString(16);
              bIn = bIn.toString(16);

              hex = "#" + rIn + gIn + bIn;
              return hex;
          }else{
              return "Uupss!! Wrong RGB color format. Please try again. You need to use this format rgb(0,255,255) and numbers need to be from 0 to 255";
          }
    }else {
        alert("Wrong color format. Please enter RGB (e.g rgb(222,21,0)) or HEX (e.g. #ad98fe) color format.")
}

}
