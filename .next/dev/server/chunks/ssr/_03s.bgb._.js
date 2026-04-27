module.exports = [
"[project]/config/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: 'Launch Labs',
    tagline: 'Del concepto al lanzamiento.',
    description: 'Consultoría digital especializada en landing pages de alta conversión y automatizaciones simples para negocios que quieren crecer sin complicarse.',
    url: 'https://launchlabs.mx',
    email: 'hola@launchlabs.mx',
    socials: {
        linkedin: 'https://linkedin.com/company/launchlabs',
        twitter: 'https://twitter.com/launchlabs_mx'
    }
};
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$sans$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/geist/dist/sans.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistsans_d5a4f12f$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GeistSans$3e$__ = __turbopack_context__.i("[project]/node_modules/geist/dist/geistsans_d5a4f12f.js [app-rsc] (ecmascript) <export default as GeistSans>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$mono$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/geist/dist/mono.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistmono_157ca88a$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GeistMono$3e$__ = __turbopack_context__.i("[project]/node_modules/geist/dist/geistmono_157ca88a.js [app-rsc] (ecmascript) <export default as GeistMono>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: {
        default: `${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name} — ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].tagline}`,
        template: `%s | ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name}`
    },
    description: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].description,
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].url),
    openGraph: {
        title: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].description,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].url,
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
        locale: 'es_MX',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name
    },
    robots: {
        index: true,
        follow: true
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "es",
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistsans_d5a4f12f$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GeistSans$3e$__["GeistSans"].variable} ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistmono_157ca88a$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GeistMono$3e$__["GeistMono"].variable}`,
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "bg-background text-foreground antialiased font-sans",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                attribute: "class",
                defaultTheme: "light",
                enableSystem: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
"[project]/node_modules/geist/dist/geistsans_d5a4f12f.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geistsans_d5a4f12f-module__Ur3q_a__className",
  "variable": "geistsans_d5a4f12f-module__Ur3q_a__variable",
});
}),
"[project]/node_modules/geist/dist/geistsans_d5a4f12f.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistsans_d5a4f12f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/node_modules/geist/dist/geistsans_d5a4f12f.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistsans_d5a4f12f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'GeistSans', 'GeistSans Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistsans_d5a4f12f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistsans_d5a4f12f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/node_modules/geist/dist/sans.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistsans_d5a4f12f$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/geist/dist/geistsans_d5a4f12f.js [app-rsc] (ecmascript)");
;
;
}),
"[project]/node_modules/geist/dist/geistsans_d5a4f12f.js [app-rsc] (ecmascript) <export default as GeistSans>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeistSans",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistsans_d5a4f12f$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistsans_d5a4f12f$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/geist/dist/geistsans_d5a4f12f.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/geist/dist/geistmono_157ca88a.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geistmono_157ca88a-module__iaM1Ya__className",
  "variable": "geistmono_157ca88a-module__iaM1Ya__variable",
});
}),
"[project]/node_modules/geist/dist/geistmono_157ca88a.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistmono_157ca88a$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/node_modules/geist/dist/geistmono_157ca88a.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistmono_157ca88a$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'GeistMono', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistmono_157ca88a$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistmono_157ca88a$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/node_modules/geist/dist/mono.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistmono_157ca88a$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/geist/dist/geistmono_157ca88a.js [app-rsc] (ecmascript)");
;
;
}),
"[project]/node_modules/geist/dist/geistmono_157ca88a.js [app-rsc] (ecmascript) <export default as GeistMono>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeistMono",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistmono_157ca88a$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$geist$2f$dist$2f$geistmono_157ca88a$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/geist/dist/geistmono_157ca88a.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next-themes/dist/index.mjs [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/next-themes/dist/index.mjs <module evaluation>", "ThemeProvider");
const useTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/next-themes/dist/index.mjs <module evaluation>", "useTheme");
}),
"[project]/node_modules/next-themes/dist/index.mjs [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/next-themes/dist/index.mjs", "ThemeProvider");
const useTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/next-themes/dist/index.mjs", "useTheme");
}),
"[project]/node_modules/next-themes/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
];

//# sourceMappingURL=_03s.bgb._.js.map