import React, { useState, useEffect, useRef } from "react";
import FileSelector from "./FileSelector";

// import Canvas from "./Canvas";

// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }

// function PrintSecandMsec(str) {
//   var currentDate = new Date();
//   return console.log(
//     str + "  " + currentDate.getSeconds() + ":" + currentDate.getMilliseconds()
//   );
// }

function App() {
  const [fileType, setFileType] = React.useState("RGBE_File");

  const [rgbImage, SetRgbImage] = useState([]);
  const [base64String, SetBase64String] = useState("");
  // get a ref for the camvas in order to manipulateits content
  const canvasRef = useRef(null);

  // A useRef Hook does not cause your component to re-render, besides it is similar to usestate
  const renderCount = useRef(1);

  function handleConvertArrayToRGBA(ArrayBuffer) {
    // Link to explanation: https://medium.com/@koteswar.meesala/convert-array-buffer-to-base64-string-to-display-images-in-angular-7-4c443db242cd
    // Now we are holding the file as text
    console.log("Once ArrayBuf is ready");
    let TYPED_ARRAY = new Uint8Array(ArrayBuffer);
    var localRgbImage = Uint8ClampedArray.from(TYPED_ARRAY);
    console.log("TYPED_ARRAY", TYPED_ARRAY);
    // console.log(localRgbImage);
    SetRgbImage(localRgbImage);
  }

  function handleConvertArrayToJPEG(arrayBuffer) {
    // Link to explanation: https://medium.com/@koteswar.meesala/convert-array-buffer-to-base64-string-to-display-images-in-angular-7-4c443db242cd
    // Now we are holding the file as text
    console.log("Once ArrayBuf is ready");
    // let TYPED_ARRAY = new Uint8Array(arrayBuffer);
    // const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);

    // let Localbase64String = btoa(STRING_CHAR);
    let Localbase64String = btoa(
      String.fromCharCode(...new Uint8Array(arrayBuffer))
    );
    SetBase64String(Localbase64String);
    // Working image dataurl (works)
    // SetBase64String(
    //   "data:image/jpeg;base64,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"
    // );

    // SetBase64String("data:image/jpg;base64, " + Localbase64String);
    // console.log("base64String", base64String);
    // var localURL = new URL("data:image/jpg;base64, " + base64String);
    // console.log("localURL", localURL);
    // SetImageUrl(new URL("data:image/jpg;base64, " + base64String));
  }

  function handleChosenFile(file) {
    var reader = new FileReader();
    reader.onload = function (evt) {
      var ArrayBuf = evt.target.result;
      switch (fileType) {
        case "RGBE_File":
          handleConvertArrayToRGBA(ArrayBuf);
          break;
        case "JPEG_File":
          handleConvertArrayToJPEG(ArrayBuf);
          break;
        default:
          break;
      }
    };
    // Read the image as array buffer
    reader.readAsArrayBuffer(file);
    console.log("Before ArrayBuf is ready");
  }

  // On Mount - Do all the things that can\nned to be done after app was mounted
  useEffect(() => {
    renderCount.current += 1;
    console.log("mounted");
    // the return section is actually the cleanup -> like: remove event listeners, or unsubscribe from API etc..
    return () => {
      console.log("return from mount");
    };
  }, []);

  // useEffect example: Everything inside the function will run every time we render
  useEffect(() => {
    if (
      typeof rgbImage !== "undefined" &&
      rgbImage !== null &&
      rgbImage.length !== null &&
      rgbImage.length > 0
    ) {
      // each pixel of image data should be represented by: RGBE
      // https://en.wikipedia.org/wiki/RGBA_color_model
      // The readonly ImageData.data property returns a Uint8ClampedArray that contains the
      // ImageData object's pixel data. Data is stored as a one-dimensional array in the RGBA order,
      // with integer values between 0 and 255 (inclusive).
      // source: https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      console.log("context", context);
      var len = rgbImage.length;
      console.log("rgbImage.len = ", len);

      var imageWidth = 50;
      var imageHeight = 24;
      var Image = new ImageData(rgbImage, imageWidth, imageHeight);
      context.putImageData(Image, 50, 50);
    }
    //convert the binary file into imagedata format: https://en.wikipedia.org/wiki/RGBE_image_format
    console.log("rgbImage state was updated");
    // the return section is actually the cleanup -> like: remove event listeners, or unsubscribe from API etc..
    return () => {
      console.log("return from rgbImage useEffect");
    };
  }, [rgbImage]);

  // useEffect example: Everything inside the function will run every time we render
  useEffect(() => {
    if (
      typeof base64String !== "undefined" &&
      base64String !== null &&
      base64String.length !== null &&
      base64String.length > 0
    ) {
      // each pixel of image data should be represented by: RGBE
      // https://en.wikipedia.org/wiki/RGBA_color_model
      // The readonly ImageData.data property returns a Uint8ClampedArray that contains the
      // ImageData object's pixel data. Data is stored as a one-dimensional array in the RGBA order,
      // with integer values between 0 and 255 (inclusive).
      // source: https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      // Cleaning the previose data
      context.clearRect(0, 0, canvas.width, canvas.height);

      var localURL = new URL("data:image/jpg;base64, " + base64String);
      console.log("localURL", localURL);
      // context.putImageData(localURL, 50, 50);

      var img = new Image();
      console.log("After new Image");
      img.onload = function () {
        console.log("before drawImage");
        context.drawImage(img, 0, 0); // Or at whatever offset you like
        console.log("after drawImage");
      };
      console.log("before img.src");
      img.src = localURL;
      console.log("After img.src");
    }
    // the return section is actually the cleanup -> like: remove event listeners, or unsubscribe from API etc..
    return () => {
      console.log("return from base64String useEffect");
    };
  }, [base64String]);

  // Set the Accept File State
  const [acceptVal, SetAcceptVal] = useState("*");

  useEffect(() => {
    switch (fileType) {
      case "RGBE_File":
        SetAcceptVal("*");
        break;
      case "JPEG_File":
        SetAcceptVal(".jpg");
        break;
      default:
        SetAcceptVal("*");
        break;
    }
  }, [fileType]);

  return (
    <div>
      <h1>The Rendered Image via Canvas:</h1>
      {/* <img src={base64String} alt="JPEG Image" /> */}
      <canvas ref={canvasRef} id="tutorial" width="720" height="480">
        {/* Fallback content */}
        Your Browser does not support Canvas
      </canvas>
      <br />
      <br />
      <FileSelector fileType={fileType} setFileType={setFileType} />
      <br />
      <br />
      <input
        type="file"
        id="file"
        className="input-file"
        accept={acceptVal}
        // accept={fileType === "RGBE_File" ? "*" : ".jpg"}
        onChange={(e) => handleChosenFile(e.target.files[0])}
      />

      <p> I rendered {renderCount.current} times </p>
    </div>
  );
}

export default App;
