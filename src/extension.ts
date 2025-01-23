import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Register the "Copy File Name to Clipboard" command
    const disposable = vscode.commands.registerCommand('extension.copyFileName', (uri: vscode.Uri) => {
        if (uri) {
            const filePath = uri.fsPath;

            // Extract the file name from the path
            const fileName = filePath.split(/[/\\]/).pop();

            if (fileName) {
                // Copy the file name to the clipboard
                vscode.env.clipboard.writeText(fileName);
                vscode.window.showInformationMessage(`File name "${fileName}" copied to clipboard.`);
            }
        } else {
            vscode.window.showInformationMessage('No file selected.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}