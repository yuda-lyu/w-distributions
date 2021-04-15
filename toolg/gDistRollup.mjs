import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'
// import getFiles from 'w-package-tools/src/getFiles.mjs'


let fdSrc = './src'
let fdTar = './dist'


rollupFiles({
    fns: 'WDistributions.mjs',
    fdSrc,
    fdTar,
    hookNameDist: () => 'w-distributions',
    nameDistType: 'kebabCase',
    bNodePolyfill: true,
    globals: {
    },
    external: [
    ],
})

