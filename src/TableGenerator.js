import SimpleLogListener from "./parser/SimpleLogListener"

export default class TableGenerator extends SimpleLogListener {

    tableSource = "";

    exitLogLine(ctx) {
        const logType = ctx.logType().getText();
        const logMessage = ctx.logMessage().getText();
        const logFile = ctx.logSender().logFile().getText();
        const logLine = ctx.logSender().DIGITS(0).getText();
        this.tableSource +=
        `
        <tr>
            <td>${logType}</td>
            <td>${logMessage}</td>
            <td>${logFile}</td>
            <td>${logLine}</td>
        <tr>
        `
    }

    getTable() {
        const table = `
            <table>
                <tr>
                    <th>Type</th>
                    <th>Message</th>
                    <th>File</th>
                    <th>Line</th>
                <tr>
                ${this.tableSource}
            </table>
        `;
        return table;
    }
}
