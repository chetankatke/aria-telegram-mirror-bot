"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DlVars {
    constructor(gid, msg, isTar, downloadDir) {
        this.gid = gid;
        this.isTar = isTar;
        var username;
        if (msg.from.username) {
            username = '@' + msg.from.username;
        }
        else {
            username = msg.from.first_name;
        }
        this.downloadDir = downloadDir;
        this.tgFromId = msg.from.id;
        this.tgUsername = username;
        this.tgChatId = msg.chat.id;
        this.tgMessageId = msg.message_id;
    }
}
exports.DlVars = DlVars;
