import * as vscode from 'vscode';
import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import { RTOSTracker } from '../rtos/rtos';

const writeHtmlToTmpDir = (str: string) => {
    try {
        // eslint-disable-next-line no-constant-condition
        if (false) {
            const fname = path.join(os.tmpdir(), 'rtos.html');
            console.log(`Write HTML to file ${fname}`);
            fs.writeFileSync(fname, str);
        }
    } catch (e) {
        console.log(e ? e.toString() : 'unknown exception?');
    }
};

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('mcu-debug.rtos-views.helloWorld', () => {
            vscode.window.showInformationMessage('Hello from rtos-views!');
        })
    );
    const rtosTracker = new RTOSTracker(context, writeHtmlToTmpDir); // eslint-disable-line @typescript-eslint/no-unused-vars
}

export function deactivate() { } // eslint-disable-line @typescript-eslint/no-empty-function
