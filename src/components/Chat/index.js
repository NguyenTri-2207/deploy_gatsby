import React from "react";

const Chat = () =>
(
    <div className="font-lato">
        <div id="tawkchat-maximized-wrapper" className="mobile embedded ltr-direction white noMenu">
            <div id="innerWrapper" className="border-corner">
                <div id="headerBoxWrapper" className="border-corner">
                    <div id="headerBox" className="theme-background-color theme-text-color border-corner">
                        <div id="headerAccountStateContainer">
                            <p id="headerAccountState"><span id="shortMessage">Online</span></p>
                            <div id="agentProfileContainer">&nbsp;</div>
                        </div>
                        <div id="headerBoxControlsContainer"><a id="screenShare" className="headerBoxLink" href="#" title="Screen Share" style={{ display: 'none' }}><span className="icon-desktop-sharing headerBoxIcon" /></a><a id="voiceCall" className="headerBoxLink" href="#" title="Voice Call" style={{ display: 'none' }}><span className="icon-voice-chat headerBoxIcon" /></a><a id="videoCall" className="headerBoxLink" href="#" title="Video Call" style={{ display: 'none' }}><span className="icon-video-chat headerBoxIcon" /></a>
                            <div className="headerBoxLink"><a id="chatMenu" href="#" title="Menu"><span className="icon-menu headerBoxIcon" /></a>
                                <div id="chatMenuControls">
                                    <div id="chatMenuControlsOverlay" />
                                    <ul>
                                        <li id="changeName" style={{ display: 'block' }}>Change Name</li>
                                        <li id="emailTranscriptOption" style={{ display: 'block' }}>Email transcript</li>
                                        <li id="soundOn" style={{ display: 'block' }}>Sound On</li>
                                        <li id="soundOff" style={{ display: 'none' }}>Sound Off</li>
                                        <li id="popoutChat">Pop out widget</li>
                                        <li id="endChat">End this chat session</li>
                                    </ul>
                                </div>
                            </div><a id="minimizeChat" className="headerBoxLink" href="#" title="Close"><span className="icon-close headerBoxIcon" /></a>
                        </div>
                    </div>
                </div>
                <div id="contentContainer" className="       form-opened ">
                    <div id="greetingsMainContainer" className="theme-background-color theme-text-color" style={{ display: 'block' }}>
                        <div id="greetingsContent" className style={{ display: 'block' }}>
                            <p id="greetingsText">Please fill out the form below to start chatting with the next available
                        agent.</p>
                            <p id="greetingsWaitTime" />
                        </div>
                        <div id="agentBar">
                            <div id="agentList" />
                        </div>
                    </div>
                    <div id="chatPanel" style={{ display: 'none' }}>
                        <div id="chatContainerWrapper">
                            <div id="chatContainer">
                                <div id="chatTableWrapper">
                                    <div id="chatRowWrapper">
                                        <div id="chatCellWrapper">
                                            <div id="chatWrapper" className="single-agent">
                                                <div id="newMessageDivider" className>
                                                    <hr id="newMessageDividerLine" /> <span id="newMessageDividerLabel">NEW
                                    MESSAGES</span>
                                                </div>
                                                <div id="messageId-16164085393660" className="messageContainer clearfix agentChatContainer ">
                                                    <div className="ownerNameContainer trigger">
                                                        <div className="messageOwnerName agent">Customer Support</div>
                                                    </div>
                                                    <div className="profileImageContainer">
                                                        <div style={{ backgroundImage: 'transparent' }} className="agentProfileImage" />
                                                    </div>
                                                    <div className="clearfix" />
                                                    <div className="messageBody trigger clearfix">
                                                        <div className="messageWrapper ">
                                                            <div className="message">Welcome to our site, if you need help
                                                            simply reply to this message, we are online and ready to
                                        help.</div>
                                                        </div>
                                                        <div className="clear" />
                                                        <div className="time-agent-display">
                                                            <div className="agent-div agent">Customer Support</div>
                                                            <div className="time-div __TIME_CLASS__">17:22</div>
                                                        </div>
                                                        <div className="clear" />
                                                    </div>
                                                </div>
                                                <div id="agentTypingContainer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="maxFileNotificationContainer" className="hidden">
                                    <div id="maxFileNotifHeader">
                                        <div id="maxFileNotifIconContainer">
                                            <div id="maxFileNotifIconWrapper" /><span id="maxFileNotifIcon">!</span>
                                        </div><span id="maxFileNotifLabel">Warning</span>
                                        <div className="closeButtonContainer"><span className="icon-close" id="closeNumberNotification" /></div>
                                    </div>
                                    <div id="maxFileNotificationMessage">Sorry, file transfer is limited to 5 files at a
                            time. Please try the following file(s) again :</div>
                                    <div id="maxFileNumberList" />
                                </div>
                                <div id="maxSizeNotificationContainer" className="hidden">
                                    <div id="maxSizeNotifHeader">
                                        <div id="maxSizeNotifIconContainer">
                                            <div id="maxSizeNotifIconWrapper" /><span id="maxSizeNotifIcon">!</span>
                                        </div><span id="maxSizeNotifLabel">Warning</span>
                                        <div className="closeButtonContainer"><span className="icon-close" id="closeSizeNotification" /></div>
                                    </div>
                                    <div id="maxSizeNotificationMessage">Sorry, file transfer is limited to 50mb per file.
                            Please compress the following file(s) and try again.</div>
                                    <div id="maxFileSizeList" />
                                </div>
                            </div>
                        </div>
                        <div id="actionsContainer" style={{ height: '46px' }}>
                            <fieldset id="textareaWrapper">
                                <div id="textareaContainer" className="additionalPadding with-emoji">
                                    <div id="tooLongMsgNotification"><span className="icon-alert" /><span id="notifMessageText">Message cannot exceed 5000 characters</span></div>
                                    <textarea id="chatTextarea" className placeholder="Type here and press enter.." defaultValue={""} />
                                </div>
                                <div id="actionButtonsContainer">
                                    <div id="hidableActionsWrapper">
                                        <div id="rateMainWrapper" style={{ display: 'block' }}><a id="rateChat" href="#"><span className="icon-vote-up" /></a>
                                            <div id="rateContainer"><a id="rateNegative" href="#" title="Rate this conversation with -1"><span className="icon-vote-down" /></a><a id="ratePositive" href="#" title="Rate this conversation with +1"><span className="icon-vote-up" /></a></div>
                                        </div><a id="uploadFileOption" href="#" title="Upload File" style={{ display: 'block' }}><label htmlFor="fileInput"><span className="icon-upload" /></label></a>
                                    </div><a id="viewEmoji" href="#" title="Insert emoji" style={{ display: 'block' }} className><span className="icon-happy" /></a>
                                </div>
                                <div id="textareaSubmitContainer">
                                    <div className="icon-mobile-submit" id="textareaSubmitButton" />
                                </div>
                            </fieldset>
                        </div>
                        <div id="file-upload-drop-container">
                            <div id="fileUploadWrapper">
                                <div id="file-upload-drop-icon-label-container"><span id="file-upload-drop-icon" className="icon-upload" /><span id="file-upload-drop-label">Drop files here to
                            upload</span></div>
                            </div>
                        </div>
                        <form encType="multipart/form-data" id="upload-form" method="post"><input type="file" className="hidden file-input" name="file[]" multiple="multiple" id="fileInput" /><label className="upload-file sprite-background" title="Upload File" htmlFor="test" /></form>
                    </div>
                    <div id="vzHb5Ih-1616408507124" />
                    <div id="TZK8Ypj-1616408506250"><a id="BUCB9Q7-1616408507124" /><a id="DAzjEBd-1616408507124" /><a id="lC8H2xs-1616408507124" /><a id="u7oXBxH-1616408506250" tabIndex={-1} href="https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=57fdc3d4304e8e758558c5f9" target="_blank" style={{}}>We're <img className="emojione" alt="⚡" title=":zap:" src="https://cdn.jsdelivr.net/emojione/assets/png/26a1.png?v=2.2.7" /> by <b>tawk.to</b></a><a id="lU1jwsh-1616408507124" /><a id="lw3nquj-1616408507124" /><a id="iYF7Td5-1616408507124" /></div>
                    <div id="newMessagesBar">
                        <div id="newMessageContainer">
                            <p id="newMessagesNotification"><a id="newMessagesNotificationLink" title className="icon-message" /><span id="notificationMessageText">1 new message</span></p>
                            <div id="newMessageArrowDown" />
                        </div>
                    </div>
                    <div id="formContainer" className="has-required" style={{ display: 'block' }}>
                        <div className="form" id="preChatForm">
                            <div id="formFieldsContainer">
                                <div className="formTable">
                                    <div className="formRow">
                                        <div className="formCell">
                                            <div className="formFrame">
                                                <div className="longFormContainer">
                                                    <div id="formInnerHeight">
                                                        <fieldset>
                                                            <div className="inputContainer"><input type="text" id="prechat0Field" title="Name" defaultValue className="textInput" maxLength={40} placeholder="* Name" /><label className="form-field-label small">* Name</label></div>
                                                            <div id="prechat0FieldErrorIcon" className="formErrorIcon">
                                                                <div className="icon-error field-error" />
                                                            </div>
                                                        </fieldset>
                                                        <div id="prechat0FieldError" className="formErrorContainer" />
                                                        <fieldset>
                                                            <div className="inputContainer"><input type="email" id="prechat1Field" title="Email" defaultValue className="textInput" maxLength={150} placeholder="* Email" /><label className="form-field-label small">* Email</label></div>
                                                            <div id="prechat1FieldErrorIcon" className="formErrorIcon">
                                                                <div className="icon-error field-error" />
                                                            </div>
                                                        </fieldset>
                                                        <div id="prechat1FieldError" className="formErrorContainer" />
                                                        <fieldset className="textareaFieldset">
                                                            <div className="inputContainer"><textarea id="prechat2Field" title="Question" maxLength={500} placeholder=" Question" defaultValue={""} /><label className="form-field-label small"> Question</label></div>
                                                            <div id="prechat2FieldErrorIcon" className="formErrorIcon">
                                                                <div className="icon-error field-error" />
                                                            </div>
                                                        </fieldset>
                                                        <div id="prechat2FieldError" className="formErrorContainer" />
                                                    </div>
                                                </div>
                                                <div id="prechatButtonContainer" className="longFormBottomContainer"><button id="formCancel" className="declineButton formButton">Cancel</button><button id="formSubmit" className="approveButton formButton theme-background-color theme-text-color">Start
                                    Chat</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="submitWrapper" />
                        </div>
                    </div>
                    <div id="htUeq5S-1616408507124" />
                    <div id="Kl60fAk-1616408507124" />
                    <div id="UfqhBaA-1616408507124" />
                </div>
                <div id="emoji-selection-container" style={{ bottom: '48px' }}>
                    <div className="lds-spinner loader">
                        <div className="spin spin-1" />
                        <div className="spin spin-2" />
                        <div className="spin spin-3" />
                        <div className="spin spin-4" />
                        <div className="spin spin-5" />
                        <div className="spin spin-6" />
                        <div className="spin spin-7" />
                        <div className="spin spin-8" />
                        <div className="spin spin-9" />
                        <div className="spin spin-10" />
                        <div className="spin spin-11" />
                        <div className="spin spin-12" />
                    </div>
                </div>
                <div id="tawkToContent">
                    <div id="formFieldsContainer">
                        <div className="formTable">
                            <div className="formRow">
                                <div className="formCell">
                                    <div className="formFrame">
                                        <div className="contentContainer">
                                            <div className="longFormContainer">
                                                <div id="formInnerHeight">
                                                    <div id="tawkImage" />
                                                    <p id="tawkHeader">TAWK.TO</p>
                                                    <div id="tawkContent" className="formMessageField innerTittle">This widget
                                                    is powered by tawk.to - a free messaging application that lets you
                                    monitor and engage with the visitors on your website.</div>
                                                </div>
                                            </div>
                                            <div className="longFormBottomContainer"><button id="cancelTawkRedirect" className="formButton">Cancel</button><button id="tawkRedirect" className="theme-background-color theme-text-color formButton">Visit
                                  tawk.to</button>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Chat;