import React, { useState, useEffect } from 'react';
import 'react-chatbot-kit/build/main.css';
import Chatbot, { createChatBotMessage } from 'react-chatbot-kit';
import './BaobabChat.css';

const config = {
    botName: "Honor",
    initialMessages: [
        createChatBotMessage("Welcome! How can I help you today?")
    ],
    // ... other configuration options
    };

    // Define the message parser
    class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
        }
        // ... other parsing logic
    }
    }

    // Define the action provider
    class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, nice to meet you!");
        this.updateChatbotState(greetingMessage);
    }

    welcomeMessage() {
        const welcomeMessage = this.createChatBotMessage("Welcome! How can I help you today?");
        this.updateChatbotState(welcomeMessage);
    }

    updateChatbotState(message) {
        this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
        }));
    }

    // ... other actions
    }

    // Chatbot Component
    const BaobabChat = () => {
    const [isChatPanelOpen, setIsChatPanelOpen] = useState(false);
    const [actionProvider, setActionProvider] = useState();

    // Initialize the action provider
    useEffect(() => {
        const newActionProvider = new ActionProvider(createChatBotMessage, (newState) => {});
        setActionProvider(newActionProvider);
    }, []);

    const handleChatIconClick = () => {
        setIsChatPanelOpen(true);
        // Trigger the welcome message when the chat icon is clicked
        actionProvider && actionProvider.welcomeMessage();
    };

    const handleCloseButtonClick = () => {
        setIsChatPanelOpen(false);
    };

    return (
        <div className="chatbot-container">
        {!isChatPanelOpen && (
            <button onClick={handleChatIconClick} className="chatbot-icon">Chat with Us</button>
        )}
        {isChatPanelOpen && (
            <div className="chatbot-panel">
            <div className="chatbot-header">
                <button onClick={handleCloseButtonClick} className="chatbot-close-button">X</button>
            </div>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
            </div>
        )}
        </div>
    );
};

export default BaobabChat;
