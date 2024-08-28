# # # # # import google.generativeai as genai

# # # # # genai.configure(api_key="AIzaSyD1CLgcgi3G0WsQU00AbY4GzgCNwVdWbFs")

# # # # # # Create the model
# # # # # generation_config = {
# # # # #   "temperature": 1,
# # # # #   "top_p": 0.95,
# # # # #   "top_k": 64,
# # # # #   "max_output_tokens": 8192,
# # # # #   "response_mime_type": "text/plain",
# # # # # }

# # # # # model = genai.GenerativeModel(
# # # # #   model_name="gemini-1.5-flash",
# # # # #   generation_config=generation_config,
# # # # # )

# # # # # chat_session = model.start_chat(
# # # # #   history=[
# # # # #   ]
# # # # # )

# # # # # response = chat_session.send_message("write 8-10 lines poem on write poem on mom")

# # # # # print(response.text)


# # # # from flask import Flask, request, jsonify
# # # # from flask_cors import CORS
# # # # import google.generativeai as genai

# # # # app = Flask(__name__)
# # # # CORS(app)  # Enable CORS to allow requests from the frontend

# # # # # Configure the Google Generative AI model
# # # # genai.configure(api_key="AIzaSyD1CLgcgi3G0WsQU00AbY4GzgCNwVdWbFs")

# # # # generation_config = {
# # # #     "temperature": 1,
# # # #     "top_p": 0.95,
# # # #     "top_k": 64,
# # # #     "max_output_tokens": 8192,
# # # #     "response_mime_type": "text/plain",
# # # # }

# # # # model = genai.GenerativeModel(
# # # #     model_name="gemini-1.5-flash",
# # # #     generation_config=generation_config,
# # # # )

# # # # chat_session = model.start_chat(history=[])

# # # # # Storage for prompts
# # # # prompts = []

# # # # @app.route('/generate-poem', methods=['POST'])
# # # # def generate_poem():
# # # #     data = request.json
# # # #     prompt = data.get('prompt')

# # # #     if prompt:
# # # #         # Store the prompt
# # # #         prompts.append(prompt)
        
# # # #         # Print the prompt on the terminal
# # # #         print(f"Received prompt: {prompt}")

# # # #         # Use the prompt to generate the poem
# # # #         response = chat_session.send_message("Write a 8-10 line poem on the following topic: " + prompt)
        
# # # #         # Return the generated poem as JSON
# # # #         return jsonify({"poem": response.text})
# # # #     else:
# # # #         return jsonify({"error": "No prompt provided"}), 400

# # # # if __name__ == '__main__':
# # # #     app.run(port=9000, debug=True)

# # # from flask import Flask, request, jsonify
# # # from flask_cors import CORS
# # # import google.generativeai as genai

# # # app = Flask(__name__)
# # # CORS(app)  # Enable CORS to allow requests from the frontend

# # # # Configure the Google Generative AI model
# # # genai.configure(api_key="AIzaSyD1CLgcgi3G0WsQU00AbY4GzgCNwVdWbFs")

# # # generation_config = {
# # #     "temperature": 1,
# # #     "top_p": 0.95,
# # #     "top_k": 64,
# # #     "max_output_tokens": 8192,
# # #     "response_mime_type": "text/plain",
# # # }

# # # model = genai.GenerativeModel(
# # #     model_name="gemini-1.5-flash",
# # #     generation_config=generation_config,
# # # )

# # # chat_session = model.start_chat(history=[])

# # # # Storage for prompts
# # # prompts = []

# # # @app.route('/generate-poem', methods=['POST'])
# # # def generate_poem():
# # #     data = request.json
# # #     prompt = data.get('prompt')

# # #     if prompt:
# # #         # Store the prompt
# # #         prompts.append(prompt)
        
# # #         # Print the prompt on the terminal
# # #         print(f"Received prompt: {prompt}")

# # #         # Use the prompt to generate the poem
# # #         response = chat_session.send_message(f"Write a 8-10 line poem on the following topic: {prompt}")
        
# # #         # Format the poem by ensuring it has newline characters
# # #         formatted_poem = response.text.replace('\n', '<br>')  # Convert newlines to HTML line breaks
        
# # #         # Return the formatted poem as JSON
# # #         return jsonify({"poem": formatted_poem})
# # #     else:
# # #         return jsonify({"error": "No prompt provided"}), 400

# # # if __name__ == '__main__':
# # #     app.run(port=9000, debug=True)

# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # import google.generativeai as genai

# # app = Flask(__name__)
# # CORS(app)  # Enable CORS to allow requests from the frontend

# # # Configure the Google Generative AI model
# # genai.configure(api_key="AIzaSyD1CLgcgi3G0WsQU00AbY4GzgCNwVdWbFs")

# # generation_config = {
# #     "temperature": 1,
# #     "top_p": 0.95,
# #     "top_k": 64,
# #     "max_output_tokens": 8192,
# #     "response_mime_type": "text/plain",
# # }

# # model = genai.GenerativeModel(
# #     model_name="gemini-1.5-flash",
# #     generation_config=generation_config,
# # )

# # chat_session = model.start_chat(history=[])

# # # Storage for prompts
# # prompts = []

# # @app.route('/generate-poem', methods=['POST'])
# # def generate_poem():
# #     data = request.json
# #     prompt = data.get('prompt')

# #     if prompt:
# #         # Store the prompt
# #         prompts.append(prompt)
        
# #         # Print the prompt on the terminal
# #         print(f"Received prompt: {prompt}")

# #         # Use the prompt to generate the poem
# #         poem_response = chat_session.send_message("Write a 8-10 line poem on the following topic: " + prompt)
# #         poem_text = poem_response.text
        
# #         # Generate a title for the poem
# #         title_response = chat_session.send_message(f"Generate a title for the following poem:\n{poem_text}")
# #         poem_title = title_response.text
        
# #         # Return the title and poem as JSON
# #         return jsonify({"title": poem_title, "poem": poem_text})
# #     else:
# #         return jsonify({"error": "No prompt provided"}), 400

# # if __name__ == '__main__':
# #     app.run(port=9000, debug=True)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import google.generativeai as genai

# app = Flask(__name__)
# CORS(app)  # Enable CORS to allow requests from the frontend

# # Configure the Google Generative AI model
# genai.configure(api_key="AIzaSyD1CLgcgi3G0WsQU00AbY4GzgCNwVdWbFs")

# generation_config = {
#     "temperature": 1,
#     "top_p": 0.95,
#     "top_k": 64,
#     "max_output_tokens": 8192,
#     "response_mime_type": "text/plain",
# }

# model = genai.GenerativeModel(
#     model_name="gemini-1.5-flash",
#     generation_config=generation_config,
# )

# chat_session = model.start_chat(history=[])

# # Storage for prompts
# prompts = []

# @app.route('/generate-poem', methods=['POST'])
# def generate_poem():
#     data = request.json
#     prompt = data.get('prompt')

#     if prompt:
#         # Store the prompt
#         prompts.append(prompt)
        
#         # Print the prompt on the terminal
#         print(f"Received prompt: {prompt}")

#         # Generate the poem
#         poem_response = chat_session.send_message(f"Write a 8-10 line poem on the following topic: {prompt}")
#         poem = poem_response.text.strip()
        
#         # Generate a title for the poem
#         title_response = chat_session.send_message(f"Generate a title for a poem about, i want only one title: {prompt}")
#         title = title_response.text.strip()
        
#         # Return the generated poem and title as JSON
#         return jsonify({"title": title, "poem": poem})
#     else:
#         return jsonify({"error": "No prompt provided"}), 400

# if __name__ == '__main__':
#     app.run(port=9000, debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from flask_socketio import SocketIO

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend
socketio = SocketIO(app, cors_allowed_origins="*")

# Configure the Google Generative AI model
genai.configure(api_key="AIzaSyD1CLgcgi3G0WsQU00AbY4GzgCNwVdWbFs")

generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
)

chat_session = model.start_chat(history=[])

# Storage for prompts
prompts = []

@app.route('/generate-poem', methods=['POST'])
def generate_poem():
    data = request.json
    prompt = data.get('prompt')
    emotion = data.get('emotion')  # Get the selected emotion from the frontend

    if prompt:
        prompts.append(prompt)
        print(f"Received prompt: {prompt}")
        if (emotion):
            print(f"Selected emotion: {emotion}")

        poem_prompt = f"Write an 8-10 line poem on the following topic: {prompt}"
        if emotion:
            poem_prompt += f" The poem should evoke a feeling of {emotion}."
        
        print("Generating poem...")
        poem_response = chat_session.send_message(poem_prompt)
        poem = poem_response.text.strip()
        print(f"Generated poem: {poem}")

        print("Generating title...")
        title_response = chat_session.send_message(f"Generate a title for a poem about {prompt}. I want only one title and nothing else.")
        title = title_response.text.strip()
        print(f"Generated title: {title}")
        
        return jsonify({"title": title, "poem": poem})
    else:
        return jsonify({"error": "No prompt provided"}), 400

@app.route('/analyze-poem', methods=['POST'])
def analyze_poem():
    data = request.json
    poem = data.get('poem')

    if poem:
        analysis_response = chat_session.send_message(
            f"Provide a percentage breakdown of the following poem's emotions in this exact format, and nothing else: "
            f"Happiness: X%, Sadness: Y%, Anger: Z%, Fear: A%, Surprise: B%, Disgust: C%, Other: D%. "
            f"Make sure the percentages add up to 100%.\n\nPoem:\n{poem}"
        )
        
        analysis_result = analysis_response.text.strip()
        return jsonify({"analysis": analysis_result})
    else:
        return jsonify({"error": "No poem provided"}), 400

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    socketio.run(app, port=9000, debug=True)
