"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const driveAuth = require("./drive-auth");
const driveFile = require("./upload-file");
const utils = require("./drive-utils");
const googleapis_1 = require("googleapis");
function uploadFileOrFolder(filePath, mime, parent, size, callback) {
    driveAuth.call((err, auth) => {
        if (err) {
            callback(err, null);
            return;
        }
        const drive = googleapis_1.google.drive({ version: 'v3', auth });
        if (mime === 'application/vnd.google-apps.folder' || size === 0) {
            createFolderOrEmpty(drive, filePath, parent, mime, callback);
        }
        else {
            driveFile.uploadGoogleDriveFile(parent, {
                filePath: filePath,
                mimeType: mime
            })
                .then(id => callback(null, id))
                .catch(err => callback(err.message, null));
        }
    });
}
exports.uploadFileOrFolder = uploadFileOrFolder;
function createFolderOrEmpty(drive, filePath, parent, mime, callback) {
    drive.files.create({
        // @ts-ignore Unknown property error
        fields: 'id',
        resource: {
            mimeType: mime,
            name: filePath.substring(filePath.lastIndexOf('/') + 1),
            parents: [parent]
        }
    }, (err, res) => {
        if (err) {
            callback(err.message, null);
        }
        else {
            callback(null, res.data.id);
        }
    });
}
function getSharableLink(fileId, isFolder, callback) {
    driveAuth.call((err, auth) => {
        if (err) {
            callback(err, null);
            return;
        }
        const drive = googleapis_1.google.drive({ version: 'v3', auth });
        drive.permissions.create({
            fileId: fileId,
            // @ts-ignore Unknown property error
            resource: {
                role: 'reader',
                type: 'anyone'
            }
        }, (err, res) => {
            if (err) {
                callback(err.message, null);
            }
            else {
                callback(null, utils.getFileLink(fileId, isFolder));
            }
        });
    });
}
exports.getSharableLink = getSharableLink;
