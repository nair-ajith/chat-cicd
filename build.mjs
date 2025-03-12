#!/usr/bin/env node

import * as esbuild from 'esbuild';
import moment from "moment";

await esbuild.build({
    entryPoints: ["src/index.js"],
    outfile: "dist/index.js",
    platform: "node",
    bundle: true,
    minify: process.argv.includes("--minify"),
    external: [],
    banner: {
        js: `/*!\n* ${process.env.npm_package_name}\n* @version ${process.env.npm_package_version}\n* @time ${moment().format()}\n*/`
    }
});
