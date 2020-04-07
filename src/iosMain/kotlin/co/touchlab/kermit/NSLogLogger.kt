package co.touchlab.kermit

import platform.Foundation.NSLog

class NSLogLogger : Logger() {
    override fun log(severity: Severity, message: String, tag: String?, throwable: Throwable?) {
        //TODO: Handle throwable
        NSLog("%s: (%s) %s", severity.name, tag, message)
    }
}