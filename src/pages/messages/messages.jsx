import React, { useState, memo, useCallback } from 'react'
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import ImageSharpIcon from '@mui/icons-material/ImageSharp';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PageWrapper from '../../components/PageWrapper';

const Messages = memo(() => {
  const [selectedChat, setSelectedChat] = useState(null)
  const [showMobileChat, setShowMobileChat] = useState(false)

  // Sample conversations
  const conversations = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey! How are you doing?",
      time: "2:30 PM",
      avatar: "https://images.pexels.com/photos/25724429/pexels-photo-25724429.jpeg",
      online: true,
      unread: 2
    },
    {
      id: 2,
      name: "Sarah Wilson",
      lastMessage: "Thanks for the help yesterday!",
      time: "1:45 PM",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      online: false,
      unread: 0
    }
  ]

  // Sample messages
  const getMessages = (chatId) => {
    const messages = {
      1: [
        { id: 1, text: "Hey! How are you doing?", sender: "other", time: "2:30 PM" },
        { id: 2, text: "I'm doing great! How about you?", sender: "me", time: "2:32 PM" },
        { id: 3, text: "Pretty good! Just working on some projects.", sender: "other", time: "2:35 PM" },
      ],
      2: [
        { id: 1, text: "Thanks for the help yesterday!", sender: "other", time: "1:45 PM" },
        { id: 2, text: "No problem at all! Happy to help.", sender: "me", time: "1:47 PM" }
      ]
    }
    return messages[chatId] || []
  }

  const handleChatSelect = useCallback((chat) => {
    setSelectedChat(chat)
    setShowMobileChat(true)
  }, [])

  const handleBackToChats = useCallback(() => {
    setShowMobileChat(false)
    setSelectedChat(null)
  }, [])

  return (
    <PageWrapper className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-2 sm:px-4 xl:px-16 pt-8 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden h-[calc(100vh-8rem)]">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {showMobileChat && (
                <button 
                  onClick={handleBackToChats}
                  className="md:hidden p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <ArrowBackIcon sx={{ color: 'white', fontSize: 24 }} />
                </button>
              )}
              <h1 className="text-xl font-semibold text-white">Messages</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-blue-600 transition-colors">
                <SearchIcon sx={{ color: 'white', fontSize: 20 }} />
              </button>
              <button className="p-2 rounded-full hover:bg-blue-600 transition-colors">
                <MoreHorizSharpIcon sx={{ color: 'white', fontSize: 20 }} />
              </button>
            </div>
          </div>

          <div className="flex h-[calc(100%-64px)]">
            
            {/* Chat List */}
            <div className={`${showMobileChat ? 'hidden md:flex' : 'flex'} flex-col w-full md:w-[40%] bg-gray-50`}>
              <div className="flex-1 overflow-y-auto">
                {conversations.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => handleChatSelect(chat)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors ${
                      selectedChat?.id === chat.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Avatar with Apple-style status */}
                      <div className="relative shrink-0">
                        <img 
                          src={chat.avatar} 
                          alt={chat.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {chat.online && (
                          <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border border-white shadow-sm"></div>
                        )}
                      </div>
                      
                      {/* Chat Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-800 truncate">{chat.name}</h3>
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                          {chat.unread > 0 && (
                            <span className="bg-red-500 text-white text-[11px] font-medium rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                              {chat.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className={`${!showMobileChat ? 'hidden md:flex' : 'flex'} flex-col w-full md:w-[60%] bg-white`}>
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={selectedChat.avatar} 
                        alt={selectedChat.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">{selectedChat.name}</h3>
                        <p className="text-xs text-gray-500">
                          {selectedChat.online ? 'Online' : 'Last seen recently'}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <MoreHorizSharpIcon sx={{ fontSize: 20 }} />
                    </button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {getMessages(selectedChat.id).map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[70%] ${message.sender === 'me' ? 'order-2' : 'order-1'}`}>
                          <div
                            className={`px-4 py-2 rounded-2xl ${
                              message.sender === 'me'
                                ? 'bg-blue-500 text-white rounded-br-md'
                                : 'bg-gray-200 text-gray-900 rounded-bl-md'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${
                              message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex items-center gap-3">
                      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <AttachFileIcon sx={{ color: 'gray', fontSize: 20 }} />
                      </button>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Message"
                          className="w-full px-4 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100">
                          <ImageSharpIcon sx={{ color: 'gray', fontSize: 20 }} />
                        </button>
                      </div>
                      <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                        <SendIcon sx={{ fontSize: 20 }} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SearchIcon sx={{ color: 'gray', fontSize: 32 }} />
                    </div>
                    <h3 className="text-lg font-medium text-gray-600 mb-2">Select a conversation</h3>
                    <p className="text-gray-500">Choose a chat to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
})

Messages.displayName = 'Messages'

export default Messages
