import "./FileUpload.css";
import React, { useEffect } from "react";
const FileUpload = (props) => {
  // Design By
  // - https://dribbble.com/shots/13992184-File-Uploader-Drag-Drop

  // Select Upload-Area
  useEffect(() => {
    const uploadArea = document.querySelector("#uploadArea");

    // Select Drop-Zoon Area
    const dropZoon = document.querySelector("#dropZoon");

    // Loading Text
    const loadingText = document.querySelector("#loadingText");

    // Slect File Input
    const fileInput = document.querySelector("#fileInput");

    // Select Preview Image
    const previewImage = document.querySelector("#previewImage");

    // File-Details Area
    const fileDetails = document.querySelector("#fileDetails");

    // Uploaded File
    const uploadedFile = document.querySelector("#uploadedFile");

    // Uploaded File Info
    const uploadedFileInfo = document.querySelector("#uploadedFileInfo");

    // Uploaded File  Name
    const uploadedFileName = document.querySelector(".uploaded-file__name");

    // Uploaded File Icon
    const uploadedFileIconText = document.querySelector(
      ".uploaded-file__icon-text"
    );

    // Uploaded File Counter
    const uploadedFileCounter = document.querySelector(
      ".uploaded-file__counter"
    );

    // ToolTip Data
    const toolTipData = document.querySelector(".upload-area__tooltip-data");

    // Images Types
    const imagesTypes = ["jpeg", "png", "svg", "gif"];

    // Append Images Types Array Inisde Tooltip Data
    toolTipData.innerHTML = [...imagesTypes].join(", .");

    // When (drop-zoon) has (dragover) Event
    dropZoon.addEventListener("dragover", function (event) {
      // Prevent Default Behavior
      event.preventDefault();

      // Add Class (drop-zoon--over) On (drop-zoon)
      dropZoon.classList.add("drop-zoon--over");
    });

    // When (drop-zoon) has (dragleave) Event
    dropZoon.addEventListener("dragleave", function (event) {
      // Remove Class (drop-zoon--over) from (drop-zoon)
      dropZoon.classList.remove("drop-zoon--over");
    });

    // When (drop-zoon) has (drop) Event
    dropZoon.addEventListener("drop", function (event) {
      // Prevent Default Behavior
      event.preventDefault();

      // Remove Class (drop-zoon--over) from (drop-zoon)
      dropZoon.classList.remove("drop-zoon--over");

      // Select The Dropped File
      const file = event.dataTransfer.files[0];

      // Call Function uploadFile(), And Send To Her The Dropped File :)
      uploadFile(file);
    });

    // When (drop-zoon) has (click) Event
    dropZoon.addEventListener("click", function (event) {
      // Click The (fileInput)
      fileInput.click();
    });

    // When (fileInput) has (change) Event
    fileInput.addEventListener("change", function (event) {
      // Select The Chosen File
      const file = event.target.files[0];

      // Call Function uploadFile(), And Send To Her The Chosen File :)
      uploadFile(file);
    });

    // Upload File Function
    function uploadFile(file) {
      // FileReader()
      const fileReader = new FileReader();
      // File Type
      const fileType = file.type;
      // File Size
      const fileSize = file.size;

      // If File Is Passed from the (File Validation) Function
      if (fileValidate(fileType, fileSize)) {
        // Add Class (drop-zoon--Uploaded) on (drop-zoon)
        dropZoon.classList.add("drop-zoon--Uploaded");

        // Show Loading-text
        loadingText.style.display = "block";
        // Hide Preview Image
        previewImage.style.display = "none";

        // Remove Class (uploaded-file--open) From (uploadedFile)
        uploadedFile.classList.remove("uploaded-file--open");
        // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
        uploadedFileInfo.classList.remove("uploaded-file__info--active");

        // After File Reader Loaded
        fileReader.addEventListener("load", function () {
          // After Half Second
          setTimeout(function () {
            // Add Class (upload-area--open) On (uploadArea)
            uploadArea.classList.add("upload-area--open");

            // Hide Loading-text (please-wait) Element
            loadingText.style.display = "none";
            // Show Preview Image
            previewImage.style.display = "block";

            // Add Class (file-details--open) On (fileDetails)
            fileDetails.classList.add("file-details--open");
            // Add Class (uploaded-file--open) On (uploadedFile)
            uploadedFile.classList.add("uploaded-file--open");
            // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
            uploadedFileInfo.classList.add("uploaded-file__info--active");
          }, 500); // 0.5s

          // Add The (fileReader) Result Inside (previewImage) Source
          previewImage.setAttribute("src", fileReader.result);

          // Add File Name Inside Uploaded File Name
          uploadedFileName.innerHTML = file.name;

          // Call Function progressMove();
          progressMove();
        });

        // Read (file) As Data Url
        fileReader.readAsDataURL(file);
      }
    }

    // Progress Counter Increase Function
    function progressMove() {
      // Counter Start
      let counter = 0;

      // After 600ms
      setTimeout(() => {
        // Every 100ms
        let counterIncrease = setInterval(() => {
          // If (counter) is equle 100
          if (counter === 100) {
            // Stop (Counter Increase)
            clearInterval(counterIncrease);
          } else {
            // Else
            // plus 10 on counter
            counter = counter + 10;
            // add (counter) vlaue inisde (uploadedFileCounter)
            uploadedFileCounter.innerHTML = `${counter}%`;
          }
        }, 100);
      }, 600);
    }

    // Simple File Validate Function
    function fileValidate(fileType, fileSize) {
      // File Type Validation
      let isImage = imagesTypes.filter(
        (type) => fileType.indexOf(`image/${type}`) !== -1
      );

      // If The Uploaded File Type Is 'jpeg'
      if (isImage[0] === "jpeg") {
        // Add Inisde (uploadedFileIconText) The (jpg) Value
        uploadedFileIconText.innerHTML = "jpg";
      } else {
        // else
        // Add Inisde (uploadedFileIconText) The Uploaded File Type
        uploadedFileIconText.innerHTML = isImage[0];
      }

      // If The Uploaded File Is An Image
      if (isImage.length !== 0) {
        // Check, If File Size Is 2MB or Less
        if (fileSize <= 2000000) {
          // 2MB :)
          return true;
        } else {
          // Else File Size
          return alert("Please Your File Should be 2 Megabytes or Less");
        }
      } else {
        // Else File Type
        return alert("Please make sure to upload An Image File Type");
      }
    }
  });

  // :)
  return (
    <div id="uploadArea" className="upload-area mx-auto mb-0 pb-4">
      <div className="upload-area__header">
        <h1 className="upload-area__title">Upload your file</h1>
        <p className="upload-area__paragraph">
          File should be an image&nbsp;
          <strong className="upload-area__tooltip">
            Like
            <span className="upload-area__tooltip-data"></span>
          </strong>
        </p>
      </div>
      <div id="dropZoon" className="upload-area__drop-zoon drop-zoon">
        <span className="drop-zoon__icon">
          <i className="bx bxs-file-image"></i>
        </span>
        <p className="drop-zoon__paragraph">
          Drop your file here or Click to browse
        </p>
        <span id="loadingText" className="drop-zoon__loading-text">
          Please Wait
        </span>
        <img
          src=""
          alt="Preview Image"
          id="previewImage"
          className="drop-zoon__preview-image"
          draggable="false"
        />

        <input
          type="file"
          id="fileInput"
          className="drop-zoon__file-input"
          accept="image/*"
          ref={props.fileInput}
        />
      </div>

      <div
        id="fileDetails"
        className="upload-area__file-details file-details mt-2"
      >
        <h3 className="file-details__title">Uploaded File</h3>

        <div id="uploadedFile" className="uploaded-file">
          <div className="uploaded-file__icon-container">
            <i className="bx bxs-file-blank uploaded-file__icon"></i>
            <span className="uploaded-file__icon-text"></span>
          </div>

          <div id="uploadedFileInfo" className="uploaded-file__info">
            <span className="uploaded-file__name">Proejct 1</span>
            <span className="uploaded-file__counter">0%</span>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (props.walldecor) props.uploadFile(e);
          else props.getSegmentation(e);
        }}
        className=""
      >
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};
export default FileUpload;
