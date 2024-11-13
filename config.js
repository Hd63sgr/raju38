const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923240806210" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314927710";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923240806210";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_42_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICA1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNixcbiAgICAgICAgMjI2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc3LFxuICAgICAgICAzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI2LFxuICAgICAgICA3MixcbiAgICAgICAgMjIzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkzLFxuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImV5OWYyZFB4UDhVb01KaVVGZEMxNkZmamExL1dDZjBGVklPN0NGcmtOZHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZRb1RtTHZBUnNDNGFJcnFDSnBGcVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDZiZjM5OTEtYTAxNS00OGUzLWFjYjktMjA3MWNiNjkyMzI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNSxcbiAgICAgIDEwNSxcbiAgICAgIDUsXG4gICAgICA3MCxcbiAgICAgIDg2LFxuICAgICAgMTQ3LFxuICAgICAgMjQ2LFxuICAgICAgMTY4LFxuICAgICAgMTcxLFxuICAgICAgMTU2LFxuICAgICAgMTU0LFxuICAgICAgMTg3LFxuICAgICAgMTk4LFxuICAgICAgMzgsXG4gICAgICA2MCxcbiAgICAgIDEzMyxcbiAgICAgIDEyLFxuICAgICAgNDcsXG4gICAgICA3OSxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICA0NixcbiAgICAgIDE1NSxcbiAgICAgIDIyNixcbiAgICAgIDk0LFxuICAgICAgODIsXG4gICAgICA3MSxcbiAgICAgIDE0MixcbiAgICAgIDE1MixcbiAgICAgIDIyOCxcbiAgICAgIDc2LFxuICAgICAgNjUsXG4gICAgICAxNDMsXG4gICAgICAxMjgsXG4gICAgICA1NyxcbiAgICAgIDE3OCxcbiAgICAgIDE0MSxcbiAgICAgIDEzLFxuICAgICAgMzcsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDNQVjhOUTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmY7wnZCK4a2E4oKKzLbht6TigonMts2l4oKCzLbht57igoPMts2k4oKCzLbht6HigoTMts2t4oKAzLbMtuGqs+KCiMy24bec4oKAzLbNpeKChsy24bee4oKCzLbht57igoHMts2k4oKAzLbht6JcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MTo3MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcnc3SWdIRU9yRXc3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFJQnBYZ3VNTkNWbjdwQ293enZKSFZSekFqT0FuQkd2M2w2WXQ2TzNHM009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUG81YUdrNWJXdXlDTDZsL2c0RlhQZ3ZRbDRva2lRQkR1c09KeTZ5Uis3ZGVJNUxKZFlGcnpuRk9oWW9XRWdGckl4bElQbkVHVzBIRVJDWEdoYnVsRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDk5VVNxSHZ3akhJNEpZUXFTR2JKNVpZaGhRclpXME11VHhDZWhQcVhKL1FOcVJRN25LbDl0djRBN0dYamRZa0tLSzhTQTErbk9mbEpiN2kzbWlPaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTI1Njk0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ3SVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQndJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNldoTy9DZml1bFhKbWNPSWQ2OFBmcTVxLzNFWHNhdFVjTVZwb09rS1F1Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODk3NjA5MjkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEyNTY5NDI5MjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "Raju",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
