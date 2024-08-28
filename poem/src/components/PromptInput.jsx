// // // // import React, { useState } from "react";
// // // // import styles from "./PromptInput.module.css";
// // // // import GenerateButton from "./GenerateButton"; // Import the GenerateButton component

// // // // const PromptInput = () => {
// // // //   const [inputText, setInputText] = useState("");

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log("Form submitted with input:", inputText);
// // // //     // You can add any other logic here if needed
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleSubmit}>
// // // //       <div className={styles.inputGroup}>
// // // //         <label className={styles.inputLabel} htmlFor="poemPrompt">
// // // //           Type your prompt:
// // // //         </label>
// // // //         <input
// // // //           id="poemPrompt"
// // // //           type="text"
// // // //           placeholder="Type something poetic..."
// // // //           className={styles.inputField}
// // // //           value={inputText}
// // // //           onChange={(e) => setInputText(e.target.value)}
// // // //         />
// // // //         <GenerateButton />
// // // //       </div>
// // // //     </form>
// // // //   );
// // // // };

// // // // export default PromptInput;

// // // import React, { useState } from "react";
// // // import styles from "./PromptInput.module.css";
// // // import GenerateButton from "./GenerateButton";
// // // import axios from "axios";

// // // const PromptInput = () => {
// // //   const [inputText, setInputText] = useState("");
// // //   const [poem, setPoem] = useState("");

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await axios.post("http://localhost:9000/generate-poem", {
// // //         prompt: inputText,
// // //       });

// // //       if (response.data.poem) {
// // //         setPoem(response.data.poem);
// // //         console.log("Generated Poem:", response.data.poem);
// // //       } else {
// // //         console.error("Failed to generate poem:", response.data.error);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error generating poem:", error);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <div className={styles.inputGroup}>
// // //         <label className={styles.inputLabel} htmlFor="poemPrompt">
// // //           Type your prompt:
// // //         </label>
// // //         <input
// // //           id="poemPrompt"
// // //           type="text"
// // //           placeholder="Type something poetic..."
// // //           className={styles.inputField}
// // //           value={inputText}
// // //           onChange={(e) => setInputText(e.target.value)}
// // //         />
// // //         <GenerateButton />
// // //       </div>
// // //       {poem && <p className={styles.generatedPoem}>{poem}</p>}
// // //     </form>
// // //   );
// // // };

// // // export default PromptInput;
// // import React, { useState } from "react";
// // import styles from "./PromptInput.module.css";
// // import GenerateButton from "./GenerateButton";

// // const PromptInput = ({ fetchPoem }) => {
// //   const [inputText, setInputText] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (inputText.trim()) {
// //       fetchPoem(inputText);
// //       setInputText(""); // Clear the input field
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div className={styles.inputGroup}>
// //         <label className={styles.inputLabel} htmlFor="poemPrompt">
// //           Type your prompt:
// //         </label>
// //         <input
// //           id="poemPrompt"
// //           type="text"
// //           placeholder="Type something poetic..."
// //           className={styles.inputField}
// //           value={inputText}
// //           onChange={(e) => setInputText(e.target.value)}
// //         />
// //         <GenerateButton />
// //       </div>
// //     </form>
// //   );
// // };

// // export default PromptInput;

// import React, { useState } from "react";
// import styles from "./PromptInput.module.css";
// import GenerateButton from "./GenerateButton";

// const PromptInput = ({ fetchPoem }) => {
//   const [inputText, setInputText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputText.trim()) {
//       fetchPoem(inputText);
//       setInputText(""); // Clear the input field
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={styles.inputGroup}>
//         <label className={styles.inputLabel} htmlFor="poemPrompt">
//           Type your prompt:
//         </label>
//         <input
//           id="poemPrompt"
//           type="text"
//           placeholder="Type something poetic..."
//           className={styles.inputField}
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//         />
//         <GenerateButton />
//       </div>
//     </form>
//   );
// };

// export default PromptInput;

import React, { useState } from "react";
import styles from "./PromptInput.module.css";
import GenerateButton from "./GenerateButton";

const PromptInput = ({ fetchPoem }) => {
  const [inputText, setInputText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      fetchPoem(inputText);
      setInputText(""); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label className={styles.inputLabel} htmlFor="poemPrompt">
          Type your prompt:
        </label>
        <div className={styles.inputContainer}>
          <input
            id="poemPrompt"
            type="text"
            className={`${styles.inp} ${isFocused ? styles.focused : ""}`}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Weave your words into poetry..."
            required
          />
        </div>
        <div className={styles.generateButtonContainer}>
          <GenerateButton />
        </div>
      </div>
    </form>
  );
};

export default PromptInput;
