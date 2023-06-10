import React, { useContext, useCallback, useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { authcontext } from '@/context/authcontext'

import {  
  Card,
  CardBody,
  CardHeader,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography
} from "@material-tailwind/react"

export function Scripts() {

  const { user } = useContext(authcontext)

  const javascript = 
  '<script type="text/javascript" async>\n' + 
    'import("https://openfpcdn.io/fingerprintjs/v3")\n' +
    '.then(FingerprintJS => FingerprintJS.load())\n' +
    '.then(fp => fp.get())\n' +
    '.then(result => {\n' +
        '\tconst visitorId = result.visitorId;\n' +
        '\tconst YOUR_API_URL = "https://server-blackedips.bunnyenv.com/v1/cs/' + user.id + '/" + visitorId;\n' +
        '\tfetch(YOUR_API_URL)\n' +
            '\t.then(async response => {\n' +
                '\t\tconst data = await response.text();\n' +
                '\t\tconsole.log(data);\n' +
                '\t\treturn JSON.parse(data);\n' +
            '\t}).then(result => {\n' +
                '\t\tif(result && (result.status === "bot" || result.status === "blocked" || result.status === "blacklisted")) {\n' +
                    '\t\t\twindow.location.href = "/disabled";\n' +
                '\t\t}\n' +
            '\t})\n' +
    '})\n' +
  '</script>';
  return (
    <>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <CardBody className="text-left">
                  <span>Place the following script inside {'<head> ... </head>'} of the html, replace window.ocation.href with disabled page you'd like to disable</span>
                  <SyntaxHighlighter language="html" style={tomorrowNight}>
                    {javascript}
                  </SyntaxHighlighter>
                </CardBody>
            </div>
    </>
  )
}

export default Scripts