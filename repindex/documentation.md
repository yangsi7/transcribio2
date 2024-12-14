### tsconfig.node.json

```
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

### index.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### tailwind.config.js

```
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### .DS_Store

Error reading file.

### tsconfig.app.json

```
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

```

### .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

### package-lock.json

```
{
  "name": "transcribio",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "transcribio",
      "version": "0.0.0",
      "dependencies": {
        "date-fns": "^2.30.0",
        "docx": "^8.5.0",
        "file-saver": "^2.0.5",
        "jspdf": "^2.5.1",
        "lucide-react": "^0.344.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-force-graph-2d": "^1.26.1",
        "react-router-dom": "^6.14.0",
        "sonner": "^1.4.3",
        "zustand": "^4.5.2"
      },
      "devDependencies": {
        "@eslint/js": "^9.9.1",
        "@types/file-saver": "^2.0.7",
        "@types/react": "^18.3.16",
        "@types/react-dom": "^18.3.5",
        "@types/react-router-dom": "^5.3.3",
        "@vitejs/plugin-react": "^4.3.1",
        "autoprefixer": "^10.4.20",
        "eslint": "^9.9.1",
        "eslint-plugin-react-hooks": "^5.1.0-rc.0",
        "eslint-plugin-react-refresh": "^0.4.11",
        "globals": "^15.9.0",
        "postcss": "^8.4.49",
        "tailwindcss": "^3.4.16",
        "typescript": "^5.5.3",
        "typescript-eslint": "^8.3.0",
        "vite": "^5.4.2"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
      "dev": true,
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.26.2",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",
      "integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.25.9",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.26.3",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.3.tgz",
      "integrity": "sha512-nHIxvKPniQXpmQLb0vhY3VaFb3S0YrTAwpOWJZh1wn3oJPjJk9Asva204PsBdmAE8vpzfHudT8DB0scYvy9q0g==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.0.tgz",
      "integrity": "sha512-i1SLeK+DzNnQ3LL/CswPCa/E5u4lh1k6IAEphON8F+cXt0t9euTshDru0q7/IqMa1PMPz5RnHuHscF8/ZJsStg==",
      "dev": true,
      "dependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/code-frame": "^7.26.0",
        "@babel/generator": "^7.26.0",
        "@babel/helper-compilation-targets": "^7.25.9",
        "@babel/helper-module-transforms": "^7.26.0",
        "@babel/helpers": "^7.26.0",
        "@babel/parser": "^7.26.0",
        "@babel/template": "^7.25.9",
        "@babel/traverse": "^7.25.9",
        "@babel/types": "^7.26.0",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.26.3",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.3.tgz",
      "integrity": "sha512-6FF/urZvD0sTeO7k6/B15pMLC4CHUv1426lzr3N01aHJTl046uCAh9LXW/fzeXXjPNCJ6iABW5XaWOsIZB93aQ==",
      "dev": true,
      "dependencies": {
        "@babel/parser": "^7.26.3",
        "@babel/types": "^7.26.3",
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.25",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.25.9.tgz",
      "integrity": "sha512-j9Db8Suy6yV/VHa4qzrj9yZfZxhLWQdVnRlXxmKLYlhWUVB1sB2G5sxuWYXk/whHD9iW76PmNzxZ4UCnTQTVEQ==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.25.9",
        "@babel/helper-validator-option": "^7.25.9",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz",
      "integrity": "sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==",
      "dev": true,
      "dependencies": {
        "@babel/traverse": "^7.25.9",
        "@babel/types": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz",
      "integrity": "sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-imports": "^7.25.9",
        "@babel/helper-validator-identifier": "^7.25.9",
        "@babel/traverse": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.25.9.tgz",
      "integrity": "sha512-kSMlyUVdWe25rEsRGviIgOWnoT/nfABVWlqt9N19/dIPWViAOW2s9wznP5tURbs/IDuNk4gPy3YdYRgH3uxhBw==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",
      "integrity": "sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz",
      "integrity": "sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz",
      "integrity": "sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.0.tgz",
      "integrity": "sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==",
      "dev": true,
      "dependencies": {
        "@babel/template": "^7.25.9",
        "@babel/types": "^7.26.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.26.3",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.3.tgz",
      "integrity": "sha512-WJ/CvmY8Mea8iDXo6a7RK2wbmJITT5fN3BEkRuFlxVyNx8jOKIIhmC4fSkTcPcf8JyavbBwIe6OpiCOBXt/IcA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.26.3"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.25.9.tgz",
      "integrity": "sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.25.9.tgz",
      "integrity": "sha512-+iqjT8xmXhhYv4/uiYd8FNQsraMFZIfxVSqxxVSZP0WbbSAWvBXAul0m/zu+7Vv4O/3WtApy9pmaTMiumEZgfg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.26.0.tgz",
      "integrity": "sha512-FDSOghenHTiToteC/QRlv2q3DhPZ/oOXTBoirfWNx1Cx3TMVcGWQtMMmQcSvb/JjpNeGzx8Pq/b4fKEJuWm1sw==",
      "dependencies": {
        "regenerator-runtime": "^0.14.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.9.tgz",
      "integrity": "sha512-9DGttpmPvIxBb/2uwpVo3dqJ+O6RooAFOS+lB+xDqoE2PVCE8nfoHMdZLpfCQRLwvohzXISPZcgxt80xLfsuwg==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.25.9",
        "@babel/parser": "^7.25.9",
        "@babel/types": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.26.4",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.4.tgz",
      "integrity": "sha512-fH+b7Y4p3yqvApJALCPJcwb0/XaOSgtK4pzV6WVjPR5GLFQBRI7pfoX2V2iM48NXvX07NUxxm1Vw98YjqTcU5w==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.26.2",
        "@babel/generator": "^7.26.3",
        "@babel/parser": "^7.26.3",
        "@babel/template": "^7.25.9",
        "@babel/types": "^7.26.3",
        "debug": "^4.3.1",
        "globals": "^11.1.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse/node_modules/globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.26.3",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.3.tgz",
      "integrity": "sha512-vN5p+1kl59GVKMvTHt55NzzmYVxprfJD+ql7U9NFIfKCBkYE55LYtS+WtPlaYOyzydrKI8Nezd+aZextrd+FMA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-string-parser": "^7.25.9",
        "@babel/helper-validator-identifier": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
      "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
      "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
      "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
      "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
      "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
      "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
      "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
      "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
      "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
      "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
      "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
      "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
      "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
      "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
      "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
      "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
      "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
      "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
      "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
      "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
      "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
      "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
      "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.0.tgz",
      "integrity": "sha512-1/sA4dwrzBAyeUoQ6oxahHKmrZvsnLCg4RfxW3ZFGGmQkSNQPFNLV9CUEFQP1x9EYXHTo5p6xdhZM1Ne9p/AfA==",
      "dev": true,
      "dependencies": {
        "eslint-visitor-keys": "^3.3.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",
      "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",
      "dev": true,
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.19.1.tgz",
      "integrity": "sha512-fo6Mtm5mWyKjA/Chy1BYTdn5mGJoDNjC7C64ug20ADsRDGrA85bN3uK3MaKbeRkRuuIEAR5N33Jr1pbm411/PA==",
      "dev": true,
      "dependencies": {
        "@eslint/object-schema": "^2.1.5",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.9.1.tgz",
      "integrity": "sha512-GuUdqkyyzQI5RMIWkHhvTWLCyLo1jNK3vzkSyaExH5kHPDHcuL2VOpHjmMY+y3+NC69qAKToBqldTBgYeLSr9Q==",
      "dev": true,
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.2.0.tgz",
      "integrity": "sha512-grOjVNN8P3hjJn/eIETF1wwd12DdnwFDoyceUJLYYdkpbwq3nLi+4fqrTAONx7XDALqlL220wC/RHSC/QTI/0w==",
      "dev": true,
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.17.0.tgz",
      "integrity": "sha512-Sxc4hqcs1kTu0iID3kcZDW3JHq2a77HO9P8CP6YEA/FpH3Ll8UXE2r/86Rz9YJLKme39S9vU5OWNjC6Xl0Cr3w==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.5.tgz",
      "integrity": "sha512-o0bhxnL89h5Bae5T318nFoFzGy+YE5i/gGkoPAgkmTVdRKTiv3p8JHevPiPaMwoloKfEiiaHlawCqaZMqRm+XQ==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.2.4.tgz",
      "integrity": "sha512-zSkKow6H5Kdm0ZUQUB2kV5JIXqoG0+uH5YADhaEHswm664N9Db8dXSi0nMJpacpMf+MyyglF1vnZohpEg5yUtg==",
      "dev": true,
      "dependencies": {
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
      "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
      "dev": true,
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.6",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.6.tgz",
      "integrity": "sha512-YuI2ZHQL78Q5HbhDiBA1X4LmYdXCKCMQIfw0pw7piHJwyREFebJUvrQN4cMssyES6x+vfUbx1CIpaQUKYdQZOw==",
      "dev": true,
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.3.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node/node_modules/@humanwhocodes/retry": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.3.1.tgz",
      "integrity": "sha512-JBxkERygn7Bv/GbN5Rv8Ul6LVknS+5Bp6RgDC/O8gEBU/yeH5Ui5C/OlWrTb6qct7LjjfT6Re2NxB0ln0yYybA==",
      "dev": true,
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.1.tgz",
      "integrity": "sha512-c7hNEllBlenFTHBky65mhq8WD2kbN9Q6gk0bTk8lSBvc554jpXSkST1iePudpt7+A/AQvuHs9EMqjHDXMY1lrA==",
      "dev": true,
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "dev": true,
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.5.tgz",
      "integrity": "sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==",
      "dev": true,
      "dependencies": {
        "@jridgewell/set-array": "^1.2.1",
        "@jridgewell/sourcemap-codec": "^1.4.10",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/set-array": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
      "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
      "dev": true,
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
      "dev": true
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.25",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
      "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
      "dev": true,
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@remix-run/router": {
      "version": "1.21.0",
      "resolved": "https://registry.npmjs.org/@remix-run/router/-/router-1.21.0.tgz",
      "integrity": "sha512-xfSkCAchbdG5PnbrKqFWwia4Bi61nH+wm8wLEqfHDyp7Y3dZzgqS2itV8i4gAq9pC2HsTpwyBC6Ds8VHZ96JlA==",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.24.0.tgz",
      "integrity": "sha512-Q6HJd7Y6xdB48x8ZNVDOqsbh2uByBhgK8PiQgPhwkIw/HC/YX5Ghq2mQY5sRMZWHb3VsFkWooUVOZHKr7DmDIA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.24.0.tgz",
      "integrity": "sha512-ijLnS1qFId8xhKjT81uBHuuJp2lU4x2yxa4ctFPtG+MqEE6+C5f/+X/bStmxapgmwLwiL3ih122xv8kVARNAZA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.24.0.tgz",
      "integrity": "sha512-bIv+X9xeSs1XCk6DVvkO+S/z8/2AMt/2lMqdQbMrmVpgFvXlmde9mLcbQpztXm1tajC3raFDqegsH18HQPMYtA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.24.0.tgz",
      "integrity": "sha512-X6/nOwoFN7RT2svEQWUsW/5C/fYMBe4fnLK9DQk4SX4mgVBiTA9h64kjUYPvGQ0F/9xwJ5U5UfTbl6BEjaQdBQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.24.0.tgz",
      "integrity": "sha512-0KXvIJQMOImLCVCz9uvvdPgfyWo93aHHp8ui3FrtOP57svqrF/roSSR5pjqL2hcMp0ljeGlU4q9o/rQaAQ3AYA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.24.0.tgz",
      "integrity": "sha512-it2BW6kKFVh8xk/BnHfakEeoLPv8STIISekpoF+nBgWM4d55CZKc7T4Dx1pEbTnYm/xEKMgy1MNtYuoA8RFIWw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.24.0.tgz",
      "integrity": "sha512-i0xTLXjqap2eRfulFVlSnM5dEbTVque/3Pi4g2y7cxrs7+a9De42z4XxKLYJ7+OhE3IgxvfQM7vQc43bwTgPwA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.24.0.tgz",
      "integrity": "sha512-9E6MKUJhDuDh604Qco5yP/3qn3y7SLXYuiC0Rpr89aMScS2UAmK1wHP2b7KAa1nSjWJc/f/Lc0Wl1L47qjiyQw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.24.0.tgz",
      "integrity": "sha512-2XFFPJ2XMEiF5Zi2EBf4h73oR1V/lycirxZxHZNc93SqDN/IWhYYSYj8I9381ikUFXZrz2v7r2tOVk2NBwxrWw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.24.0.tgz",
      "integrity": "sha512-M3Dg4hlwuntUCdzU7KjYqbbd+BLq3JMAOhCKdBE3TcMGMZbKkDdJ5ivNdehOssMCIokNHFOsv7DO4rlEOfyKpg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.24.0.tgz",
      "integrity": "sha512-mjBaoo4ocxJppTorZVKWFpy1bfFj9FeCMJqzlMQGjpNPY9JwQi7OuS1axzNIk0nMX6jSgy6ZURDZ2w0QW6D56g==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.24.0.tgz",
      "integrity": "sha512-ZXFk7M72R0YYFN5q13niV0B7G8/5dcQ9JDp8keJSfr3GoZeXEoMHP/HlvqROA3OMbMdfr19IjCeNAnPUG93b6A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.24.0.tgz",
      "integrity": "sha512-w1i+L7kAXZNdYl+vFvzSZy8Y1arS7vMgIy8wusXJzRrPyof5LAb02KGr1PD2EkRcl73kHulIID0M501lN+vobQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.24.0.tgz",
      "integrity": "sha512-VXBrnPWgBpVDCVY6XF3LEW0pOU51KbaHhccHw6AS6vBWIC60eqsH19DAeeObl+g8nKAz04QFdl/Cefta0xQtUQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.24.0.tgz",
      "integrity": "sha512-xrNcGDU0OxVcPTH/8n/ShH4UevZxKIO6HJFK0e15XItZP2UcaiLFd5kiX7hJnqCbSztUF8Qot+JWBC/QXRPYWQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.24.0.tgz",
      "integrity": "sha512-fbMkAF7fufku0N2dE5TBXcNlg0pt0cJue4xBRE2Qc5Vqikxr4VCgKj/ht6SMdFcOacVA9rqF70APJ8RN/4vMJw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@tweenjs/tween.js": {
      "version": "25.0.0",
      "resolved": "https://registry.npmjs.org/@tweenjs/tween.js/-/tween.js-25.0.0.tgz",
      "integrity": "sha512-XKLA6syeBUaPzx4j3qwMqzzq+V4uo72BnlbOjmuljLrRqdsd3qnzvZZoxvMHZ23ndsRS4aufU6JOZYpCbU6T1A=="
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.6.8",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.8.tgz",
      "integrity": "sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.20.6",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.20.6.tgz",
      "integrity": "sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.20.7"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
      "integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
      "dev": true
    },
    "node_modules/@types/file-saver": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/@types/file-saver/-/file-saver-2.0.7.tgz",
      "integrity": "sha512-dNKVfHd/jk0SkR/exKGj2ggkB45MAkzvWCaqLUUgkyjITkGNzH8H+yUwr+BLJUBjZOe9w8X3wgmXhZDRg1ED6A==",
      "dev": true
    },
    "node_modules/@types/history": {
      "version": "4.7.11",
      "resolved": "https://registry.npmjs.org/@types/history/-/history-4.7.11.tgz",
      "integrity": "sha512-qjDJRrmvBMiTx+jyLxvLfJU7UznFuokDv4f3WRuriHKERccVpFU+8XMQUAbDzoiJCsmexxRExQeMwwCdamSKDA==",
      "dev": true
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true
    },
    "node_modules/@types/node": {
      "version": "22.10.2",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.10.2.tgz",
      "integrity": "sha512-Xxr6BBRCAOQixvonOye19wnzyDiUtTeqldOOmj3CkeblonbccA12PFwlufvRdrpjXxqnmUaeiU5EOA+7s5diUQ==",
      "dev": true,
      "optional": true,
      "peer": true,
      "dependencies": {
        "undici-types": "~6.20.0"
      }
    },
    "node_modules/@types/prop-types": {
      "version": "15.7.14",
      "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.14.tgz",
      "integrity": "sha512-gNMvNH49DJ7OJYv+KAKn0Xp45p8PLl6zo2YnvDIbTd4J6MER2BmWN49TG7n9LvkyihINxeKW8+3bfS2yDC9dzQ==",
      "devOptional": true
    },
    "node_modules/@types/raf": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/@types/raf/-/raf-3.4.3.tgz",
      "integrity": "sha512-c4YAvMedbPZ5tEyxzQdMoOhhJ4RD3rngZIdwC2/qDN3d7JpEhB6fiBRKVY1lg5B7Wk+uPBjn5f39j1/2MY1oOw==",
      "optional": true
    },
    "node_modules/@types/react": {
      "version": "18.3.16",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.16.tgz",
      "integrity": "sha512-oh8AMIC4Y2ciKufU8hnKgs+ufgbA/dhPTACaZPM86AbwX9QwnFtSoPWEeRUj8fge+v6kFt78BXcDhAU1SrrAsw==",
      "devOptional": true,
      "dependencies": {
        "@types/prop-types": "*",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "18.3.5",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.3.5.tgz",
      "integrity": "sha512-P4t6saawp+b/dFrUr2cvkVsfvPguwsxtH6dNIYRllMsefqFzkZk5UIjzyDOv5g1dXIPdG4Sp1yCR4Z6RCUsG/Q==",
      "dev": true,
      "peerDependencies": {
        "@types/react": "^18.0.0"
      }
    },
    "node_modules/@types/react-router": {
      "version": "5.1.20",
      "resolved": "https://registry.npmjs.org/@types/react-router/-/react-router-5.1.20.tgz",
      "integrity": "sha512-jGjmu/ZqS7FjSH6owMcD5qpq19+1RS9DeVRqfl1FeBMxTDQAGwlMWOcs52NDoXaNKyG3d1cYQFMs9rCrb88o9Q==",
      "dev": true,
      "dependencies": {
        "@types/history": "^4.7.11",
        "@types/react": "*"
      }
    },
    "node_modules/@types/react-router-dom": {
      "version": "5.3.3",
      "resolved": "https://registry.npmjs.org/@types/react-router-dom/-/react-router-dom-5.3.3.tgz",
      "integrity": "sha512-kpqnYK4wcdm5UaWI3fLcELopqLrHgLqNsdpHauzlQktfkHL3npOSwtj1Uz9oKBAzs7lFtVkV8j83voAz2D8fhw==",
      "dev": true,
      "dependencies": {
        "@types/history": "^4.7.11",
        "@types/react": "*",
        "@types/react-router": "*"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.18.0.tgz",
      "integrity": "sha512-NR2yS7qUqCL7AIxdJUQf2MKKNDVNaig/dEB0GBLU7D+ZdHgK1NoH/3wsgO3OnPVipn51tG3MAwaODEGil70WEw==",
      "dev": true,
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.18.0",
        "@typescript-eslint/type-utils": "8.18.0",
        "@typescript-eslint/utils": "8.18.0",
        "@typescript-eslint/visitor-keys": "8.18.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.3.1",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^1.3.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.0.0 || ^8.0.0-alpha.0",
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <5.8.0"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.18.0.tgz",
      "integrity": "sha512-hgUZ3kTEpVzKaK3uNibExUYm6SKKOmTU2BOxBSvOYwtJEPdVQ70kZJpPjstlnhCHcuc2WGfSbpKlb/69ttyN5Q==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.18.0",
        "@typescript-eslint/types": "8.18.0",
        "@typescript-eslint/typescript-estree": "8.18.0",
        "@typescript-eslint/visitor-keys": "8.18.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <5.8.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.18.0.tgz",
      "integrity": "sha512-PNGcHop0jkK2WVYGotk/hxj+UFLhXtGPiGtiaWgVBVP1jhMoMCHlTyJA+hEj4rszoSdLTK3fN4oOatrL0Cp+Xw==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "8.18.0",
        "@typescript-eslint/visitor-keys": "8.18.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.18.0.tgz",
      "integrity": "sha512-er224jRepVAVLnMF2Q7MZJCq5CsdH2oqjP4dT7K6ij09Kyd+R21r7UVJrF0buMVdZS5QRhDzpvzAxHxabQadow==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/typescript-estree": "8.18.0",
        "@typescript-eslint/utils": "8.18.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^1.3.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <5.8.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.18.0.tgz",
      "integrity": "sha512-FNYxgyTCAnFwTrzpBGq+zrnoTO4x0c1CKYY5MuUTzpScqmY5fmsh2o3+57lqdI3NZucBDCzDgdEbIaNfAjAHQA==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.18.0.tgz",
      "integrity": "sha512-rqQgFRu6yPkauz+ms3nQpohwejS8bvgbPyIDq13cgEDbkXt4LH4OkDMT0/fN1RUtzG8e8AKJyDBoocuQh8qNeg==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "8.18.0",
        "@typescript-eslint/visitor-keys": "8.18.0",
        "debug": "^4.3.4",
        "fast-glob": "^3.3.2",
        "is-glob": "^4.0.3",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "ts-api-utils": "^1.3.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <5.8.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.6.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.3.tgz",
      "integrity": "sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.18.0.tgz",
      "integrity": "sha512-p6GLdY383i7h5b0Qrfbix3Vc3+J2k6QWw6UMUeY5JGfm3C5LbZ4QIZzJNoNOfgyRe0uuYKjvVOsO/jD4SJO+xg==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.4.0",
        "@typescript-eslint/scope-manager": "8.18.0",
        "@typescript-eslint/types": "8.18.0",
        "@typescript-eslint/typescript-estree": "8.18.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <5.8.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.18.0.tgz",
      "integrity": "sha512-pCh/qEA8Lb1wVIqNvBke8UaRjJ6wrAWkJO5yyIbs8Yx6TNGYyfNjOo61tLv+WwLvoLPp4BQ8B7AHKijl8NGUfw==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "8.18.0",
        "eslint-visitor-keys": "^4.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.4.tgz",
      "integrity": "sha512-SCCPBJtYLdE8PX/7ZQAs1QAZ8Jqwih+0VBLum1EGqmCCQal+MIUqLCzj3ZUy8ufbC0cAM4LRlSTm7IQJwWT4ug==",
      "dev": true,
      "dependencies": {
        "@babel/core": "^7.26.0",
        "@babel/plugin-transform-react-jsx-self": "^7.25.9",
        "@babel/plugin-transform-react-jsx-source": "^7.25.9",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.14.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0"
      }
    },
    "node_modules/accessor-fn": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/accessor-fn/-/accessor-fn-1.5.1.tgz",
      "integrity": "sha512-zZpFYBqIL1Aqg+f2qmYHJ8+yIZF7/tP6PUGx2/QM0uGPSO5UegpinmkNwDohxWtOj586BpMPVRUjce2HI6xB3A==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/acorn": {
      "version": "8.14.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.0.tgz",
      "integrity": "sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "dev": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
      "dev": true
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "dev": true
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true
    },
    "node_modules/atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "bin": {
        "atob": "bin/atob.js"
      },
      "engines": {
        "node": ">= 4.5.0"
      }
    },
    "node_modules/autoprefixer": {
      "version": "10.4.20",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.20.tgz",
      "integrity": "sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "browserslist": "^4.23.3",
        "caniuse-lite": "^1.0.30001646",
        "fraction.js": "^4.3.7",
        "normalize-range": "^0.1.2",
        "picocolors": "^1.0.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true
    },
    "node_modules/base64-arraybuffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/base64-arraybuffer/-/base64-arraybuffer-1.0.2.tgz",
      "integrity": "sha512-I3yl4r9QB5ZRY3XuJVEPfc2XhZO6YweFPI+UovAzn+8/hb3oJ6lnysaFcjVpkCPfVWFUDvoZ8kmVDP7WyRtYtQ==",
      "optional": true,
      "engines": {
        "node": ">= 0.6.0"
      }
    },
    "node_modules/bezier-js": {
      "version": "6.1.4",
      "resolved": "https://registry.npmjs.org/bezier-js/-/bezier-js-6.1.4.tgz",
      "integrity": "sha512-PA0FW9ZpcHbojUCMu28z9Vg/fNkwTj5YhusSAjHHDfHDGLxJ6YUKrAN2vk1fP2MMOxVw4Oko16FMlRGVBGqLKg==",
      "funding": {
        "type": "individual",
        "url": "https://github.com/Pomax/bezierjs/blob/master/FUNDING.md"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.0.tgz",
      "integrity": "sha512-Rmb62sR1Zpjql25eSanFGEhAxcFwfA1K0GuQcLoaJBAcENegrQut3hYdhXFF1obQfiDyqIW/cLM5HSJ/9k884A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "caniuse-lite": "^1.0.30001663",
        "electron-to-chromium": "^1.5.28",
        "node-releases": "^2.0.18",
        "update-browserslist-db": "^1.1.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/btoa": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/btoa/-/btoa-1.2.1.tgz",
      "integrity": "sha512-SB4/MIGlsiVkMcHmT+pSmIPoNDoHg+7cMzmt3Uxt628MTz2487DKSqK/fuhFBrkuqrYv5UCEnACpF4dTFNKc/g==",
      "bin": {
        "btoa": "bin/btoa.js"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "dev": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001667",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001667.tgz",
      "integrity": "sha512-7LTwJjcRkzKFmtqGsibMeuXmvFDfZq/nzIjnmgCGzKKRVzjD72selLDK1oPF/Oxzmt4fNcPvTDvGqSDG4tCALw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ]
    },
    "node_modules/canvas-color-tracker": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/canvas-color-tracker/-/canvas-color-tracker-1.3.1.tgz",
      "integrity": "sha512-eNycxGS7oQ3IS/9QQY41f/aQjiO9Y/MtedhCgSdsbLSxC9EyUD8L3ehl/Q3Kfmvt8um79S45PBV+5Rxm5ztdSw==",
      "dependencies": {
        "tinycolor2": "^1.6.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/canvg": {
      "version": "3.0.10",
      "resolved": "https://registry.npmjs.org/canvg/-/canvg-3.0.10.tgz",
      "integrity": "sha512-qwR2FRNO9NlzTeKIPIKpnTY6fqwuYSequ8Ru8c0YkYU7U0oW+hLUvWadLvAu1Rl72OMNiFhoLu4f8eUjQ7l/+Q==",
      "optional": true,
      "dependencies": {
        "@babel/runtime": "^7.12.5",
        "@types/raf": "^3.4.0",
        "core-js": "^3.8.3",
        "raf": "^3.4.1",
        "regenerator-runtime": "^0.13.7",
        "rgbcolor": "^1.0.1",
        "stackblur-canvas": "^2.0.0",
        "svg-pathdata": "^6.0.3"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/canvg/node_modules/regenerator-runtime": {
      "version": "0.13.11",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.11.tgz",
      "integrity": "sha512-kY1AZVr2Ra+t+piVaJ4gxaFaReZVH40AKNo7UCX6W+dEwBo/2oZJzqfuN1qLq1oL45o56cPaTXELwrTh8Fpggg==",
      "optional": true
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "dev": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true
    },
    "node_modules/core-js": {
      "version": "3.39.0",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.39.0.tgz",
      "integrity": "sha512-raM0ew0/jJUqkJ0E6e8UDtl+y/7ktFivgWvqw8dNSQeNWoSDLvQ1H/RN3aPXB9tBd4/FhyR4RDPGhsNIMsAn7g==",
      "hasInstallScript": true,
      "optional": true,
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/core-js"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ=="
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/css-line-break": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/css-line-break/-/css-line-break-2.1.0.tgz",
      "integrity": "sha512-FHcKFCZcAha3LwfVBhCQbW2nCNbkZXn7KVUJcsT5/P8YmfsVja0FMPJr0B903j/E69HUphKiV9iQArX8SDYA4w==",
      "optional": true,
      "dependencies": {
        "utrie": "^1.0.2"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "devOptional": true
    },
    "node_modules/d3-array": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/d3-array/-/d3-array-3.2.4.tgz",
      "integrity": "sha512-tdQAmyA18i4J7wprpYq8ClcxZy3SC31QMeByyCFyRt7BVHdREQZ5lpzoe5mFEYZUWe+oq8HBvk9JjpibyEV4Jg==",
      "dependencies": {
        "internmap": "1 - 2"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-binarytree": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/d3-binarytree/-/d3-binarytree-1.0.2.tgz",
      "integrity": "sha512-cElUNH+sHu95L04m92pG73t2MEJXKu+GeKUN1TJkFsu93E5W8E9Sc3kHEGJKgenGvj19m6upSn2EunvMgMD2Yw=="
    },
    "node_modules/d3-color": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-color/-/d3-color-3.1.0.tgz",
      "integrity": "sha512-zg/chbXyeBtMQ1LbD/WSoW2DpC3I0mpmPdW+ynRTj/x2DAWYrIY7qeZIHidozwV24m4iavr15lNwIwLxRmOxhA==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-dispatch": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-dispatch/-/d3-dispatch-3.0.1.tgz",
      "integrity": "sha512-rzUyPU/S7rwUflMyLc1ETDeBj0NRuHKKAcvukozwhshr6g6c5d8zh4c2gQjY2bZ0dXeGLWc1PF174P2tVvKhfg==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-drag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/d3-drag/-/d3-drag-3.0.0.tgz",
      "integrity": "sha512-pWbUJLdETVA8lQNJecMxoXfH6x+mO2UQo8rSmZ+QqxcbyA3hfeprFgIT//HW2nlHChWeIIMwS2Fq+gEARkhTkg==",
      "dependencies": {
        "d3-dispatch": "1 - 3",
        "d3-selection": "3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-ease": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-ease/-/d3-ease-3.0.1.tgz",
      "integrity": "sha512-wR/XK3D3XcLIZwpbvQwQ5fK+8Ykds1ip7A2Txe0yxncXSdq1L9skcG7blcedkOX+ZcgxGAmLX1FrRGbADwzi0w==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-force-3d": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/d3-force-3d/-/d3-force-3d-3.0.5.tgz",
      "integrity": "sha512-tdwhAhoTYZY/a6eo9nR7HP3xSW/C6XvJTbeRpR92nlPzH6OiE+4MliN9feuSFd0tPtEUo+191qOhCTWx3NYifg==",
      "dependencies": {
        "d3-binarytree": "1",
        "d3-dispatch": "1 - 3",
        "d3-octree": "1",
        "d3-quadtree": "1 - 3",
        "d3-timer": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-format": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-format/-/d3-format-3.1.0.tgz",
      "integrity": "sha512-YyUI6AEuY/Wpt8KWLgZHsIU86atmikuoOmCfommt0LYHiQSPjvX2AcFc38PX0CBpr2RCyZhjex+NS/LPOv6YqA==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-interpolate": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-interpolate/-/d3-interpolate-3.0.1.tgz",
      "integrity": "sha512-3bYs1rOD33uo8aqJfKP3JWPAibgw8Zm2+L9vBKEHJ2Rg+viTR7o5Mmv5mZcieN+FRYaAOWX5SJATX6k1PWz72g==",
      "dependencies": {
        "d3-color": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-octree": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/d3-octree/-/d3-octree-1.0.2.tgz",
      "integrity": "sha512-Qxg4oirJrNXauiuC94uKMbgxwnhdda9xRLl9ihq45srlJ4Ga3CSgqGcAL8iW7N5CIv4Oz8x3E734ulxyvHPvwA=="
    },
    "node_modules/d3-quadtree": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-quadtree/-/d3-quadtree-3.0.1.tgz",
      "integrity": "sha512-04xDrxQTDTCFwP5H6hRhsRcb9xxv2RzkcsygFzmkSIOJy3PeRJP7sNk3VRIbKXcog561P9oU0/rVH6vDROAgUw==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-scale": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/d3-scale/-/d3-scale-4.0.2.tgz",
      "integrity": "sha512-GZW464g1SH7ag3Y7hXjf8RoUuAFIqklOAq3MRl4OaWabTFJY9PN/E1YklhXLh+OQ3fM9yS2nOkCoS+WLZ6kvxQ==",
      "dependencies": {
        "d3-array": "2.10.0 - 3",
        "d3-format": "1 - 3",
        "d3-interpolate": "1.2.0 - 3",
        "d3-time": "2.1.1 - 3",
        "d3-time-format": "2 - 4"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-scale-chromatic": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-scale-chromatic/-/d3-scale-chromatic-3.1.0.tgz",
      "integrity": "sha512-A3s5PWiZ9YCXFye1o246KoscMWqf8BsD9eRiJ3He7C9OBaxKhAd5TFCdEx/7VbKtxxTsu//1mMJFrEt572cEyQ==",
      "dependencies": {
        "d3-color": "1 - 3",
        "d3-interpolate": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-selection": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/d3-selection/-/d3-selection-3.0.0.tgz",
      "integrity": "sha512-fmTRWbNMmsmWq6xJV8D19U/gw/bwrHfNXxrIN+HfZgnzqTHp9jOmKMhsTUjXOJnZOdZY9Q28y4yebKzqDKlxlQ==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-time": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-time/-/d3-time-3.1.0.tgz",
      "integrity": "sha512-VqKjzBLejbSMT4IgbmVgDjpkYrNWUYJnbCGo874u7MMKIWsILRX+OpX/gTk8MqjpT1A/c6HY2dCA77ZN0lkQ2Q==",
      "dependencies": {
        "d3-array": "2 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-time-format": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/d3-time-format/-/d3-time-format-4.1.0.tgz",
      "integrity": "sha512-dJxPBlzC7NugB2PDLwo9Q8JiTR3M3e4/XANkreKSUxF8vvXKqm1Yfq4Q5dl8budlunRVlUUaDUgFt7eA8D6NLg==",
      "dependencies": {
        "d3-time": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-timer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-timer/-/d3-timer-3.0.1.tgz",
      "integrity": "sha512-ndfJ/JxxMd3nw31uyKoY2naivF+r29V+Lc0svZxe1JvvIRmi8hUsrMvdOwgS1o6uBHmiz91geQ0ylPP0aj1VUA==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-transition": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-transition/-/d3-transition-3.0.1.tgz",
      "integrity": "sha512-ApKvfjsSR6tg06xrL434C0WydLr7JewBB3V+/39RMHsaXTOG0zmt/OAXeng5M5LBm0ojmxJrpomQVZ1aPvBL4w==",
      "dependencies": {
        "d3-color": "1 - 3",
        "d3-dispatch": "1 - 3",
        "d3-ease": "1 - 3",
        "d3-interpolate": "1 - 3",
        "d3-timer": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      },
      "peerDependencies": {
        "d3-selection": "2 - 3"
      }
    },
    "node_modules/d3-zoom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/d3-zoom/-/d3-zoom-3.0.0.tgz",
      "integrity": "sha512-b8AmV3kfQaqWAuacbPuNbL6vahnOJflOhexLzMMNLga62+/nh0JzvJ0aO/5a5MVgUFGS7Hu1P9P03o3fJkDCyw==",
      "dependencies": {
        "d3-dispatch": "1 - 3",
        "d3-drag": "2 - 3",
        "d3-interpolate": "1 - 3",
        "d3-selection": "2 - 3",
        "d3-transition": "2 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/date-fns": {
      "version": "2.30.0",
      "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-2.30.0.tgz",
      "integrity": "sha512-fnULvOpxnC5/Vg3NCiWelDsLiUc9bRwAPs/+LfTLNvetFCtCTN+yQz15C/fs4AwX1R9K5GLtLfn8QW+dWisaAw==",
      "dependencies": {
        "@babel/runtime": "^7.21.0"
      },
      "engines": {
        "node": ">=0.11"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/date-fns"
      }
    },
    "node_modules/debug": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "dev": true
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "dev": true
    },
    "node_modules/docx": {
      "version": "8.5.0",
      "resolved": "https://registry.npmjs.org/docx/-/docx-8.5.0.tgz",
      "integrity": "sha512-4SbcbedPXTciySXiSnNNLuJXpvxFe5nqivbiEHXyL8P/w0wx2uW7YXNjnYgjW0e2e6vy+L/tMISU/oAiXCl57Q==",
      "dependencies": {
        "@types/node": "^20.3.1",
        "jszip": "^3.10.1",
        "nanoid": "^5.0.4",
        "xml": "^1.0.1",
        "xml-js": "^1.6.8"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/docx/node_modules/@types/node": {
      "version": "20.17.10",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.17.10.tgz",
      "integrity": "sha512-/jrvh5h6NXhEauFFexRin69nA0uHJ5gwk4iDivp/DeoEua3uwCUto6PC86IpRITBOs4+6i2I56K5x5b6WYGXHA==",
      "dependencies": {
        "undici-types": "~6.19.2"
      }
    },
    "node_modules/docx/node_modules/nanoid": {
      "version": "5.0.9",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-5.0.9.tgz",
      "integrity": "sha512-Aooyr6MXU6HpvvWXKoVoXwKMs/KyVakWwg7xQfv5/S/RIgJMy0Ifa45H9qqYy7pTCszrHzP21Uk4PZq2HpEM8Q==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "bin": {
        "nanoid": "bin/nanoid.js"
      },
      "engines": {
        "node": "^18 || >=20"
      }
    },
    "node_modules/docx/node_modules/undici-types": {
      "version": "6.19.8",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.19.8.tgz",
      "integrity": "sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw=="
    },
    "node_modules/dompurify": {
      "version": "2.5.7",
      "resolved": "https://registry.npmjs.org/dompurify/-/dompurify-2.5.7.tgz",
      "integrity": "sha512-2q4bEI+coQM8f5ez7kt2xclg1XsecaV9ASJk/54vwlfRRNQfDqJz2pzQ8t0Ix/ToBpXlVjrRIx7pFC/o8itG2Q==",
      "optional": true
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "dev": true
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.33",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.33.tgz",
      "integrity": "sha512-+cYTcFB1QqD4j4LegwLfpCNxifb6dDFUAwk6RsLusCwIaZI6or2f+q8rs5tTB2YC53HhOlIbEaqHMAAC8IOIwA==",
      "dev": true
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true
    },
    "node_modules/esbuild": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
      "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
      "dev": true,
      "hasInstallScript": true,
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.21.5",
        "@esbuild/android-arm": "0.21.5",
        "@esbuild/android-arm64": "0.21.5",
        "@esbuild/android-x64": "0.21.5",
        "@esbuild/darwin-arm64": "0.21.5",
        "@esbuild/darwin-x64": "0.21.5",
        "@esbuild/freebsd-arm64": "0.21.5",
        "@esbuild/freebsd-x64": "0.21.5",
        "@esbuild/linux-arm": "0.21.5",
        "@esbuild/linux-arm64": "0.21.5",
        "@esbuild/linux-ia32": "0.21.5",
        "@esbuild/linux-loong64": "0.21.5",
        "@esbuild/linux-mips64el": "0.21.5",
        "@esbuild/linux-ppc64": "0.21.5",
        "@esbuild/linux-riscv64": "0.21.5",
        "@esbuild/linux-s390x": "0.21.5",
        "@esbuild/linux-x64": "0.21.5",
        "@esbuild/netbsd-x64": "0.21.5",
        "@esbuild/openbsd-x64": "0.21.5",
        "@esbuild/sunos-x64": "0.21.5",
        "@esbuild/win32-arm64": "0.21.5",
        "@esbuild/win32-ia32": "0.21.5",
        "@esbuild/win32-x64": "0.21.5"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/eslint": {
      "version": "9.17.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.17.0.tgz",
      "integrity": "sha512-evtlNcpJg+cZLcnVKwsai8fExnqjGPicK7gnUtlNuzu+Fv9bI0aLpND5T44VLQtoMEnI57LoXO9XAkIXwohKrA==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.19.0",
        "@eslint/core": "^0.9.0",
        "@eslint/eslintrc": "^3.2.0",
        "@eslint/js": "9.17.0",
        "@eslint/plugin-kit": "^0.2.3",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.1",
        "@types/estree": "^1.0.6",
        "@types/json-schema": "^7.0.15",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.2.0",
        "eslint-visitor-keys": "^4.2.0",
        "espree": "^10.3.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-5.1.0.tgz",
      "integrity": "sha512-mpJRtPgHN2tNAvZ35AMfqeB3Xqeo273QxrHJsbBEPWODRM4r0yB6jfoROqKEYrOn27UtRPpcpHc2UqyBSuUNTw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.4.16",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.16.tgz",
      "integrity": "sha512-slterMlxAhov/DZO8NScf6mEeMBBXodFUolijDvrtTxyezyLoTQaa73FyYus/VbTdftd8wBgBxPMRk3poleXNQ==",
      "dev": true,
      "peerDependencies": {
        "eslint": ">=8.40"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.2.0.tgz",
      "integrity": "sha512-PHlWUfG6lvPc3yvP5A4PNyBL1W8fkDUccmI21JUu/+GKZBoH/W5u6usENXUrWFRsyoW5ACUjFGgAFQp5gUlb/A==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.0.tgz",
      "integrity": "sha512-UyLnSehNt62FFhSwjZlHmeokpRK59rcz29j+F1/aDgbkbRTk7wIc9XzdoasMUbRNKDM0qQt/+BJ4BrpFeABemw==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/eslint/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/eslint/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/eslint/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/eslint/node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/espree": {
      "version": "10.3.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.3.0.tgz",
      "integrity": "sha512-0QYC8b24HWY8zjRnDTL6RiHfDbAWn63qb4LMj1Z4b076A4une81+z03Kg7l7mn/48PUTqoLptSXez8oknU8Clg==",
      "dev": true,
      "dependencies": {
        "acorn": "^8.14.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "node_modules/fast-glob": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
      "integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true
    },
    "node_modules/fastq": {
      "version": "1.17.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
      "integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
      "dev": true,
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fflate": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/fflate/-/fflate-0.8.2.tgz",
      "integrity": "sha512-cPJU47OaAoCbg0pBvzsgpTPhmhqI5eJjh/JIu8tPj5q+T7iLvW/JAYUqmE7KOB4R1ZyEhzBaIQpQpardBF5z8A=="
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/file-saver": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/file-saver/-/file-saver-2.0.5.tgz",
      "integrity": "sha512-P9bmyZ3h/PRG+Nzga+rbdI4OEpNDzAVyy74uVO9ATgzLK6VtAsYybF/+TOCvrc0MO793d6+42lLyZTw7/ArVzA=="
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.1.tgz",
      "integrity": "sha512-X8cqMLLie7KsNUDSdzeN8FYK9rEt4Dt67OsG/DNGnYTSDBG4uFAJFBnUeiV+zCVAvwFy56IjM9sH51jVaEhNxw==",
      "dev": true
    },
    "node_modules/force-graph": {
      "version": "1.47.1",
      "resolved": "https://registry.npmjs.org/force-graph/-/force-graph-1.47.1.tgz",
      "integrity": "sha512-NF0prpR8tNGq7oCE/aFImT/6/3wSk585bcp39UAj6SNSPjvKbX6ktCH6cZnjfsnPNx/DYj1rn+cvvjH814HCFA==",
      "dependencies": {
        "@tweenjs/tween.js": "18 - 25",
        "accessor-fn": "1",
        "bezier-js": "3 - 6",
        "canvas-color-tracker": "^1.3",
        "d3-array": "1 - 3",
        "d3-drag": "2 - 3",
        "d3-force-3d": "2 - 3",
        "d3-scale": "1 - 4",
        "d3-scale-chromatic": "1 - 3",
        "d3-selection": "2 - 3",
        "d3-zoom": "2 - 3",
        "index-array-by": "1",
        "kapsule": "^1.16",
        "lodash-es": "4"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
      "integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
      "dev": true,
      "dependencies": {
        "cross-spawn": "^7.0.0",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/fraction.js": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
      "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
      "dev": true,
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "patreon",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/glob": {
      "version": "10.4.5",
      "resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
      "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
      "dev": true,
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^3.1.2",
        "minimatch": "^9.0.4",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^1.11.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob/node_modules/brace-expansion": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/globals": {
      "version": "15.13.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-15.13.0.tgz",
      "integrity": "sha512-49TewVEz0UxZjr1WYYsWpPrhyC/B/pA8Bq0fUmet2n+eR7yn0IvNzNaoBwnK6mdkzcN+se7Ez9zUgULTz2QH4g==",
      "dev": true,
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/html2canvas": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/html2canvas/-/html2canvas-1.4.1.tgz",
      "integrity": "sha512-fPU6BHNpsyIhr8yyMpTLLxAbkaK8ArIBcmZIRiBLiDhjeqvXolaEmDGmELFuX9I4xDcaKKcJl+TKZLqruBbmWA==",
      "optional": true,
      "dependencies": {
        "css-line-break": "^2.1.0",
        "text-segmentation": "^1.0.3"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/immediate": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/immediate/-/immediate-3.0.6.tgz",
      "integrity": "sha512-XXOFtyqDjNDAQxVfYxuF7g9Il/IbWmmlQg2MYKOH8ExIT1qg6xc4zyS3HaEEATgs1btfzxq15ciUiY7gjSXRGQ=="
    },
    "node_modules/import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/index-array-by": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/index-array-by/-/index-array-by-1.4.2.tgz",
      "integrity": "sha512-SP23P27OUKzXWEC/TOyWlwLviofQkCSCKONnc62eItjp69yCZZPqDQtr3Pw5gJDnPeUMqExmKydNZaJO0FU9pw==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
    "node_modules/internmap": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/internmap/-/internmap-2.0.3.tgz",
      "integrity": "sha512-5Hh7Y1wQbvY5ooGgPbDaL5iYLAPzMTUrjMulskHLH6wnv/A+1q5rgEaiuqEjB+oxGXIVZs1FF+R/KPN3ZSQYYg==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.15.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.15.1.tgz",
      "integrity": "sha512-z0vtXSwucUJtANQWldhbtbt7BnL0vxiFjIdDLAatwhDYty2bad6s+rijD6Ri4YuYJubLzIJLUidCh09e1djEVQ==",
      "dev": true,
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ=="
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true
    },
    "node_modules/jackspeak": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
      "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
      "dev": true,
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/jerrypick": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/jerrypick/-/jerrypick-1.1.1.tgz",
      "integrity": "sha512-XTtedPYEyVp4t6hJrXuRKr/jHj8SC4z+4K0b396PMkov6muL+i8IIamJIvZWe3jUspgIJak0P+BaWKawMYNBLg==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.6",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.6.tgz",
      "integrity": "sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==",
      "dev": true,
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jspdf": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jspdf/-/jspdf-2.5.2.tgz",
      "integrity": "sha512-myeX9c+p7znDWPk0eTrujCzNjT+CXdXyk7YmJq5nD5V7uLLKmSXnlQ/Jn/kuo3X09Op70Apm0rQSnFWyGK8uEQ==",
      "dependencies": {
        "@babel/runtime": "^7.23.2",
        "atob": "^2.1.2",
        "btoa": "^1.2.1",
        "fflate": "^0.8.1"
      },
      "optionalDependencies": {
        "canvg": "^3.0.6",
        "core-js": "^3.6.0",
        "dompurify": "^2.5.4",
        "html2canvas": "^1.0.0-rc.5"
      }
    },
    "node_modules/jszip": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/jszip/-/jszip-3.10.1.tgz",
      "integrity": "sha512-xXDvecyTpGLrqFrvkrUSoxxfJI5AH7U8zxxtVclpsUtMCq4JQ290LY8AW5c7Ggnr/Y/oK+bQMbqK2qmtk3pN4g==",
      "dependencies": {
        "lie": "~3.3.0",
        "pako": "~1.0.2",
        "readable-stream": "~2.3.6",
        "setimmediate": "^1.0.5"
      }
    },
    "node_modules/kapsule": {
      "version": "1.16.0",
      "resolved": "https://registry.npmjs.org/kapsule/-/kapsule-1.16.0.tgz",
      "integrity": "sha512-4f/z/Luu0cEXmagCwaFyzvfZai2HKgB4CQLwmsMUA+jlUbW94HfFSX+TWZxzWoMSO6b6aR+FD2Xd5z88VYZJTw==",
      "dependencies": {
        "lodash-es": "4"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lie": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/lie/-/lie-3.3.0.tgz",
      "integrity": "sha512-UaiMJzeWRlEujzAuw5LokY1L5ecNQYZKfmyZ9L7wDHb/p5etKaxXhohBcrw0EYby+G/NA52vRSN4N39dxHAIwQ==",
      "dependencies": {
        "immediate": "~3.0.5"
      }
    },
    "node_modules/lilconfig": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
      "dev": true,
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash-es": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash-es/-/lodash-es-4.17.21.tgz",
      "integrity": "sha512-mKnC+QJ9pWVzv+C4/U3rRsHapFfHvQFoFB92e52xeyGMcX6/OlIl78je1u8vePzYZSkkogMPJ2yjxxsb89cxyw=="
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.344.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.344.0.tgz",
      "integrity": "sha512-6YyBnn91GB45VuVT96bYCOKElbJzUHqp65vX8cDcu55MQL9T969v4dhGClpljamuI/+KMO9P6w9Acq1CVQGvIQ==",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "dev": true,
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dev": true,
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.7",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.7.tgz",
      "integrity": "sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true
    },
    "node_modules/node-releases": {
      "version": "2.0.18",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.18.tgz",
      "integrity": "sha512-d9VeXT4SJ7ZeOqGX6R5EM022wpL+eWPooLI+5UpWn2jCT1aosUQEhQP214x33Wkwx3JQMvIm+tIoVOdodFS40g==",
      "dev": true
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "dev": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/package-json-from-dist": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
      "dev": true
    },
    "node_modules/pako": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
      "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw=="
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-scurry/node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "dev": true
    },
    "node_modules/performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha512-7EAHlyLHI56VEIdK57uwHdHKIaAGbnXPiw0yWbarQZOKaKpvUIgW0jWRVLiatnM+XXlSwsanIBH/hzGMJulMow==",
      "optional": true
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.6.tgz",
      "integrity": "sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==",
      "dev": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/postcss": {
      "version": "8.4.49",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.49.tgz",
      "integrity": "sha512-OCVPnIObs4N29kxTjzLfUryOkvZEq+pf8jTF0lg8E7uETuWHA+v7j3c/xJmiqpX450191LlmZfUKkXxkTry7nA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.7",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "dev": true,
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz",
      "integrity": "sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==",
      "dev": true,
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
      "integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "lilconfig": "^3.0.0",
        "yaml": "^2.3.4"
      },
      "engines": {
        "node": ">= 14"
      },
      "peerDependencies": {
        "postcss": ">=8.0.9",
        "ts-node": ">=9.0.0"
      },
      "peerDependenciesMeta": {
        "postcss": {
          "optional": true
        },
        "ts-node": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "dev": true,
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/raf": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/raf/-/raf-3.4.1.tgz",
      "integrity": "sha512-Sq4CW4QhwOHE8ucn6J34MqtZCeWFP2aQSmrlroYgqAV1PjStIhJXxYuTgUIfkEk7zTLjmIjLmU5q+fbD1NnOJA==",
      "optional": true,
      "dependencies": {
        "performance-now": "^2.1.0"
      }
    },
    "node_modules/react": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.2"
      },
      "peerDependencies": {
        "react": "^18.3.1"
      }
    },
    "node_modules/react-force-graph-2d": {
      "version": "1.26.1",
      "resolved": "https://registry.npmjs.org/react-force-graph-2d/-/react-force-graph-2d-1.26.1.tgz",
      "integrity": "sha512-7dRD0zNjMpeNghc6dwqzKrdWz45kM1/RNQ7OfR/Y4t9cK02NvHjtmA5JeKePAmzZajqmQQFCbTtwxEfhKgcsww==",
      "dependencies": {
        "force-graph": "^1.47",
        "prop-types": "15",
        "react-kapsule": "^2.5"
      },
      "engines": {
        "node": ">=12"
      },
      "peerDependencies": {
        "react": "*"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
    },
    "node_modules/react-kapsule": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/react-kapsule/-/react-kapsule-2.5.6.tgz",
      "integrity": "sha512-aE4Nq7dDG8R/LdNmvOL6Azjr97I2E7ycFDJRkoHJSp9OQgTJDT3MHTJtJDrOTwzCl6sllYSqrtcndaCzizyAjQ==",
      "dependencies": {
        "jerrypick": "^1.1.1"
      },
      "engines": {
        "node": ">=12"
      },
      "peerDependencies": {
        "react": ">=16.13.1"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.14.2",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.14.2.tgz",
      "integrity": "sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-router": {
      "version": "6.28.0",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-6.28.0.tgz",
      "integrity": "sha512-HrYdIFqdrnhDw0PqG/AKjAqEqM7AvxCz0DQ4h2W8k6nqmc5uRBYDag0SBxx9iYz5G8gnuNVLzUe13wl9eAsXXg==",
      "dependencies": {
        "@remix-run/router": "1.21.0"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "react": ">=16.8"
      }
    },
    "node_modules/react-router-dom": {
      "version": "6.28.0",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-6.28.0.tgz",
      "integrity": "sha512-kQ7Unsl5YdyOltsPGl31zOjLrDv+m2VcIEcIHqYYD3Lp0UppLjrzcfJqDJwXxFw3TH/yvapbnUvPlAj7Kx5nbg==",
      "dependencies": {
        "@remix-run/router": "1.21.0",
        "react-router": "6.28.0"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "react": ">=16.8",
        "react-dom": ">=16.8"
      }
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "dev": true,
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readable-stream": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz",
      "integrity": "sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/regenerator-runtime": {
      "version": "0.14.1",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.14.1.tgz",
      "integrity": "sha512-dYnhHh0nJoMfnkZs6GmmhFknAGRrLznOu5nc9ML+EJxGvrx6H7teuevqVqCuPcPK//3eDrrjQhehXVx9cnkGdw=="
    },
    "node_modules/resolve": {
      "version": "1.22.8",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",
      "integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.13.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true,
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rgbcolor": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/rgbcolor/-/rgbcolor-1.0.1.tgz",
      "integrity": "sha512-9aZLIrhRaD97sgVhtJOW6ckOEh6/GnvQtdVNfdZ6s67+3/XwLS9lBcQYzEEhYVeUowN7pRzMLsyGhK2i/xvWbw==",
      "optional": true,
      "engines": {
        "node": ">= 0.8.15"
      }
    },
    "node_modules/rollup": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.24.0.tgz",
      "integrity": "sha512-DOmrlGSXNk1DM0ljiQA+i+o0rSLhtii1je5wgk60j49d1jHT5YYttBv1iWOnYSTG+fZZESUOSNiAl89SIet+Cg==",
      "dev": true,
      "dependencies": {
        "@types/estree": "1.0.6"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.24.0",
        "@rollup/rollup-android-arm64": "4.24.0",
        "@rollup/rollup-darwin-arm64": "4.24.0",
        "@rollup/rollup-darwin-x64": "4.24.0",
        "@rollup/rollup-linux-arm-gnueabihf": "4.24.0",
        "@rollup/rollup-linux-arm-musleabihf": "4.24.0",
        "@rollup/rollup-linux-arm64-gnu": "4.24.0",
        "@rollup/rollup-linux-arm64-musl": "4.24.0",
        "@rollup/rollup-linux-powerpc64le-gnu": "4.24.0",
        "@rollup/rollup-linux-riscv64-gnu": "4.24.0",
        "@rollup/rollup-linux-s390x-gnu": "4.24.0",
        "@rollup/rollup-linux-x64-gnu": "4.24.0",
        "@rollup/rollup-linux-x64-musl": "4.24.0",
        "@rollup/rollup-win32-arm64-msvc": "4.24.0",
        "@rollup/rollup-win32-ia32-msvc": "4.24.0",
        "@rollup/rollup-win32-x64-msvc": "4.24.0",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "node_modules/sax": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.4.1.tgz",
      "integrity": "sha512-+aWOz7yVScEGoKNd4PA10LZ8sk0A/z5+nXQG5giUO5rprX9jgYsTdov9qCchZiPIZezbZH+jRut8nPodFAX4Jg=="
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA=="
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "dev": true,
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/sonner": {
      "version": "1.7.1",
      "resolved": "https://registry.npmjs.org/sonner/-/sonner-1.7.1.tgz",
      "integrity": "sha512-b6LHBfH32SoVasRFECrdY8p8s7hXPDn3OHUFbZZbiB1ctLS9Gdh6rpX2dVrpQA0kiL5jcRzDDldwwLkSKk3+QQ==",
      "peerDependencies": {
        "react": "^18.0.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stackblur-canvas": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/stackblur-canvas/-/stackblur-canvas-2.7.0.tgz",
      "integrity": "sha512-yf7OENo23AGJhBriGx0QivY5JP6Y1HbrrDI6WLt6C5auYZXlQrheoY8hD4ibekFKz1HOfE48Ww8kMWMnJD/zcQ==",
      "optional": true,
      "engines": {
        "node": ">=0.1.14"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "dev": true,
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true
    },
    "node_modules/string-width-cjs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/sucrase": {
      "version": "3.35.0",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
      "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
      "dev": true,
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "glob": "^10.3.10",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/svg-pathdata": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/svg-pathdata/-/svg-pathdata-6.0.3.tgz",
      "integrity": "sha512-qsjeeq5YjBZ5eMdFuUa4ZosMLxgr5RZ+F+Y1OrDhuOCEInRMA3x74XdBtggJcj9kOeInz0WE+LgCPDkZFlBYJw==",
      "optional": true,
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.16",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.16.tgz",
      "integrity": "sha512-TI4Cyx7gDiZ6r44ewaJmt0o6BrMCT5aK5e0rmJ/G9Xq3w7CX/5VXl/zIPEJZFUK5VEqwByyhqNPycPlvcK4ZNw==",
      "dev": true,
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.6.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.2",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.6",
        "lilconfig": "^3.1.3",
        "micromatch": "^4.0.8",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.47",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.2",
        "postcss-nested": "^6.2.0",
        "postcss-selector-parser": "^6.1.2",
        "resolve": "^1.22.8",
        "sucrase": "^3.35.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/text-segmentation": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/text-segmentation/-/text-segmentation-1.0.3.tgz",
      "integrity": "sha512-iOiPUo/BGnZ6+54OsWxZidGCsdU8YbE4PSpdPinp7DeMtUJNJBoJ/ouUSTJjHkh1KntHaltHl/gDs2FC4i5+Nw==",
      "optional": true,
      "dependencies": {
        "utrie": "^1.0.2"
      }
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "dev": true,
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "dev": true,
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tinycolor2": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/tinycolor2/-/tinycolor2-1.6.0.tgz",
      "integrity": "sha512-XPaBkWQJdsf3pLKJV9p4qN/S+fm2Oj8AIPo1BTUhg5oxkvm9+SVEGFdhyOz7tTdUTfvxMiAs4sp6/eZO2Ew+pw=="
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.3.0.tgz",
      "integrity": "sha512-UQMIo7pb8WRomKR1/+MFVLTroIvDVtMX3K6OUir8ynLyzB8Jeriont2bTAtmNPa1ekAgN7YPDyf6V+ygrdU+eQ==",
      "dev": true,
      "engines": {
        "node": ">=16"
      },
      "peerDependencies": {
        "typescript": ">=4.2.0"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
      "dev": true
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typescript": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.7.2.tgz",
      "integrity": "sha512-i5t66RHxDvVN40HfDd1PsEThGNnlMCMT3jMUuoh9/0TaqWevNontacunWyN02LA9/fIbEWlcHZcgTKb9QoaLfg==",
      "dev": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.18.0.tgz",
      "integrity": "sha512-Xq2rRjn6tzVpAyHr3+nmSg1/9k9aIHnJ2iZeOH7cfGOWqTkXTm3kwpQglEuLGdNrYvPF+2gtAs+/KF5rjVo+WQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.18.0",
        "@typescript-eslint/parser": "8.18.0",
        "@typescript-eslint/utils": "8.18.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <5.8.0"
      }
    },
    "node_modules/undici-types": {
      "version": "6.20.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.20.0.tgz",
      "integrity": "sha512-Ny6QZ2Nju20vw1SRHe3d9jVu6gJ+4e3+MMpqu7pqE5HT6WsTSlce++GQmK5UXS8mzV8DSYHrQH+Xrf2jVcuKNg==",
      "dev": true,
      "optional": true,
      "peer": true
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.1.tgz",
      "integrity": "sha512-R8UzCaa9Az+38REPiJ1tXlImTJXlVfgHZsglwBD/k6nj76ctsH1E3q4doGrukiLQd3sGQYu56r5+lo5r94l29A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.0"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/use-sync-external-store": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.2.2.tgz",
      "integrity": "sha512-PElTlVMwpblvbNqQ82d2n6RjStvdSoNe9FG28kNfz3WiXilJm4DdNkEzRhCZuIDwY8U08WVihhGR5iRqAwfDiw==",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="
    },
    "node_modules/utrie": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/utrie/-/utrie-1.0.2.tgz",
      "integrity": "sha512-1MLa5ouZiOmQzUbjbu9VmjLzn1QLXBhwpUa7kdLUQK+KQ5KA9I1vk5U4YHe/X2Ch7PYnJfWuWT+VbuxbGwljhw==",
      "optional": true,
      "dependencies": {
        "base64-arraybuffer": "^1.0.2"
      }
    },
    "node_modules/vite": {
      "version": "5.4.11",
      "resolved": "https://registry.npmjs.org/vite/-/vite-5.4.11.tgz",
      "integrity": "sha512-c7jFQRklXua0mTzneGW9QVyxFjUgwcihC4bXEtujIo2ouWCe1Ajt/amn2PCxYnhYfd5k09JX3SB7OYWFKYqj8Q==",
      "dev": true,
      "dependencies": {
        "esbuild": "^0.21.3",
        "postcss": "^8.4.43",
        "rollup": "^4.20.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || >=20.0.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
      "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
      "dev": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/xml": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/xml/-/xml-1.0.1.tgz",
      "integrity": "sha512-huCv9IH9Tcf95zuYCsQraZtWnJvBtLVE0QHMOs8bWyZAFZNDcYjsPq1nEx8jKA9y+Beo9v+7OBPRisQTjinQMw=="
    },
    "node_modules/xml-js": {
      "version": "1.6.11",
      "resolved": "https://registry.npmjs.org/xml-js/-/xml-js-1.6.11.tgz",
      "integrity": "sha512-7rVi2KMfwfWFl+GpPg6m80IVMWXLRjO+PxTq7V2CDhoGak0wzYzFgUY2m4XJ47OGdXd8eLE8EmwfAmdjw7lC1g==",
      "dependencies": {
        "sax": "^1.2.4"
      },
      "bin": {
        "xml-js": "bin/cli.js"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true
    },
    "node_modules/yaml": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.5.1.tgz",
      "integrity": "sha512-bLQOjaX/ADgQ20isPJRvF0iRUHIxVhYvr53Of7wGcWlO2jvtUlH5m87DsmulFVxRpNLOnI4tB6p/oh8D7kpn9Q==",
      "dev": true,
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zustand": {
      "version": "4.5.5",
      "resolved": "https://registry.npmjs.org/zustand/-/zustand-4.5.5.tgz",
      "integrity": "sha512-+0PALYNJNgK6hldkgDq2vLrw5f6g/jCInz52n9RTpropGgeAf/ioFUCdtsjCqu4gNhW9D01rUQBROoRjdzyn2Q==",
      "dependencies": {
        "use-sync-external-store": "1.2.2"
      },
      "engines": {
        "node": ">=12.7.0"
      },
      "peerDependencies": {
        "@types/react": ">=16.8",
        "immer": ">=9.0.6",
        "react": ">=16.8"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "immer": {
          "optional": true
        },
        "react": {
          "optional": true
        }
      }
    }
  }
}

```

### package.json

```
{
  "name": "transcribio",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "date-fns": "^2.30.0",
    "docx": "^8.5.0",
    "file-saver": "^2.0.5",
    "jspdf": "^2.5.1",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-force-graph-2d": "^1.26.1",
    "react-router-dom": "^6.14.0",
    "sonner": "^1.4.3",
    "zustand": "^4.5.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/file-saver": "^2.0.7",
    "@types/react": "^18.3.16",
    "@types/react-dom": "^18.3.5",
    "@types/react-router-dom": "^5.3.3",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}

```

### .env

```
VITE_API_KEY=FySHbrXGZ_xVV53LJgTdrl__Iko-Hh7QS2r7uia3kro
VITE_API_URL=https://api-service-1040094048579.us-central1.run.app
VITE_API_KEY_SECONDARY=FySHbrXGZ_xVV53LJgTdrl__Iko-Hh7QS2r7uia3kro
VITE_API_URL_SECONDARY=https://meeting-minutes-service-1040094048579.us-central1.run.app
```

### tsconfig.json

```
// tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "allowSyntheticDefaultImports": true
  },
  "include": ["src", "vite.config.ts"]
}
```

### eslint.config.js

```
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);

```

### vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### postcss.config.js

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

### filelist.txt

```
.:
eslint.config.js
filelist.txt
index.html
node_modules/
package-lock.json
package.json
postcss.config.js
src/
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts

./node_modules:
@alloc/
@ampproject/
@babel/
@esbuild/
@eslint/
@eslint-community/
@humanfs/
@humanwhocodes/
@isaacs/
@jridgewell/
@nodelib/
@pkgjs/
@rollup/
@types/
@typescript-eslint/
@vitejs/
acorn/
acorn-jsx/
ajv/
ansi-regex/
ansi-styles/
any-promise/
anymatch/
arg/
argparse/
atob/
autoprefixer/
balanced-match/
base64-arraybuffer/
binary-extensions/
brace-expansion/
braces/
browserslist/
btoa/
callsites/
camelcase-css/
caniuse-lite/
canvg/
chalk/
chokidar/
color-convert/
color-name/
commander/
concat-map/
convert-source-map/
core-js/
core-util-is/
cross-spawn/
css-line-break/
cssesc/
csstype/
debug/
deep-is/
didyoumean/
dlv/
docx/
dompurify/
eastasianwidth/
electron-to-chromium/
emoji-regex/
esbuild/
escalade/
escape-string-regexp/
eslint/
eslint-plugin-react-hooks/
eslint-plugin-react-refresh/
eslint-scope/
eslint-visitor-keys/
espree/
esquery/
esrecurse/
estraverse/
esutils/
fast-deep-equal/
fast-glob/
fast-json-stable-stringify/
fast-levenshtein/
fastq/
fflate/
file-entry-cache/
file-saver/
fill-range/
find-up/
flat-cache/
flatted/
foreground-child/
fraction.js/
function-bind/
gensync/
glob/
glob-parent/
globals/
graphemer/
has-flag/
hasown/
html2canvas/
ignore/
immediate/
import-fresh/
imurmurhash/
inherits/
is-binary-path/
is-core-module/
is-extglob/
is-fullwidth-code-point/
is-glob/
is-number/
isarray/
isexe/
jackspeak/
jiti/
js-tokens/
js-yaml/
jsesc/
json-buffer/
json-schema-traverse/
json-stable-stringify-without-jsonify/
json5/
jspdf/
jszip/
keyv/
levn/
lie/
lilconfig/
lines-and-columns/
locate-path/
lodash.merge/
loose-envify/
lru-cache/
lucide-react/
merge2/
micromatch/
minimatch/
minipass/
ms/
mz/
nanoid/
natural-compare/
node-releases/
normalize-path/
normalize-range/
object-assign/
object-hash/
optionator/
p-limit/
p-locate/
package-json-from-dist/
pako/
parent-module/
path-exists/
path-key/
path-parse/
path-scurry/
performance-now/
picocolors/
picomatch/
pify/
pirates/
postcss/
postcss-import/
postcss-js/
postcss-load-config/
postcss-nested/
postcss-selector-parser/
postcss-value-parser/
prelude-ls/
process-nextick-args/
punycode/
queue-microtask/
raf/
react/
react-dom/
react-refresh/
read-cache/
readable-stream/
readdirp/
regenerator-runtime/
resolve/
resolve-from/
reusify/
rgbcolor/
rollup/
run-parallel/
safe-buffer/
sax/
scheduler/
semver/
setimmediate/
shebang-command/
shebang-regex/
signal-exit/
sonner/
source-map-js/
stackblur-canvas/
string-width/
string-width-cjs/
string_decoder/
strip-ansi/
strip-ansi-cjs/
strip-json-comments/
sucrase/
supports-color/
supports-preserve-symlinks-flag/
svg-pathdata/
tailwindcss/
text-segmentation/
text-table/
thenify/
thenify-all/
to-fast-properties/
to-regex-range/
ts-api-utils/
ts-interface-checker/
type-check/
typescript/
typescript-eslint/
undici-types/
update-browserslist-db/
uri-js/
use-sync-external-store/
util-deprecate/
utrie/
vite/
which/
word-wrap/
wrap-ansi/
wrap-ansi-cjs/
xml/
xml-js/
yallist/
yaml/
yocto-queue/
zustand/

./node_modules/@alloc:
quick-lru/

./node_modules/@alloc/quick-lru:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/@ampproject:
remapping/

./node_modules/@ampproject/remapping:
LICENSE
README.md
dist/
package.json

./node_modules/@ampproject/remapping/dist:
remapping.mjs
remapping.mjs.map
remapping.umd.js
remapping.umd.js.map
types/

./node_modules/@ampproject/remapping/dist/types:
build-source-map-tree.d.ts
remapping.d.ts
source-map-tree.d.ts
source-map.d.ts
types.d.ts

./node_modules/@babel:
code-frame/
compat-data/
core/
generator/
helper-compilation-targets/
helper-module-imports/
helper-module-transforms/
helper-plugin-utils/
helper-simple-access/
helper-string-parser/
helper-validator-identifier/
helper-validator-option/
helpers/
highlight/
parser/
plugin-transform-react-jsx-self/
plugin-transform-react-jsx-source/
runtime/
template/
traverse/
types/

./node_modules/@babel/code-frame:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/code-frame/lib:
index.js
index.js.map

./node_modules/@babel/compat-data:
LICENSE
README.md
corejs2-built-ins.js
corejs3-shipped-proposals.js
data/
native-modules.js
overlapping-plugins.js
package.json
plugin-bugfixes.js
plugins.js
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/compat-data/data:
corejs2-built-ins.json
corejs3-shipped-proposals.json
native-modules.json
overlapping-plugins.json
plugin-bugfixes.json
plugins.json

./node_modules/@babel/core:
LICENSE
README.md
cjs-proxy.cjs
lib/
package.json
src/
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/core/lib:
config/
errors/
gensync-utils/
index.js
index.js.map
parse.js
parse.js.map
parser/
tools/
transform-ast.js
transform-ast.js.map
transform-file-browser.js
transform-file-browser.js.map
transform-file.js
transform-file.js.map
transform.js
transform.js.map
transformation/
vendor/

./node_modules/@babel/core/lib/config:
cache-contexts.js
cache-contexts.js.map
caching.js
caching.js.map
config-chain.js
config-chain.js.map
config-descriptors.js
config-descriptors.js.map
files/
full.js
full.js.map
helpers/
index.js
index.js.map
item.js
item.js.map
partial.js
partial.js.map
pattern-to-regex.js
pattern-to-regex.js.map
plugin.js
plugin.js.map
printer.js
printer.js.map
resolve-targets-browser.js
resolve-targets-browser.js.map
resolve-targets.js
resolve-targets.js.map
util.js
util.js.map
validation/

./node_modules/@babel/core/lib/config/files:
configuration.js
configuration.js.map
import.cjs
import.cjs.map
index-browser.js
index-browser.js.map
index.js
index.js.map
module-types.js
module-types.js.map
package.js
package.js.map
plugins.js
plugins.js.map
types.js
types.js.map
utils.js
utils.js.map

./node_modules/@babel/core/lib/config/helpers:
config-api.js
config-api.js.map
deep-array.js
deep-array.js.map
environment.js
environment.js.map

./node_modules/@babel/core/lib/config/validation:
option-assertions.js
option-assertions.js.map
options.js
options.js.map
plugins.js
plugins.js.map
removed.js
removed.js.map

./node_modules/@babel/core/lib/errors:
config-error.js
config-error.js.map
rewrite-stack-trace.js
rewrite-stack-trace.js.map

./node_modules/@babel/core/lib/gensync-utils:
async.js
async.js.map
fs.js
fs.js.map
functional.js
functional.js.map

./node_modules/@babel/core/lib/parser:
index.js
index.js.map
util/

./node_modules/@babel/core/lib/parser/util:
missing-plugin-helper.js
missing-plugin-helper.js.map

./node_modules/@babel/core/lib/tools:
build-external-helpers.js
build-external-helpers.js.map

./node_modules/@babel/core/lib/transformation:
block-hoist-plugin.js
block-hoist-plugin.js.map
file/
index.js
index.js.map
normalize-file.js
normalize-file.js.map
normalize-opts.js
normalize-opts.js.map
plugin-pass.js
plugin-pass.js.map
util/

./node_modules/@babel/core/lib/transformation/file:
babel-7-helpers.cjs
babel-7-helpers.cjs.map
file.js
file.js.map
generate.js
generate.js.map
merge-map.js
merge-map.js.map

./node_modules/@babel/core/lib/transformation/util:
clone-deep.js
clone-deep.js.map

./node_modules/@babel/core/lib/vendor:
import-meta-resolve.js
import-meta-resolve.js.map

./node_modules/@babel/core/src:
config/
transform-file-browser.ts
transform-file.ts

./node_modules/@babel/core/src/config:
files/
resolve-targets-browser.ts
resolve-targets.ts

./node_modules/@babel/core/src/config/files:
index-browser.ts
index.ts

./node_modules/@babel/generator:
LICENSE
README.md
lib/
package.json

./node_modules/@babel/generator/lib:
buffer.js
buffer.js.map
generators/
index.js
index.js.map
node/
printer.js
printer.js.map
source-map.js
source-map.js.map

./node_modules/@babel/generator/lib/generators:
base.js
base.js.map
classes.js
classes.js.map
expressions.js
expressions.js.map
flow.js
flow.js.map
index.js
index.js.map
jsx.js
jsx.js.map
methods.js
methods.js.map
modules.js
modules.js.map
statements.js
statements.js.map
template-literals.js
template-literals.js.map
types.js
types.js.map
typescript.js
typescript.js.map

./node_modules/@babel/generator/lib/node:
index.js
index.js.map
parentheses.js
parentheses.js.map
whitespace.js
whitespace.js.map

./node_modules/@babel/helper-compilation-targets:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/helper-compilation-targets/lib:
debug.js
debug.js.map
filter-items.js
filter-items.js.map
index.js
index.js.map
options.js
options.js.map
pretty.js
pretty.js.map
targets.js
targets.js.map
utils.js
utils.js.map

./node_modules/@babel/helper-module-imports:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/helper-module-imports/lib:
import-builder.js
import-builder.js.map
import-injector.js
import-injector.js.map
index.js
index.js.map
is-module.js
is-module.js.map

./node_modules/@babel/helper-module-transforms:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/helper-module-transforms/lib:
dynamic-import.js
dynamic-import.js.map
get-module-name.js
get-module-name.js.map
index.js
index.js.map
lazy-modules.js
lazy-modules.js.map
normalize-and-load-metadata.js
normalize-and-load-metadata.js.map
rewrite-live-references.js
rewrite-live-references.js.map
rewrite-this.js
rewrite-this.js.map

./node_modules/@babel/helper-plugin-utils:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/helper-plugin-utils/lib:
index.js
index.js.map

./node_modules/@babel/helper-simple-access:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/helper-simple-access/lib:
index.js
index.js.map

./node_modules/@babel/helper-string-parser:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/helper-string-parser/lib:
index.js
index.js.map

./node_modules/@babel/helper-validator-identifier:
LICENSE
README.md
lib/
package.json
scripts/
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/helper-validator-identifier/lib:
identifier.js
identifier.js.map
index.js
index.js.map
keyword.js
keyword.js.map

./node_modules/@babel/helper-validator-identifier/scripts:
generate-identifier-regex.cjs

./node_modules/@babel/helper-validator-option:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/helper-validator-option/lib:
find-suggestion.js
find-suggestion.js.map
index.js
index.js.map
validator.js
validator.js.map

./node_modules/@babel/helpers:
LICENSE
README.md
lib/
package.json
scripts/
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/helpers/lib:
helpers/
helpers-generated.js
helpers-generated.js.map
index.js
index.js.map

./node_modules/@babel/helpers/lib/helpers:
AwaitValue.js
AwaitValue.js.map
OverloadYield.js
OverloadYield.js.map
applyDecoratedDescriptor.js
applyDecoratedDescriptor.js.map
applyDecs.js
applyDecs.js.map
applyDecs2203.js
applyDecs2203.js.map
applyDecs2203R.js
applyDecs2203R.js.map
applyDecs2301.js
applyDecs2301.js.map
applyDecs2305.js
applyDecs2305.js.map
applyDecs2311.js
applyDecs2311.js.map
arrayLikeToArray.js
arrayLikeToArray.js.map
arrayWithHoles.js
arrayWithHoles.js.map
arrayWithoutHoles.js
arrayWithoutHoles.js.map
assertClassBrand.js
assertClassBrand.js.map
assertThisInitialized.js
assertThisInitialized.js.map
asyncGeneratorDelegate.js
asyncGeneratorDelegate.js.map
asyncIterator.js
asyncIterator.js.map
asyncToGenerator.js
asyncToGenerator.js.map
awaitAsyncGenerator.js
awaitAsyncGenerator.js.map
callSuper.js
callSuper.js.map
checkInRHS.js
checkInRHS.js.map
checkPrivateRedeclaration.js
checkPrivateRedeclaration.js.map
classApplyDescriptorDestructureSet.js
classApplyDescriptorDestructureSet.js.map
classApplyDescriptorGet.js
classApplyDescriptorGet.js.map
classApplyDescriptorSet.js
classApplyDescriptorSet.js.map
classCallCheck.js
classCallCheck.js.map
classCheckPrivateStaticAccess.js
classCheckPrivateStaticAccess.js.map
classCheckPrivateStaticFieldDescriptor.js
classCheckPrivateStaticFieldDescriptor.js.map
classExtractFieldDescriptor.js
classExtractFieldDescriptor.js.map
classNameTDZError.js
classNameTDZError.js.map
classPrivateFieldDestructureSet.js
classPrivateFieldDestructureSet.js.map
classPrivateFieldGet.js
classPrivateFieldGet.js.map
classPrivateFieldGet2.js
classPrivateFieldGet2.js.map
classPrivateFieldInitSpec.js
classPrivateFieldInitSpec.js.map
classPrivateFieldLooseBase.js
classPrivateFieldLooseBase.js.map
classPrivateFieldLooseKey.js
classPrivateFieldLooseKey.js.map
classPrivateFieldSet.js
classPrivateFieldSet.js.map
classPrivateFieldSet2.js
classPrivateFieldSet2.js.map
classPrivateGetter.js
classPrivateGetter.js.map
classPrivateMethodGet.js
classPrivateMethodGet.js.map
classPrivateMethodInitSpec.js
classPrivateMethodInitSpec.js.map
classPrivateMethodSet.js
classPrivateMethodSet.js.map
classPrivateSetter.js
classPrivateSetter.js.map
classStaticPrivateFieldDestructureSet.js
classStaticPrivateFieldDestructureSet.js.map
classStaticPrivateFieldSpecGet.js
classStaticPrivateFieldSpecGet.js.map
classStaticPrivateFieldSpecSet.js
classStaticPrivateFieldSpecSet.js.map
classStaticPrivateMethodGet.js
classStaticPrivateMethodGet.js.map
classStaticPrivateMethodSet.js
classStaticPrivateMethodSet.js.map
construct.js
construct.js.map
createClass.js
createClass.js.map
createForOfIteratorHelper.js
createForOfIteratorHelper.js.map
createForOfIteratorHelperLoose.js
createForOfIteratorHelperLoose.js.map
createSuper.js
createSuper.js.map
decorate.js
decorate.js.map
defaults.js
defaults.js.map
defineAccessor.js
defineAccessor.js.map
defineEnumerableProperties.js
defineEnumerableProperties.js.map
defineProperty.js
defineProperty.js.map
dispose.js
dispose.js.map
extends.js
extends.js.map
get.js
get.js.map
getPrototypeOf.js
getPrototypeOf.js.map
identity.js
identity.js.map
importDeferProxy.js
importDeferProxy.js.map
inherits.js
inherits.js.map
inheritsLoose.js
inheritsLoose.js.map
initializerDefineProperty.js
initializerDefineProperty.js.map
initializerWarningHelper.js
initializerWarningHelper.js.map
instanceof.js
instanceof.js.map
interopRequireDefault.js
interopRequireDefault.js.map
interopRequireWildcard.js
interopRequireWildcard.js.map
isNativeFunction.js
isNativeFunction.js.map
isNativeReflectConstruct.js
isNativeReflectConstruct.js.map
iterableToArray.js
iterableToArray.js.map
iterableToArrayLimit.js
iterableToArrayLimit.js.map
jsx.js
jsx.js.map
maybeArrayLike.js
maybeArrayLike.js.map
newArrowCheck.js
newArrowCheck.js.map
nonIterableRest.js
nonIterableRest.js.map
nonIterableSpread.js
nonIterableSpread.js.map
nullishReceiverError.js
nullishReceiverError.js.map
objectDestructuringEmpty.js
objectDestructuringEmpty.js.map
objectSpread.js
objectSpread.js.map
objectSpread2.js
objectSpread2.js.map
objectWithoutProperties.js
objectWithoutProperties.js.map
objectWithoutPropertiesLoose.js
objectWithoutPropertiesLoose.js.map
possibleConstructorReturn.js
possibleConstructorReturn.js.map
readOnlyError.js
readOnlyError.js.map
regeneratorRuntime.js
regeneratorRuntime.js.map
set.js
set.js.map
setFunctionName.js
setFunctionName.js.map
setPrototypeOf.js
setPrototypeOf.js.map
skipFirstGeneratorNext.js
skipFirstGeneratorNext.js.map
slicedToArray.js
slicedToArray.js.map
superPropBase.js
superPropBase.js.map
superPropGet.js
superPropGet.js.map
superPropSet.js
superPropSet.js.map
taggedTemplateLiteral.js
taggedTemplateLiteral.js.map
taggedTemplateLiteralLoose.js
taggedTemplateLiteralLoose.js.map
tdz.js
tdz.js.map
temporalRef.js
temporalRef.js.map
temporalUndefined.js
temporalUndefined.js.map
toArray.js
toArray.js.map
toConsumableArray.js
toConsumableArray.js.map
toPrimitive.js
toPrimitive.js.map
toPropertyKey.js
toPropertyKey.js.map
toSetter.js
toSetter.js.map
typeof.js
typeof.js.map
unsupportedIterableToArray.js
unsupportedIterableToArray.js.map
using.js
using.js.map
usingCtx.js
usingCtx.js.map
wrapAsyncGenerator.js
wrapAsyncGenerator.js.map
wrapNativeSuper.js
wrapNativeSuper.js.map
wrapRegExp.js
wrapRegExp.js.map
writeOnlyError.js
writeOnlyError.js.map

./node_modules/@babel/helpers/scripts:
build-helper-metadata.js
generate-helpers.js
generate-regenerator-runtime.js

./node_modules/@babel/highlight:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/highlight/lib:
index.js
index.js.map

./node_modules/@babel/parser:
CHANGELOG.md
LICENSE
README.md
bin/
index.cjs
lib/
package.json
typings/

./node_modules/@babel/parser/bin:
babel-parser.js*

./node_modules/@babel/parser/lib:
index.js
index.js.map

./node_modules/@babel/parser/typings:
babel-parser.d.ts

./node_modules/@babel/plugin-transform-react-jsx-self:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/plugin-transform-react-jsx-self/lib:
index.js
index.js.map

./node_modules/@babel/plugin-transform-react-jsx-source:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/plugin-transform-react-jsx-source/lib:
index.js
index.js.map

./node_modules/@babel/runtime:
LICENSE
README.md
helpers/
package.json
regenerator/

./node_modules/@babel/runtime/helpers:
AwaitValue.js
OverloadYield.js
applyDecoratedDescriptor.js
applyDecs.js
applyDecs2203.js
applyDecs2203R.js
applyDecs2301.js
applyDecs2305.js
applyDecs2311.js
arrayLikeToArray.js
arrayWithHoles.js
arrayWithoutHoles.js
assertClassBrand.js
assertThisInitialized.js
asyncGeneratorDelegate.js
asyncIterator.js
asyncToGenerator.js
awaitAsyncGenerator.js
callSuper.js
checkInRHS.js
checkPrivateRedeclaration.js
classApplyDescriptorDestructureSet.js
classApplyDescriptorGet.js
classApplyDescriptorSet.js
classCallCheck.js
classCheckPrivateStaticAccess.js
classCheckPrivateStaticFieldDescriptor.js
classExtractFieldDescriptor.js
classNameTDZError.js
classPrivateFieldDestructureSet.js
classPrivateFieldGet.js
classPrivateFieldGet2.js
classPrivateFieldInitSpec.js
classPrivateFieldLooseBase.js
classPrivateFieldLooseKey.js
classPrivateFieldSet.js
classPrivateFieldSet2.js
classPrivateGetter.js
classPrivateMethodGet.js
classPrivateMethodInitSpec.js
classPrivateMethodSet.js
classPrivateSetter.js
classStaticPrivateFieldDestructureSet.js
classStaticPrivateFieldSpecGet.js
classStaticPrivateFieldSpecSet.js
classStaticPrivateMethodGet.js
classStaticPrivateMethodSet.js
construct.js
createClass.js
createForOfIteratorHelper.js
createForOfIteratorHelperLoose.js
createSuper.js
decorate.js
defaults.js
defineAccessor.js
defineEnumerableProperties.js
defineProperty.js
dispose.js
esm/
extends.js
get.js
getPrototypeOf.js
identity.js
importDeferProxy.js
inherits.js
inheritsLoose.js
initializerDefineProperty.js
initializerWarningHelper.js
instanceof.js
interopRequireDefault.js
interopRequireWildcard.js
isNativeFunction.js
isNativeReflectConstruct.js
iterableToArray.js
iterableToArrayLimit.js
jsx.js
maybeArrayLike.js
newArrowCheck.js
nonIterableRest.js
nonIterableSpread.js
nullishReceiverError.js
objectDestructuringEmpty.js
objectSpread.js
objectSpread2.js
objectWithoutProperties.js
objectWithoutPropertiesLoose.js
possibleConstructorReturn.js
readOnlyError.js
regeneratorRuntime.js
set.js
setFunctionName.js
setPrototypeOf.js
skipFirstGeneratorNext.js
slicedToArray.js
superPropBase.js
superPropGet.js
superPropSet.js
taggedTemplateLiteral.js
taggedTemplateLiteralLoose.js
tdz.js
temporalRef.js
temporalUndefined.js
toArray.js
toConsumableArray.js
toPrimitive.js
toPropertyKey.js
toSetter.js
typeof.js
unsupportedIterableToArray.js
using.js
usingCtx.js
wrapAsyncGenerator.js
wrapNativeSuper.js
wrapRegExp.js
writeOnlyError.js

./node_modules/@babel/runtime/helpers/esm:
AwaitValue.js
OverloadYield.js
applyDecoratedDescriptor.js
applyDecs.js
applyDecs2203.js
applyDecs2203R.js
applyDecs2301.js
applyDecs2305.js
applyDecs2311.js
arrayLikeToArray.js
arrayWithHoles.js
arrayWithoutHoles.js
assertClassBrand.js
assertThisInitialized.js
asyncGeneratorDelegate.js
asyncIterator.js
asyncToGenerator.js
awaitAsyncGenerator.js
callSuper.js
checkInRHS.js
checkPrivateRedeclaration.js
classApplyDescriptorDestructureSet.js
classApplyDescriptorGet.js
classApplyDescriptorSet.js
classCallCheck.js
classCheckPrivateStaticAccess.js
classCheckPrivateStaticFieldDescriptor.js
classExtractFieldDescriptor.js
classNameTDZError.js
classPrivateFieldDestructureSet.js
classPrivateFieldGet.js
classPrivateFieldGet2.js
classPrivateFieldInitSpec.js
classPrivateFieldLooseBase.js
classPrivateFieldLooseKey.js
classPrivateFieldSet.js
classPrivateFieldSet2.js
classPrivateGetter.js
classPrivateMethodGet.js
classPrivateMethodInitSpec.js
classPrivateMethodSet.js
classPrivateSetter.js
classStaticPrivateFieldDestructureSet.js
classStaticPrivateFieldSpecGet.js
classStaticPrivateFieldSpecSet.js
classStaticPrivateMethodGet.js
classStaticPrivateMethodSet.js
construct.js
createClass.js
createForOfIteratorHelper.js
createForOfIteratorHelperLoose.js
createSuper.js
decorate.js
defaults.js
defineAccessor.js
defineEnumerableProperties.js
defineProperty.js
dispose.js
extends.js
get.js
getPrototypeOf.js
identity.js
importDeferProxy.js
inherits.js
inheritsLoose.js
initializerDefineProperty.js
initializerWarningHelper.js
instanceof.js
interopRequireDefault.js
interopRequireWildcard.js
isNativeFunction.js
isNativeReflectConstruct.js
iterableToArray.js
iterableToArrayLimit.js
jsx.js
maybeArrayLike.js
newArrowCheck.js
nonIterableRest.js
nonIterableSpread.js
nullishReceiverError.js
objectDestructuringEmpty.js
objectSpread.js
objectSpread2.js
objectWithoutProperties.js
objectWithoutPropertiesLoose.js
package.json
possibleConstructorReturn.js
readOnlyError.js
regeneratorRuntime.js
set.js
setFunctionName.js
setPrototypeOf.js
skipFirstGeneratorNext.js
slicedToArray.js
superPropBase.js
superPropGet.js
superPropSet.js
taggedTemplateLiteral.js
taggedTemplateLiteralLoose.js
tdz.js
temporalRef.js
temporalUndefined.js
toArray.js
toConsumableArray.js
toPrimitive.js
toPropertyKey.js
toSetter.js
typeof.js
unsupportedIterableToArray.js
using.js
usingCtx.js
wrapAsyncGenerator.js
wrapNativeSuper.js
wrapRegExp.js
writeOnlyError.js

./node_modules/@babel/runtime/regenerator:
index.js

./node_modules/@babel/template:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/template/lib:
builder.js
builder.js.map
formatters.js
formatters.js.map
index.js
index.js.map
literal.js
literal.js.map
options.js
options.js.map
parse.js
parse.js.map
populate.js
populate.js.map
string.js
string.js.map

./node_modules/@babel/traverse:
LICENSE
README.md
lib/
node_modules/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/traverse/lib:
cache.js
cache.js.map
context.js
context.js.map
hub.js
hub.js.map
index.js
index.js.map
path/
scope/
traverse-node.js
traverse-node.js.map
types.js
types.js.map
visitors.js
visitors.js.map

./node_modules/@babel/traverse/lib/path:
ancestry.js
ancestry.js.map
comments.js
comments.js.map
context.js
context.js.map
conversion.js
conversion.js.map
evaluation.js
evaluation.js.map
family.js
family.js.map
index.js
index.js.map
inference/
introspection.js
introspection.js.map
lib/
modification.js
modification.js.map
removal.js
removal.js.map
replacement.js
replacement.js.map

./node_modules/@babel/traverse/lib/path/inference:
index.js
index.js.map
inferer-reference.js
inferer-reference.js.map
inferers.js
inferers.js.map
util.js
util.js.map

./node_modules/@babel/traverse/lib/path/lib:
hoister.js
hoister.js.map
removal-hooks.js
removal-hooks.js.map
virtual-types-validator.js
virtual-types-validator.js.map
virtual-types.js
virtual-types.js.map

./node_modules/@babel/traverse/lib/scope:
binding.js
binding.js.map
index.js
index.js.map
lib/

./node_modules/@babel/traverse/lib/scope/lib:
renamer.js
renamer.js.map

./node_modules/@babel/traverse/node_modules:
globals/

./node_modules/@babel/traverse/node_modules/globals:
globals.json
index.js
license
package.json
readme.md

./node_modules/@babel/types:
LICENSE
README.md
lib/
package.json
tsconfig.json
tsconfig.tsbuildinfo

./node_modules/@babel/types/lib:
asserts/
ast-types/
builders/
clone/
comments/
constants/
converters/
definitions/
index-legacy.d.ts
index.d.ts
index.js
index.js.flow
index.js.map
modifications/
retrievers/
traverse/
utils/
validators/

./node_modules/@babel/types/lib/asserts:
assertNode.js
assertNode.js.map
generated/

./node_modules/@babel/types/lib/asserts/generated:
index.js
index.js.map

./node_modules/@babel/types/lib/ast-types:
generated/

./node_modules/@babel/types/lib/ast-types/generated:
index.js
index.js.map

./node_modules/@babel/types/lib/builders:
flow/
generated/
productions.js
productions.js.map
react/
typescript/
validateNode.js
validateNode.js.map

./node_modules/@babel/types/lib/builders/flow:
createFlowUnionType.js
createFlowUnionType.js.map
createTypeAnnotationBasedOnTypeof.js
createTypeAnnotationBasedOnTypeof.js.map

./node_modules/@babel/types/lib/builders/generated:
index.js
index.js.map
uppercase.js
uppercase.js.map

./node_modules/@babel/types/lib/builders/react:
buildChildren.js
buildChildren.js.map

./node_modules/@babel/types/lib/builders/typescript:
createTSUnionType.js
createTSUnionType.js.map

./node_modules/@babel/types/lib/clone:
clone.js
clone.js.map
cloneDeep.js
cloneDeep.js.map
cloneDeepWithoutLoc.js
cloneDeepWithoutLoc.js.map
cloneNode.js
cloneNode.js.map
cloneWithoutLoc.js
cloneWithoutLoc.js.map

./node_modules/@babel/types/lib/comments:
addComment.js
addComment.js.map
addComments.js
addComments.js.map
inheritInnerComments.js
inheritInnerComments.js.map
inheritLeadingComments.js
inheritLeadingComments.js.map
inheritTrailingComments.js
inheritTrailingComments.js.map
inheritsComments.js
inheritsComments.js.map
removeComments.js
removeComments.js.map

./node_modules/@babel/types/lib/constants:
generated/
index.js
index.js.map

./node_modules/@babel/types/lib/constants/generated:
index.js
index.js.map

./node_modules/@babel/types/lib/converters:
ensureBlock.js
ensureBlock.js.map
gatherSequenceExpressions.js
gatherSequenceExpressions.js.map
toBindingIdentifierName.js
toBindingIdentifierName.js.map
toBlock.js
toBlock.js.map
toComputedKey.js
toComputedKey.js.map
toExpression.js
toExpression.js.map
toIdentifier.js
toIdentifier.js.map
toKeyAlias.js
toKeyAlias.js.map
toSequenceExpression.js
toSequenceExpression.js.map
toStatement.js
toStatement.js.map
valueToNode.js
valueToNode.js.map

./node_modules/@babel/types/lib/definitions:
core.js
core.js.map
deprecated-aliases.js
deprecated-aliases.js.map
experimental.js
experimental.js.map
flow.js
flow.js.map
index.js
index.js.map
jsx.js
jsx.js.map
misc.js
misc.js.map
placeholders.js
placeholders.js.map
typescript.js
typescript.js.map
utils.js
utils.js.map

./node_modules/@babel/types/lib/modifications:
appendToMemberExpression.js
appendToMemberExpression.js.map
flow/
inherits.js
inherits.js.map
prependToMemberExpression.js
prependToMemberExpression.js.map
removeProperties.js
removeProperties.js.map
removePropertiesDeep.js
removePropertiesDeep.js.map
typescript/

./node_modules/@babel/types/lib/modifications/flow:
removeTypeDuplicates.js
removeTypeDuplicates.js.map

./node_modules/@babel/types/lib/modifications/typescript:
removeTypeDuplicates.js
removeTypeDuplicates.js.map

./node_modules/@babel/types/lib/retrievers:
getAssignmentIdentifiers.js
getAssignmentIdentifiers.js.map
getBindingIdentifiers.js
getBindingIdentifiers.js.map
getFunctionName.js
getFunctionName.js.map
getOuterBindingIdentifiers.js
getOuterBindingIdentifiers.js.map

./node_modules/@babel/types/lib/traverse:
traverse.js
traverse.js.map
traverseFast.js
traverseFast.js.map

./node_modules/@babel/types/lib/utils:
deprecationWarning.js
deprecationWarning.js.map
inherit.js
inherit.js.map
react/
shallowEqual.js
shallowEqual.js.map

./node_modules/@babel/types/lib/utils/react:
cleanJSXElementLiteralChild.js
cleanJSXElementLiteralChild.js.map

./node_modules/@babel/types/lib/validators:
buildMatchMemberExpression.js
buildMatchMemberExpression.js.map
generated/
is.js
is.js.map
isBinding.js
isBinding.js.map
isBlockScoped.js
isBlockScoped.js.map
isImmutable.js
isImmutable.js.map
isLet.js
isLet.js.map
isNode.js
isNode.js.map
isNodesEquivalent.js
isNodesEquivalent.js.map
isPlaceholderType.js
isPlaceholderType.js.map
isReferenced.js
isReferenced.js.map
isScope.js
isScope.js.map
isSpecifierDefault.js
isSpecifierDefault.js.map
isType.js
isType.js.map
isValidES3Identifier.js
isValidES3Identifier.js.map
isValidIdentifier.js
isValidIdentifier.js.map
isVar.js
isVar.js.map
matchesPattern.js
matchesPattern.js.map
react/
validate.js
validate.js.map

./node_modules/@babel/types/lib/validators/generated:
index.js
index.js.map

./node_modules/@babel/types/lib/validators/react:
isCompatTag.js
isCompatTag.js.map
isReactComponent.js
isReactComponent.js.map

./node_modules/@esbuild:
linux-x64/

./node_modules/@esbuild/linux-x64:
README.md
bin/
package.json

./node_modules/@esbuild/linux-x64/bin:
esbuild*

./node_modules/@eslint:
config-array/
core/
eslintrc/
js/
object-schema/
plugin-kit/

./node_modules/@eslint/config-array:
LICENSE
README.md
dist/
package.json

./node_modules/@eslint/config-array/dist:
cjs/
esm/

./node_modules/@eslint/config-array/dist/cjs:
index.cjs
index.d.cts
types.ts

./node_modules/@eslint/config-array/dist/esm:
index.d.ts
index.js
types.d.ts
types.ts

./node_modules/@eslint/core:
LICENSE
README.md
dist/
package.json

./node_modules/@eslint/core/dist:
cjs/
esm/

./node_modules/@eslint/core/dist/cjs:
types.d.cts

./node_modules/@eslint/core/dist/esm:
types.d.ts

./node_modules/@eslint/eslintrc:
LICENSE
README.md
conf/
dist/
lib/
node_modules/
package.json
universal.js

./node_modules/@eslint/eslintrc/conf:
config-schema.js
environments.js

./node_modules/@eslint/eslintrc/dist:
eslintrc-universal.cjs
eslintrc-universal.cjs.map
eslintrc.cjs
eslintrc.cjs.map

./node_modules/@eslint/eslintrc/lib:
cascading-config-array-factory.js
config-array/
config-array-factory.js
flat-compat.js
index-universal.js
index.js
shared/

./node_modules/@eslint/eslintrc/lib/config-array:
config-array.js
config-dependency.js
extracted-config.js
ignore-pattern.js
index.js
override-tester.js

./node_modules/@eslint/eslintrc/lib/shared:
ajv.js
config-ops.js
config-validator.js
deprecation-warnings.js
naming.js
relative-module-resolver.js
types.js

./node_modules/@eslint/eslintrc/node_modules:
globals/

./node_modules/@eslint/eslintrc/node_modules/globals:
globals.json
index.d.ts
index.js
license
package.json
readme.md

./node_modules/@eslint/js:
LICENSE
README.md
package.json
src/

./node_modules/@eslint/js/src:
configs/
index.js

./node_modules/@eslint/js/src/configs:
eslint-all.js
eslint-recommended.js

./node_modules/@eslint/object-schema:
LICENSE
README.md
dist/
package.json

./node_modules/@eslint/object-schema/dist:
cjs/
esm/

./node_modules/@eslint/object-schema/dist/cjs:
index.cjs
index.d.cts
types.ts

./node_modules/@eslint/object-schema/dist/esm:
index.d.ts
index.js
types.d.ts
types.ts

./node_modules/@eslint/plugin-kit:
LICENSE
README.md
dist/
package.json

./node_modules/@eslint/plugin-kit/dist:
cjs/
esm/

./node_modules/@eslint/plugin-kit/dist/cjs:
index.cjs
index.d.cts
types.ts

./node_modules/@eslint/plugin-kit/dist/esm:
index.d.ts
index.js
types.d.ts
types.ts

./node_modules/@eslint-community:
eslint-utils/
regexpp/

./node_modules/@eslint-community/eslint-utils:
LICENSE
README.md
index.js
index.js.map
index.mjs
index.mjs.map
node_modules/
package.json

./node_modules/@eslint-community/eslint-utils/node_modules:
eslint-visitor-keys/

./node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys:
LICENSE
README.md
dist/
lib/
package.json

./node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys/dist:
eslint-visitor-keys.cjs
eslint-visitor-keys.d.cts
index.d.ts
visitor-keys.d.ts

./node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys/lib:
index.js
visitor-keys.js

./node_modules/@eslint-community/regexpp:
LICENSE
README.md
index.d.ts
index.js
index.js.map
index.mjs
index.mjs.map
package.json

./node_modules/@humanfs:
core/
node/

./node_modules/@humanfs/core:
LICENSE
README.md
dist/
package.json
src/

./node_modules/@humanfs/core/dist:
errors.d.ts
fsx.d.ts
hfs.d.ts
index.d.ts
path.d.ts

./node_modules/@humanfs/core/src:
errors.js
hfs.js
index.js
path.js

./node_modules/@humanfs/node:
LICENSE
README.md
dist/
package.json
src/

./node_modules/@humanfs/node/dist:
index.d.ts
node-fsx.d.ts
node-hfs.d.ts

./node_modules/@humanfs/node/src:
index.js
node-hfs.js

./node_modules/@humanwhocodes:
module-importer/
retry/

./node_modules/@humanwhocodes/module-importer:
CHANGELOG.md
LICENSE
README.md
dist/
package.json
src/

./node_modules/@humanwhocodes/module-importer/dist:
module-importer.cjs
module-importer.d.cts
module-importer.d.ts
module-importer.js

./node_modules/@humanwhocodes/module-importer/src:
module-importer.cjs
module-importer.js

./node_modules/@humanwhocodes/retry:
LICENSE
README.md
dist/
package.json

./node_modules/@humanwhocodes/retry/dist:
retrier.cjs
retrier.d.cts
retrier.d.ts
retrier.js
retrier.min.js
retrier.mjs

./node_modules/@isaacs:
cliui/

./node_modules/@isaacs/cliui:
LICENSE.txt
README.md
build/
index.mjs
package.json

./node_modules/@isaacs/cliui/build:
index.cjs
index.d.cts
lib/

./node_modules/@isaacs/cliui/build/lib:
index.js

./node_modules/@jridgewell:
gen-mapping/
resolve-uri/
set-array/
sourcemap-codec/
trace-mapping/

./node_modules/@jridgewell/gen-mapping:
LICENSE
README.md
dist/
package.json

./node_modules/@jridgewell/gen-mapping/dist:
gen-mapping.mjs
gen-mapping.mjs.map
gen-mapping.umd.js
gen-mapping.umd.js.map
types/

./node_modules/@jridgewell/gen-mapping/dist/types:
gen-mapping.d.ts
sourcemap-segment.d.ts
types.d.ts

./node_modules/@jridgewell/resolve-uri:
LICENSE
README.md
dist/
package.json

./node_modules/@jridgewell/resolve-uri/dist:
resolve-uri.mjs
resolve-uri.mjs.map
resolve-uri.umd.js
resolve-uri.umd.js.map
types/

./node_modules/@jridgewell/resolve-uri/dist/types:
resolve-uri.d.ts

./node_modules/@jridgewell/set-array:
LICENSE
README.md
dist/
package.json

./node_modules/@jridgewell/set-array/dist:
set-array.mjs
set-array.mjs.map
set-array.umd.js
set-array.umd.js.map
types/

./node_modules/@jridgewell/set-array/dist/types:
set-array.d.ts

./node_modules/@jridgewell/sourcemap-codec:
LICENSE
README.md
dist/
package.json

./node_modules/@jridgewell/sourcemap-codec/dist:
sourcemap-codec.mjs
sourcemap-codec.mjs.map
sourcemap-codec.umd.js
sourcemap-codec.umd.js.map
types/

./node_modules/@jridgewell/sourcemap-codec/dist/types:
scopes.d.ts
sourcemap-codec.d.ts
strings.d.ts
vlq.d.ts

./node_modules/@jridgewell/trace-mapping:
LICENSE
README.md
dist/
package.json

./node_modules/@jridgewell/trace-mapping/dist:
trace-mapping.mjs
trace-mapping.mjs.map
trace-mapping.umd.js
trace-mapping.umd.js.map
types/

./node_modules/@jridgewell/trace-mapping/dist/types:
any-map.d.ts
binary-search.d.ts
by-source.d.ts
resolve.d.ts
sort.d.ts
sourcemap-segment.d.ts
strip-filename.d.ts
trace-mapping.d.ts
types.d.ts

./node_modules/@nodelib:
fs.scandir/
fs.stat/
fs.walk/

./node_modules/@nodelib/fs.scandir:
LICENSE
README.md
out/
package.json

./node_modules/@nodelib/fs.scandir/out:
adapters/
constants.d.ts
constants.js
index.d.ts
index.js
providers/
settings.d.ts
settings.js
types/
utils/

./node_modules/@nodelib/fs.scandir/out/adapters:
fs.d.ts
fs.js

./node_modules/@nodelib/fs.scandir/out/providers:
async.d.ts
async.js
common.d.ts
common.js
sync.d.ts
sync.js

./node_modules/@nodelib/fs.scandir/out/types:
index.d.ts
index.js

./node_modules/@nodelib/fs.scandir/out/utils:
fs.d.ts
fs.js
index.d.ts
index.js

./node_modules/@nodelib/fs.stat:
LICENSE
README.md
out/
package.json

./node_modules/@nodelib/fs.stat/out:
adapters/
index.d.ts
index.js
providers/
settings.d.ts
settings.js
types/

./node_modules/@nodelib/fs.stat/out/adapters:
fs.d.ts
fs.js

./node_modules/@nodelib/fs.stat/out/providers:
async.d.ts
async.js
sync.d.ts
sync.js

./node_modules/@nodelib/fs.stat/out/types:
index.d.ts
index.js

./node_modules/@nodelib/fs.walk:
LICENSE
README.md
out/
package.json

./node_modules/@nodelib/fs.walk/out:
index.d.ts
index.js
providers/
readers/
settings.d.ts
settings.js
types/

./node_modules/@nodelib/fs.walk/out/providers:
async.d.ts
async.js
index.d.ts
index.js
stream.d.ts
stream.js
sync.d.ts
sync.js

./node_modules/@nodelib/fs.walk/out/readers:
async.d.ts
async.js
common.d.ts
common.js
reader.d.ts
reader.js
sync.d.ts
sync.js

./node_modules/@nodelib/fs.walk/out/types:
index.d.ts
index.js

./node_modules/@pkgjs:
parseargs/

./node_modules/@pkgjs/parseargs:
CHANGELOG.md
LICENSE
README.md
examples/
index.js
internal/
package.json
utils.js

./node_modules/@pkgjs/parseargs/examples:
is-default-value.js
limit-long-syntax.js
negate.js
no-repeated-options.js
ordered-options.mjs
simple-hard-coded.js

./node_modules/@pkgjs/parseargs/internal:
errors.js
primordials.js
util.js
validators.js

./node_modules/@rollup:
rollup-linux-x64-gnu/
rollup-linux-x64-musl/

./node_modules/@rollup/rollup-linux-x64-gnu:
README.md
package.json
rollup.linux-x64-gnu.node

./node_modules/@rollup/rollup-linux-x64-musl:
README.md
package.json
rollup.linux-x64-musl.node

./node_modules/@types:
babel__core/
babel__generator/
babel__template/
babel__traverse/
estree/
file-saver/
json-schema/
node/
prop-types/
raf/
react/
react-dom/

./node_modules/@types/babel__core:
LICENSE
README.md
index.d.ts
package.json

./node_modules/@types/babel__generator:
LICENSE
README.md
index.d.ts
package.json

./node_modules/@types/babel__template:
LICENSE
README.md
index.d.ts
package.json

./node_modules/@types/babel__traverse:
LICENSE
README.md
index.d.ts
package.json

./node_modules/@types/estree:
LICENSE
README.md
flow.d.ts
index.d.ts
package.json

./node_modules/@types/file-saver:
LICENSE
README.md
index.d.ts
package.json

./node_modules/@types/json-schema:
LICENSE
README.md
index.d.ts
package.json

./node_modules/@types/node:
LICENSE
README.md
assert/
assert.d.ts
async_hooks.d.ts
buffer.buffer.d.ts
buffer.d.ts
child_process.d.ts
cluster.d.ts
compatibility/
console.d.ts
constants.d.ts
crypto.d.ts
dgram.d.ts
diagnostics_channel.d.ts
dns/
dns.d.ts
dom-events.d.ts
domain.d.ts
events.d.ts
fs/
fs.d.ts
globals.d.ts
globals.typedarray.d.ts
http.d.ts
http2.d.ts
https.d.ts
index.d.ts
inspector.d.ts
module.d.ts
net.d.ts
os.d.ts
package.json
path.d.ts
perf_hooks.d.ts
process.d.ts
punycode.d.ts
querystring.d.ts
readline/
readline.d.ts
repl.d.ts
sea.d.ts
stream/
stream.d.ts
string_decoder.d.ts
test.d.ts
timers/
timers.d.ts
tls.d.ts
trace_events.d.ts
ts5.6/
tty.d.ts
url.d.ts
util.d.ts
v8.d.ts
vm.d.ts
wasi.d.ts
worker_threads.d.ts
zlib.d.ts

./node_modules/@types/node/assert:
strict.d.ts

./node_modules/@types/node/compatibility:
disposable.d.ts
index.d.ts
indexable.d.ts
iterators.d.ts

./node_modules/@types/node/dns:
promises.d.ts

./node_modules/@types/node/fs:
promises.d.ts

./node_modules/@types/node/readline:
promises.d.ts

./node_modules/@types/node/stream:
consumers.d.ts
promises.d.ts
web.d.ts

./node_modules/@types/node/timers:
promises.d.ts

./node_modules/@types/node/ts5.6:
buffer.buffer.d.ts
globals.typedarray.d.ts
index.d.ts

./node_modules/@types/prop-types:
LICENSE
README.md
index.d.ts
package.json

./node_modules/@types/raf:
LICENSE
README.md
index.d.ts
package.json

./node_modules/@types/react:
LICENSE
README.md
canary.d.ts
experimental.d.ts
global.d.ts
index.d.ts
jsx-dev-runtime.d.ts
jsx-runtime.d.ts
package.json
ts5.0/

./node_modules/@types/react/ts5.0:
canary.d.ts
experimental.d.ts
global.d.ts
index.d.ts
jsx-dev-runtime.d.ts
jsx-runtime.d.ts

./node_modules/@types/react-dom:
LICENSE
README.md
canary.d.ts
client.d.ts
experimental.d.ts
index.d.ts
package.json
server.d.ts
test-utils/

./node_modules/@types/react-dom/test-utils:
index.d.ts

./node_modules/@typescript-eslint:
eslint-plugin/
parser/
scope-manager/
type-utils/
types/
typescript-estree/
utils/
visitor-keys/

./node_modules/@typescript-eslint/eslint-plugin:
LICENSE
README.md
dist/
docs/
index.d.ts
package.json
rules.d.ts

./node_modules/@typescript-eslint/eslint-plugin/dist:
configs/
index.js
index.js.map
rules/
util/

./node_modules/@typescript-eslint/eslint-plugin/dist/configs:
all.js
all.js.map
base.js
base.js.map
disable-type-checked.js
disable-type-checked.js.map
eslint-recommended-raw.js
eslint-recommended-raw.js.map
eslint-recommended.js
eslint-recommended.js.map
recommended-type-checked-only.js
recommended-type-checked-only.js.map
recommended-type-checked.js
recommended-type-checked.js.map
recommended.js
recommended.js.map
strict-type-checked-only.js
strict-type-checked-only.js.map
strict-type-checked.js
strict-type-checked.js.map
strict.js
strict.js.map
stylistic-type-checked-only.js
stylistic-type-checked-only.js.map
stylistic-type-checked.js
stylistic-type-checked.js.map
stylistic.js
stylistic.js.map

./node_modules/@typescript-eslint/eslint-plugin/dist/rules:
adjacent-overload-signatures.js
adjacent-overload-signatures.js.map
array-type.js
array-type.js.map
await-thenable.js
await-thenable.js.map
ban-ts-comment.js
ban-ts-comment.js.map
ban-tslint-comment.js
ban-tslint-comment.js.map
class-literal-property-style.js
class-literal-property-style.js.map
class-methods-use-this.js
class-methods-use-this.js.map
consistent-generic-constructors.js
consistent-generic-constructors.js.map
consistent-indexed-object-style.js
consistent-indexed-object-style.js.map
consistent-return.js
consistent-return.js.map
consistent-type-assertions.js
consistent-type-assertions.js.map
consistent-type-definitions.js
consistent-type-definitions.js.map
consistent-type-exports.js
consistent-type-exports.js.map
consistent-type-imports.js
consistent-type-imports.js.map
default-param-last.js
default-param-last.js.map
dot-notation.js
dot-notation.js.map
enum-utils/
explicit-function-return-type.js
explicit-function-return-type.js.map
explicit-member-accessibility.js
explicit-member-accessibility.js.map
explicit-module-boundary-types.js
explicit-module-boundary-types.js.map
index.js
index.js.map
init-declarations.js
init-declarations.js.map
max-params.js
max-params.js.map
member-ordering.js
member-ordering.js.map
method-signature-style.js
method-signature-style.js.map
naming-convention-utils/
naming-convention.js
naming-convention.js.map
no-array-constructor.js
no-array-constructor.js.map
no-array-delete.js
no-array-delete.js.map
no-base-to-string.js
no-base-to-string.js.map
no-confusing-non-null-assertion.js
no-confusing-non-null-assertion.js.map
no-confusing-void-expression.js
no-confusing-void-expression.js.map
no-deprecated.js
no-deprecated.js.map
no-dupe-class-members.js
no-dupe-class-members.js.map
no-duplicate-enum-values.js
no-duplicate-enum-values.js.map
no-duplicate-type-constituents.js
no-duplicate-type-constituents.js.map
no-dynamic-delete.js
no-dynamic-delete.js.map
no-empty-function.js
no-empty-function.js.map
no-empty-interface.js
no-empty-interface.js.map
no-empty-object-type.js
no-empty-object-type.js.map
no-explicit-any.js
no-explicit-any.js.map
no-extra-non-null-assertion.js
no-extra-non-null-assertion.js.map
no-extraneous-class.js
no-extraneous-class.js.map
no-floating-promises.js
no-floating-promises.js.map
no-for-in-array.js
no-for-in-array.js.map
no-implied-eval.js
no-implied-eval.js.map
no-import-type-side-effects.js
no-import-type-side-effects.js.map
no-inferrable-types.js
no-inferrable-types.js.map
no-invalid-this.js
no-invalid-this.js.map
no-invalid-void-type.js
no-invalid-void-type.js.map
no-loop-func.js
no-loop-func.js.map
no-loss-of-precision.js
no-loss-of-precision.js.map
no-magic-numbers.js
no-magic-numbers.js.map
no-meaningless-void-operator.js
no-meaningless-void-operator.js.map
no-misused-new.js
no-misused-new.js.map
no-misused-promises.js
no-misused-promises.js.map
no-mixed-enums.js
no-mixed-enums.js.map
no-namespace.js
no-namespace.js.map
no-non-null-asserted-nullish-coalescing.js
no-non-null-asserted-nullish-coalescing.js.map
no-non-null-asserted-optional-chain.js
no-non-null-asserted-optional-chain.js.map
no-non-null-assertion.js
no-non-null-assertion.js.map
no-redeclare.js
no-redeclare.js.map
no-redundant-type-constituents.js
no-redundant-type-constituents.js.map
no-require-imports.js
no-require-imports.js.map
no-restricted-imports.js
no-restricted-imports.js.map
no-restricted-types.js
no-restricted-types.js.map
no-shadow.js
no-shadow.js.map
no-this-alias.js
no-this-alias.js.map
no-type-alias.js
no-type-alias.js.map
no-unnecessary-boolean-literal-compare.js
no-unnecessary-boolean-literal-compare.js.map
no-unnecessary-condition.js
no-unnecessary-condition.js.map
no-unnecessary-parameter-property-assignment.js
no-unnecessary-parameter-property-assignment.js.map
no-unnecessary-qualifier.js
no-unnecessary-qualifier.js.map
no-unnecessary-template-expression.js
no-unnecessary-template-expression.js.map
no-unnecessary-type-arguments.js
no-unnecessary-type-arguments.js.map
no-unnecessary-type-assertion.js
no-unnecessary-type-assertion.js.map
no-unnecessary-type-constraint.js
no-unnecessary-type-constraint.js.map
no-unnecessary-type-parameters.js
no-unnecessary-type-parameters.js.map
no-unsafe-argument.js
no-unsafe-argument.js.map
no-unsafe-assignment.js
no-unsafe-assignment.js.map
no-unsafe-call.js
no-unsafe-call.js.map
no-unsafe-declaration-merging.js
no-unsafe-declaration-merging.js.map
no-unsafe-enum-comparison.js
no-unsafe-enum-comparison.js.map
no-unsafe-function-type.js
no-unsafe-function-type.js.map
no-unsafe-member-access.js
no-unsafe-member-access.js.map
no-unsafe-return.js
no-unsafe-return.js.map
no-unsafe-unary-minus.js
no-unsafe-unary-minus.js.map
no-unused-expressions.js
no-unused-expressions.js.map
no-unused-vars.js
no-unused-vars.js.map
no-use-before-define.js
no-use-before-define.js.map
no-useless-constructor.js
no-useless-constructor.js.map
no-useless-empty-export.js
no-useless-empty-export.js.map
no-var-requires.js
no-var-requires.js.map
no-wrapper-object-types.js
no-wrapper-object-types.js.map
non-nullable-type-assertion-style.js
non-nullable-type-assertion-style.js.map
only-throw-error.js
only-throw-error.js.map
parameter-properties.js
parameter-properties.js.map
prefer-as-const.js
prefer-as-const.js.map
prefer-destructuring.js
prefer-destructuring.js.map
prefer-enum-initializers.js
prefer-enum-initializers.js.map
prefer-find.js
prefer-find.js.map
prefer-for-of.js
prefer-for-of.js.map
prefer-function-type.js
prefer-function-type.js.map
prefer-includes.js
prefer-includes.js.map
prefer-literal-enum-member.js
prefer-literal-enum-member.js.map
prefer-namespace-keyword.js
prefer-namespace-keyword.js.map
prefer-nullish-coalescing.js
prefer-nullish-coalescing.js.map
prefer-optional-chain-utils/
prefer-optional-chain.js
prefer-optional-chain.js.map
prefer-promise-reject-errors.js
prefer-promise-reject-errors.js.map
prefer-readonly-parameter-types.js
prefer-readonly-parameter-types.js.map
prefer-readonly.js
prefer-readonly.js.map
prefer-reduce-type-parameter.js
prefer-reduce-type-parameter.js.map
prefer-regexp-exec.js
prefer-regexp-exec.js.map
prefer-return-this-type.js
prefer-return-this-type.js.map
prefer-string-starts-ends-with.js
prefer-string-starts-ends-with.js.map
prefer-ts-expect-error.js
prefer-ts-expect-error.js.map
promise-function-async.js
promise-function-async.js.map
require-array-sort-compare.js
require-array-sort-compare.js.map
require-await.js
require-await.js.map
restrict-plus-operands.js
restrict-plus-operands.js.map
restrict-template-expressions.js
restrict-template-expressions.js.map
return-await.js
return-await.js.map
sort-type-constituents.js
sort-type-constituents.js.map
strict-boolean-expressions.js
strict-boolean-expressions.js.map
switch-exhaustiveness-check.js
switch-exhaustiveness-check.js.map
triple-slash-reference.js
triple-slash-reference.js.map
typedef.js
typedef.js.map
unbound-method.js
unbound-method.js.map
unified-signatures.js
unified-signatures.js.map
use-unknown-in-catch-callback-variable.js
use-unknown-in-catch-callback-variable.js.map

./node_modules/@typescript-eslint/eslint-plugin/dist/rules/enum-utils:
shared.js
shared.js.map

./node_modules/@typescript-eslint/eslint-plugin/dist/rules/naming-convention-utils:
enums.js
enums.js.map
format.js
format.js.map
index.js
index.js.map
parse-options.js
parse-options.js.map
schema.js
schema.js.map
shared.js
shared.js.map
types.js
types.js.map
validator.js
validator.js.map

./node_modules/@typescript-eslint/eslint-plugin/dist/rules/prefer-optional-chain-utils:
PreferOptionalChainOptions.js
PreferOptionalChainOptions.js.map
analyzeChain.js
analyzeChain.js.map
checkNullishAndReport.js
checkNullishAndReport.js.map
compareNodes.js
compareNodes.js.map
gatherLogicalOperands.js
gatherLogicalOperands.js.map

./node_modules/@typescript-eslint/eslint-plugin/dist/util:
assertionFunctionUtils.js
assertionFunctionUtils.js.map
astUtils.js
astUtils.js.map
collectUnusedVariables.js
collectUnusedVariables.js.map
createRule.js
createRule.js.map
escapeRegExp.js
escapeRegExp.js.map
explicitReturnTypeUtils.js
explicitReturnTypeUtils.js.map
getESLintCoreRule.js
getESLintCoreRule.js.map
getFixOrSuggest.js
getFixOrSuggest.js.map
getForStatementHeadLoc.js
getForStatementHeadLoc.js.map
getFunctionHeadLoc.js
getFunctionHeadLoc.js.map
getMemberHeadLoc.js
getMemberHeadLoc.js.map
getOperatorPrecedence.js
getOperatorPrecedence.js.map
getStaticStringValue.js
getStaticStringValue.js.map
getStringLength.js
getStringLength.js.map
getTextWithParentheses.js
getTextWithParentheses.js.map
getThisExpression.js
getThisExpression.js.map
getWrappedCode.js
getWrappedCode.js.map
getWrappingFixer.js
getWrappingFixer.js.map
index.js
index.js.map
isArrayMethodCallWithPredicate.js
isArrayMethodCallWithPredicate.js.map
isAssignee.js
isAssignee.js.map
isNodeEqual.js
isNodeEqual.js.map
isNullLiteral.js
isNullLiteral.js.map
isStartOfExpressionStatement.js
isStartOfExpressionStatement.js.map
isTypeImport.js
isTypeImport.js.map
isUndefinedIdentifier.js
isUndefinedIdentifier.js.map
misc.js
misc.js.map
needsPrecedingSemiColon.js
needsPrecedingSemiColon.js.map
objectIterators.js
objectIterators.js.map
rangeToLoc.js
rangeToLoc.js.map
referenceContainsTypeQuery.js
referenceContainsTypeQuery.js.map
scopeUtils.js
scopeUtils.js.map
types.js
types.js.map

./node_modules/@typescript-eslint/eslint-plugin/docs:
rules/

./node_modules/@typescript-eslint/eslint-plugin/docs/rules:
README.md
TEMPLATE.md
adjacent-overload-signatures.mdx
array-type.mdx
await-thenable.mdx
ban-ts-comment.mdx
ban-tslint-comment.mdx
ban-types.md
block-spacing.md
brace-style.md
camelcase.md
class-literal-property-style.mdx
class-methods-use-this.mdx
comma-dangle.md
comma-spacing.md
consistent-generic-constructors.mdx
consistent-indexed-object-style.mdx
consistent-return.mdx
consistent-type-assertions.mdx
consistent-type-definitions.mdx
consistent-type-exports.mdx
consistent-type-imports.mdx
default-param-last.mdx
dot-notation.mdx
explicit-function-return-type.mdx
explicit-member-accessibility.mdx
explicit-module-boundary-types.mdx
func-call-spacing.md
indent.md
init-declarations.mdx
key-spacing.md
keyword-spacing.md
lines-around-comment.md
lines-between-class-members.md
max-params.mdx
member-delimiter-style.md
member-ordering.mdx
method-signature-style.mdx
naming-convention.mdx
no-array-constructor.mdx
no-array-delete.mdx
no-base-to-string.mdx
no-confusing-non-null-assertion.mdx
no-confusing-void-expression.mdx
no-deprecated.mdx
no-dupe-class-members.mdx
no-duplicate-enum-values.mdx
no-duplicate-imports.mdx
no-duplicate-type-constituents.mdx
no-dynamic-delete.mdx
no-empty-function.mdx
no-empty-interface.mdx
no-empty-object-type.mdx
no-explicit-any.mdx
no-extra-non-null-assertion.mdx
no-extra-parens.md
no-extra-semi.md
no-extraneous-class.mdx
no-floating-promises.mdx
no-for-in-array.mdx
no-implied-eval.mdx
no-import-type-side-effects.mdx
no-inferrable-types.mdx
no-invalid-this.mdx
no-invalid-void-type.mdx
no-loop-func.mdx
no-loss-of-precision.mdx
no-magic-numbers.mdx
no-meaningless-void-operator.mdx
no-misused-new.mdx
no-misused-promises.mdx
no-mixed-enums.mdx
no-namespace.mdx
no-non-null-asserted-nullish-coalescing.mdx
no-non-null-asserted-optional-chain.mdx
no-non-null-assertion.mdx
no-parameter-properties.mdx
no-redeclare.mdx
no-redundant-type-constituents.mdx
no-require-imports.mdx
no-restricted-imports.mdx
no-restricted-types.mdx
no-shadow.mdx
no-this-alias.mdx
no-type-alias.mdx
no-unnecessary-boolean-literal-compare.mdx
no-unnecessary-condition.mdx
no-unnecessary-parameter-property-assignment.mdx
no-unnecessary-qualifier.mdx
no-unnecessary-template-expression.mdx
no-unnecessary-type-arguments.mdx
no-unnecessary-type-assertion.mdx
no-unnecessary-type-constraint.mdx
no-unnecessary-type-parameters.mdx
no-unsafe-argument.mdx
no-unsafe-assignment.mdx
no-unsafe-call.mdx
no-unsafe-declaration-merging.mdx
no-unsafe-enum-comparison.mdx
no-unsafe-function-type.mdx
no-unsafe-member-access.mdx
no-unsafe-return.mdx
no-unsafe-unary-minus.mdx
no-unused-expressions.mdx
no-unused-vars.mdx
no-use-before-define.mdx
no-useless-constructor.mdx
no-useless-empty-export.mdx
no-useless-template-literals.mdx
no-var-requires.mdx
no-wrapper-object-types.mdx
non-nullable-type-assertion-style.mdx
object-curly-spacing.md
only-throw-error.mdx
padding-line-between-statements.md
parameter-properties.mdx
prefer-as-const.mdx
prefer-destructuring.mdx
prefer-enum-initializers.mdx
prefer-find.mdx
prefer-for-of.mdx
prefer-function-type.mdx
prefer-includes.mdx
prefer-literal-enum-member.mdx
prefer-namespace-keyword.mdx
prefer-nullish-coalescing.mdx
prefer-optional-chain.mdx
prefer-promise-reject-errors.mdx
prefer-readonly-parameter-types.mdx
prefer-readonly.mdx
prefer-reduce-type-parameter.mdx
prefer-regexp-exec.mdx
prefer-return-this-type.mdx
prefer-string-starts-ends-with.mdx
prefer-ts-expect-error.mdx
promise-function-async.mdx
quotes.md
require-array-sort-compare.mdx
require-await.mdx
restrict-plus-operands.mdx
restrict-template-expressions.mdx
return-await.mdx
semi.md
sort-type-constituents.mdx
sort-type-union-intersection-members.mdx
space-before-blocks.md
space-before-function-paren.md
space-infix-ops.md
strict-boolean-expressions.mdx
switch-exhaustiveness-check.mdx
triple-slash-reference.mdx
type-annotation-spacing.md
typedef.mdx
unbound-method.mdx
unified-signatures.mdx
use-unknown-in-catch-callback-variable.mdx

./node_modules/@typescript-eslint/parser:
LICENSE
README.md
dist/
package.json

./node_modules/@typescript-eslint/parser/dist:
index.d.ts
index.d.ts.map
index.js
index.js.map
parser.d.ts
parser.d.ts.map
parser.js
parser.js.map

./node_modules/@typescript-eslint/scope-manager:
LICENSE
README.md
dist/
package.json

./node_modules/@typescript-eslint/scope-manager/dist:
ID.d.ts
ID.d.ts.map
ID.js
ID.js.map
ScopeManager.d.ts
ScopeManager.d.ts.map
ScopeManager.js
ScopeManager.js.map
analyze.d.ts
analyze.d.ts.map
analyze.js
analyze.js.map
assert.d.ts
assert.d.ts.map
assert.js
assert.js.map
definition/
index.d.ts
index.d.ts.map
index.js
index.js.map
lib/
referencer/
scope/
variable/

./node_modules/@typescript-eslint/scope-manager/dist/definition:
CatchClauseDefinition.d.ts
CatchClauseDefinition.d.ts.map
CatchClauseDefinition.js
CatchClauseDefinition.js.map
ClassNameDefinition.d.ts
ClassNameDefinition.d.ts.map
ClassNameDefinition.js
ClassNameDefinition.js.map
Definition.d.ts
Definition.d.ts.map
Definition.js
Definition.js.map
DefinitionBase.d.ts
DefinitionBase.d.ts.map
DefinitionBase.js
DefinitionBase.js.map
DefinitionType.d.ts
DefinitionType.d.ts.map
DefinitionType.js
DefinitionType.js.map
FunctionNameDefinition.d.ts
FunctionNameDefinition.d.ts.map
FunctionNameDefinition.js
FunctionNameDefinition.js.map
ImplicitGlobalVariableDefinition.d.ts
ImplicitGlobalVariableDefinition.d.ts.map
ImplicitGlobalVariableDefinition.js
ImplicitGlobalVariableDefinition.js.map
ImportBindingDefinition.d.ts
ImportBindingDefinition.d.ts.map
ImportBindingDefinition.js
ImportBindingDefinition.js.map
ParameterDefinition.d.ts
ParameterDefinition.d.ts.map
ParameterDefinition.js
ParameterDefinition.js.map
TSEnumMemberDefinition.d.ts
TSEnumMemberDefinition.d.ts.map
TSEnumMemberDefinition.js
TSEnumMemberDefinition.js.map
TSEnumNameDefinition.d.ts
TSEnumNameDefinition.d.ts.map
TSEnumNameDefinition.js
TSEnumNameDefinition.js.map
TSModuleNameDefinition.d.ts
TSModuleNameDefinition.d.ts.map
TSModuleNameDefinition.js
TSModuleNameDefinition.js.map
TypeDefinition.d.ts
TypeDefinition.d.ts.map
TypeDefinition.js
TypeDefinition.js.map
VariableDefinition.d.ts
VariableDefinition.d.ts.map
VariableDefinition.js
VariableDefinition.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map

./node_modules/@typescript-eslint/scope-manager/dist/lib:
base-config.d.ts
base-config.d.ts.map
base-config.js
base-config.js.map
decorators.d.ts
decorators.d.ts.map
decorators.js
decorators.js.map
decorators.legacy.d.ts
decorators.legacy.d.ts.map
decorators.legacy.js
decorators.legacy.js.map
dom.asynciterable.d.ts
dom.asynciterable.d.ts.map
dom.asynciterable.js
dom.asynciterable.js.map
dom.d.ts
dom.d.ts.map
dom.iterable.d.ts
dom.iterable.d.ts.map
dom.iterable.js
dom.iterable.js.map
dom.js
dom.js.map
es2015.collection.d.ts
es2015.collection.d.ts.map
es2015.collection.js
es2015.collection.js.map
es2015.core.d.ts
es2015.core.d.ts.map
es2015.core.js
es2015.core.js.map
es2015.d.ts
es2015.d.ts.map
es2015.generator.d.ts
es2015.generator.d.ts.map
es2015.generator.js
es2015.generator.js.map
es2015.iterable.d.ts
es2015.iterable.d.ts.map
es2015.iterable.js
es2015.iterable.js.map
es2015.js
es2015.js.map
es2015.promise.d.ts
es2015.promise.d.ts.map
es2015.promise.js
es2015.promise.js.map
es2015.proxy.d.ts
es2015.proxy.d.ts.map
es2015.proxy.js
es2015.proxy.js.map
es2015.reflect.d.ts
es2015.reflect.d.ts.map
es2015.reflect.js
es2015.reflect.js.map
es2015.symbol.d.ts
es2015.symbol.d.ts.map
es2015.symbol.js
es2015.symbol.js.map
es2015.symbol.wellknown.d.ts
es2015.symbol.wellknown.d.ts.map
es2015.symbol.wellknown.js
es2015.symbol.wellknown.js.map
es2016.array.include.d.ts
es2016.array.include.d.ts.map
es2016.array.include.js
es2016.array.include.js.map
es2016.d.ts
es2016.d.ts.map
es2016.full.d.ts
es2016.full.d.ts.map
es2016.full.js
es2016.full.js.map
es2016.intl.d.ts
es2016.intl.d.ts.map
es2016.intl.js
es2016.intl.js.map
es2016.js
es2016.js.map
es2017.d.ts
es2017.d.ts.map
es2017.date.d.ts
es2017.date.d.ts.map
es2017.date.js
es2017.date.js.map
es2017.full.d.ts
es2017.full.d.ts.map
es2017.full.js
es2017.full.js.map
es2017.intl.d.ts
es2017.intl.d.ts.map
es2017.intl.js
es2017.intl.js.map
es2017.js
es2017.js.map
es2017.object.d.ts
es2017.object.d.ts.map
es2017.object.js
es2017.object.js.map
es2017.sharedmemory.d.ts
es2017.sharedmemory.d.ts.map
es2017.sharedmemory.js
es2017.sharedmemory.js.map
es2017.string.d.ts
es2017.string.d.ts.map
es2017.string.js
es2017.string.js.map
es2017.typedarrays.d.ts
es2017.typedarrays.d.ts.map
es2017.typedarrays.js
es2017.typedarrays.js.map
es2018.asyncgenerator.d.ts
es2018.asyncgenerator.d.ts.map
es2018.asyncgenerator.js
es2018.asyncgenerator.js.map
es2018.asynciterable.d.ts
es2018.asynciterable.d.ts.map
es2018.asynciterable.js
es2018.asynciterable.js.map
es2018.d.ts
es2018.d.ts.map
es2018.full.d.ts
es2018.full.d.ts.map
es2018.full.js
es2018.full.js.map
es2018.intl.d.ts
es2018.intl.d.ts.map
es2018.intl.js
es2018.intl.js.map
es2018.js
es2018.js.map
es2018.promise.d.ts
es2018.promise.d.ts.map
es2018.promise.js
es2018.promise.js.map
es2018.regexp.d.ts
es2018.regexp.d.ts.map
es2018.regexp.js
es2018.regexp.js.map
es2019.array.d.ts
es2019.array.d.ts.map
es2019.array.js
es2019.array.js.map
es2019.d.ts
es2019.d.ts.map
es2019.full.d.ts
es2019.full.d.ts.map
es2019.full.js
es2019.full.js.map
es2019.intl.d.ts
es2019.intl.d.ts.map
es2019.intl.js
es2019.intl.js.map
es2019.js
es2019.js.map
es2019.object.d.ts
es2019.object.d.ts.map
es2019.object.js
es2019.object.js.map
es2019.string.d.ts
es2019.string.d.ts.map
es2019.string.js
es2019.string.js.map
es2019.symbol.d.ts
es2019.symbol.d.ts.map
es2019.symbol.js
es2019.symbol.js.map
es2020.bigint.d.ts
es2020.bigint.d.ts.map
es2020.bigint.js
es2020.bigint.js.map
es2020.d.ts
es2020.d.ts.map
es2020.date.d.ts
es2020.date.d.ts.map
es2020.date.js
es2020.date.js.map
es2020.full.d.ts
es2020.full.d.ts.map
es2020.full.js
es2020.full.js.map
es2020.intl.d.ts
es2020.intl.d.ts.map
es2020.intl.js
es2020.intl.js.map
es2020.js
es2020.js.map
es2020.number.d.ts
es2020.number.d.ts.map
es2020.number.js
es2020.number.js.map
es2020.promise.d.ts
es2020.promise.d.ts.map
es2020.promise.js
es2020.promise.js.map
es2020.sharedmemory.d.ts
es2020.sharedmemory.d.ts.map
es2020.sharedmemory.js
es2020.sharedmemory.js.map
es2020.string.d.ts
es2020.string.d.ts.map
es2020.string.js
es2020.string.js.map
es2020.symbol.wellknown.d.ts
es2020.symbol.wellknown.d.ts.map
es2020.symbol.wellknown.js
es2020.symbol.wellknown.js.map
es2021.d.ts
es2021.d.ts.map
es2021.full.d.ts
es2021.full.d.ts.map
es2021.full.js
es2021.full.js.map
es2021.intl.d.ts
es2021.intl.d.ts.map
es2021.intl.js
es2021.intl.js.map
es2021.js
es2021.js.map
es2021.promise.d.ts
es2021.promise.d.ts.map
es2021.promise.js
es2021.promise.js.map
es2021.string.d.ts
es2021.string.d.ts.map
es2021.string.js
es2021.string.js.map
es2021.weakref.d.ts
es2021.weakref.d.ts.map
es2021.weakref.js
es2021.weakref.js.map
es2022.array.d.ts
es2022.array.d.ts.map
es2022.array.js
es2022.array.js.map
es2022.d.ts
es2022.d.ts.map
es2022.error.d.ts
es2022.error.d.ts.map
es2022.error.js
es2022.error.js.map
es2022.full.d.ts
es2022.full.d.ts.map
es2022.full.js
es2022.full.js.map
es2022.intl.d.ts
es2022.intl.d.ts.map
es2022.intl.js
es2022.intl.js.map
es2022.js
es2022.js.map
es2022.object.d.ts
es2022.object.d.ts.map
es2022.object.js
es2022.object.js.map
es2022.regexp.d.ts
es2022.regexp.d.ts.map
es2022.regexp.js
es2022.regexp.js.map
es2022.sharedmemory.d.ts
es2022.sharedmemory.d.ts.map
es2022.sharedmemory.js
es2022.sharedmemory.js.map
es2022.string.d.ts
es2022.string.d.ts.map
es2022.string.js
es2022.string.js.map
es2023.array.d.ts
es2023.array.d.ts.map
es2023.array.js
es2023.array.js.map
es2023.collection.d.ts
es2023.collection.d.ts.map
es2023.collection.js
es2023.collection.js.map
es2023.d.ts
es2023.d.ts.map
es2023.full.d.ts
es2023.full.d.ts.map
es2023.full.js
es2023.full.js.map
es2023.intl.d.ts
es2023.intl.d.ts.map
es2023.intl.js
es2023.intl.js.map
es2023.js
es2023.js.map
es5.d.ts
es5.d.ts.map
es5.js
es5.js.map
es6.d.ts
es6.d.ts.map
es6.js
es6.js.map
es7.d.ts
es7.d.ts.map
es7.js
es7.js.map
esnext.array.d.ts
esnext.array.d.ts.map
esnext.array.js
esnext.array.js.map
esnext.asynciterable.d.ts
esnext.asynciterable.d.ts.map
esnext.asynciterable.js
esnext.asynciterable.js.map
esnext.bigint.d.ts
esnext.bigint.d.ts.map
esnext.bigint.js
esnext.bigint.js.map
esnext.collection.d.ts
esnext.collection.d.ts.map
esnext.collection.js
esnext.collection.js.map
esnext.d.ts
esnext.d.ts.map
esnext.decorators.d.ts
esnext.decorators.d.ts.map
esnext.decorators.js
esnext.decorators.js.map
esnext.disposable.d.ts
esnext.disposable.d.ts.map
esnext.disposable.js
esnext.disposable.js.map
esnext.full.d.ts
esnext.full.d.ts.map
esnext.full.js
esnext.full.js.map
esnext.intl.d.ts
esnext.intl.d.ts.map
esnext.intl.js
esnext.intl.js.map
esnext.js
esnext.js.map
esnext.object.d.ts
esnext.object.d.ts.map
esnext.object.js
esnext.object.js.map
esnext.promise.d.ts
esnext.promise.d.ts.map
esnext.promise.js
esnext.promise.js.map
esnext.regexp.d.ts
esnext.regexp.d.ts.map
esnext.regexp.js
esnext.regexp.js.map
esnext.string.d.ts
esnext.string.d.ts.map
esnext.string.js
esnext.string.js.map
esnext.symbol.d.ts
esnext.symbol.d.ts.map
esnext.symbol.js
esnext.symbol.js.map
esnext.weakref.d.ts
esnext.weakref.d.ts.map
esnext.weakref.js
esnext.weakref.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
lib.d.ts
lib.d.ts.map
lib.js
lib.js.map
scripthost.d.ts
scripthost.d.ts.map
scripthost.js
scripthost.js.map
webworker.asynciterable.d.ts
webworker.asynciterable.d.ts.map
webworker.asynciterable.js
webworker.asynciterable.js.map
webworker.d.ts
webworker.d.ts.map
webworker.importscripts.d.ts
webworker.importscripts.d.ts.map
webworker.importscripts.js
webworker.importscripts.js.map
webworker.iterable.d.ts
webworker.iterable.d.ts.map
webworker.iterable.js
webworker.iterable.js.map
webworker.js
webworker.js.map

./node_modules/@typescript-eslint/scope-manager/dist/referencer:
ClassVisitor.d.ts
ClassVisitor.d.ts.map
ClassVisitor.js
ClassVisitor.js.map
ExportVisitor.d.ts
ExportVisitor.d.ts.map
ExportVisitor.js
ExportVisitor.js.map
ImportVisitor.d.ts
ImportVisitor.d.ts.map
ImportVisitor.js
ImportVisitor.js.map
PatternVisitor.d.ts
PatternVisitor.d.ts.map
PatternVisitor.js
PatternVisitor.js.map
Reference.d.ts
Reference.d.ts.map
Reference.js
Reference.js.map
Referencer.d.ts
Referencer.d.ts.map
Referencer.js
Referencer.js.map
TypeVisitor.d.ts
TypeVisitor.d.ts.map
TypeVisitor.js
TypeVisitor.js.map
Visitor.d.ts
Visitor.d.ts.map
Visitor.js
Visitor.js.map
VisitorBase.d.ts
VisitorBase.d.ts.map
VisitorBase.js
VisitorBase.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map

./node_modules/@typescript-eslint/scope-manager/dist/scope:
BlockScope.d.ts
BlockScope.d.ts.map
BlockScope.js
BlockScope.js.map
CatchScope.d.ts
CatchScope.d.ts.map
CatchScope.js
CatchScope.js.map
ClassFieldInitializerScope.d.ts
ClassFieldInitializerScope.d.ts.map
ClassFieldInitializerScope.js
ClassFieldInitializerScope.js.map
ClassScope.d.ts
ClassScope.d.ts.map
ClassScope.js
ClassScope.js.map
ClassStaticBlockScope.d.ts
ClassStaticBlockScope.d.ts.map
ClassStaticBlockScope.js
ClassStaticBlockScope.js.map
ConditionalTypeScope.d.ts
ConditionalTypeScope.d.ts.map
ConditionalTypeScope.js
ConditionalTypeScope.js.map
ForScope.d.ts
ForScope.d.ts.map
ForScope.js
ForScope.js.map
FunctionExpressionNameScope.d.ts
FunctionExpressionNameScope.d.ts.map
FunctionExpressionNameScope.js
FunctionExpressionNameScope.js.map
FunctionScope.d.ts
FunctionScope.d.ts.map
FunctionScope.js
FunctionScope.js.map
FunctionTypeScope.d.ts
FunctionTypeScope.d.ts.map
FunctionTypeScope.js
FunctionTypeScope.js.map
GlobalScope.d.ts
GlobalScope.d.ts.map
GlobalScope.js
GlobalScope.js.map
MappedTypeScope.d.ts
MappedTypeScope.d.ts.map
MappedTypeScope.js
MappedTypeScope.js.map
ModuleScope.d.ts
ModuleScope.d.ts.map
ModuleScope.js
ModuleScope.js.map
Scope.d.ts
Scope.d.ts.map
Scope.js
Scope.js.map
ScopeBase.d.ts
ScopeBase.d.ts.map
ScopeBase.js
ScopeBase.js.map
ScopeType.d.ts
ScopeType.d.ts.map
ScopeType.js
ScopeType.js.map
SwitchScope.d.ts
SwitchScope.d.ts.map
SwitchScope.js
SwitchScope.js.map
TSEnumScope.d.ts
TSEnumScope.d.ts.map
TSEnumScope.js
TSEnumScope.js.map
TSModuleScope.d.ts
TSModuleScope.d.ts.map
TSModuleScope.js
TSModuleScope.js.map
TypeScope.d.ts
TypeScope.d.ts.map
TypeScope.js
TypeScope.js.map
WithScope.d.ts
WithScope.d.ts.map
WithScope.js
WithScope.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map

./node_modules/@typescript-eslint/scope-manager/dist/variable:
ESLintScopeVariable.d.ts
ESLintScopeVariable.d.ts.map
ESLintScopeVariable.js
ESLintScopeVariable.js.map
ImplicitLibVariable.d.ts
ImplicitLibVariable.d.ts.map
ImplicitLibVariable.js
ImplicitLibVariable.js.map
Variable.d.ts
Variable.d.ts.map
Variable.js
Variable.js.map
VariableBase.d.ts
VariableBase.d.ts.map
VariableBase.js
VariableBase.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map

./node_modules/@typescript-eslint/type-utils:
LICENSE
README.md
dist/
package.json

./node_modules/@typescript-eslint/type-utils/dist:
TypeOrValueSpecifier.d.ts
TypeOrValueSpecifier.d.ts.map
TypeOrValueSpecifier.js
TypeOrValueSpecifier.js.map
builtinSymbolLikes.d.ts
builtinSymbolLikes.d.ts.map
builtinSymbolLikes.js
builtinSymbolLikes.js.map
containsAllTypesByName.d.ts
containsAllTypesByName.d.ts.map
containsAllTypesByName.js
containsAllTypesByName.js.map
getConstrainedTypeAtLocation.d.ts
getConstrainedTypeAtLocation.d.ts.map
getConstrainedTypeAtLocation.js
getConstrainedTypeAtLocation.js.map
getContextualType.d.ts
getContextualType.d.ts.map
getContextualType.js
getContextualType.js.map
getDeclaration.d.ts
getDeclaration.d.ts.map
getDeclaration.js
getDeclaration.js.map
getSourceFileOfNode.d.ts
getSourceFileOfNode.d.ts.map
getSourceFileOfNode.js
getSourceFileOfNode.js.map
getTypeName.d.ts
getTypeName.d.ts.map
getTypeName.js
getTypeName.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
isSymbolFromDefaultLibrary.d.ts
isSymbolFromDefaultLibrary.d.ts.map
isSymbolFromDefaultLibrary.js
isSymbolFromDefaultLibrary.js.map
isTypeReadonly.d.ts
isTypeReadonly.d.ts.map
isTypeReadonly.js
isTypeReadonly.js.map
isUnsafeAssignment.d.ts
isUnsafeAssignment.d.ts.map
isUnsafeAssignment.js
isUnsafeAssignment.js.map
predicates.d.ts
predicates.d.ts.map
predicates.js
predicates.js.map
propertyTypes.d.ts
propertyTypes.d.ts.map
propertyTypes.js
propertyTypes.js.map
requiresQuoting.d.ts
requiresQuoting.d.ts.map
requiresQuoting.js
requiresQuoting.js.map
typeFlagUtils.d.ts
typeFlagUtils.d.ts.map
typeFlagUtils.js
typeFlagUtils.js.map
typeOrValueSpecifiers/

./node_modules/@typescript-eslint/type-utils/dist/typeOrValueSpecifiers:
specifierNameMatches.d.ts
specifierNameMatches.d.ts.map
specifierNameMatches.js
specifierNameMatches.js.map
typeDeclaredInFile.d.ts
typeDeclaredInFile.d.ts.map
typeDeclaredInFile.js
typeDeclaredInFile.js.map
typeDeclaredInLib.d.ts
typeDeclaredInLib.d.ts.map
typeDeclaredInLib.js
typeDeclaredInLib.js.map
typeDeclaredInPackageDeclarationFile.d.ts
typeDeclaredInPackageDeclarationFile.d.ts.map
typeDeclaredInPackageDeclarationFile.js
typeDeclaredInPackageDeclarationFile.js.map

./node_modules/@typescript-eslint/types:
LICENSE
README.md
dist/
package.json

./node_modules/@typescript-eslint/types/dist:
generated/
index.d.ts
index.d.ts.map
index.js
index.js.map
lib.d.ts
lib.d.ts.map
lib.js
lib.js.map
parser-options.d.ts
parser-options.d.ts.map
parser-options.js
parser-options.js.map
ts-estree.d.ts
ts-estree.d.ts.map
ts-estree.js
ts-estree.js.map

./node_modules/@typescript-eslint/types/dist/generated:
ast-spec.d.ts
ast-spec.d.ts.map
ast-spec.js
ast-spec.js.map

./node_modules/@typescript-eslint/typescript-estree:
LICENSE
README.md
dist/
node_modules/
package.json

./node_modules/@typescript-eslint/typescript-estree/dist:
ast-converter.d.ts
ast-converter.d.ts.map
ast-converter.js
ast-converter.js.map
clear-caches.d.ts
clear-caches.d.ts.map
clear-caches.js
clear-caches.js.map
convert-comments.d.ts
convert-comments.d.ts.map
convert-comments.js
convert-comments.js.map
convert.d.ts
convert.d.ts.map
convert.js
convert.js.map
create-program/
createParserServices.d.ts
createParserServices.d.ts.map
createParserServices.js
createParserServices.js.map
getModifiers.d.ts
getModifiers.d.ts.map
getModifiers.js
getModifiers.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
jsx/
node-utils.d.ts
node-utils.d.ts.map
node-utils.js
node-utils.js.map
parseSettings/
parser-options.d.ts
parser-options.d.ts.map
parser-options.js
parser-options.js.map
parser.d.ts
parser.d.ts.map
parser.js
parser.js.map
semantic-or-syntactic-errors.d.ts
semantic-or-syntactic-errors.d.ts.map
semantic-or-syntactic-errors.js
semantic-or-syntactic-errors.js.map
simple-traverse.d.ts
simple-traverse.d.ts.map
simple-traverse.js
simple-traverse.js.map
source-files.d.ts
source-files.d.ts.map
source-files.js
source-files.js.map
ts-estree/
use-at-your-own-risk.d.ts
use-at-your-own-risk.d.ts.map
use-at-your-own-risk.js
use-at-your-own-risk.js.map
useProgramFromProjectService.d.ts
useProgramFromProjectService.d.ts.map
useProgramFromProjectService.js
useProgramFromProjectService.js.map
version-check.d.ts
version-check.d.ts.map
version-check.js
version-check.js.map
withoutProjectParserOptions.d.ts
withoutProjectParserOptions.d.ts.map
withoutProjectParserOptions.js
withoutProjectParserOptions.js.map

./node_modules/@typescript-eslint/typescript-estree/dist/create-program:
WatchCompilerHostOfConfigFile.d.ts
WatchCompilerHostOfConfigFile.d.ts.map
WatchCompilerHostOfConfigFile.js
WatchCompilerHostOfConfigFile.js.map
createIsolatedProgram.d.ts
createIsolatedProgram.d.ts.map
createIsolatedProgram.js
createIsolatedProgram.js.map
createProjectProgram.d.ts
createProjectProgram.d.ts.map
createProjectProgram.js
createProjectProgram.js.map
createProjectProgramError.d.ts
createProjectProgramError.d.ts.map
createProjectProgramError.js
createProjectProgramError.js.map
createProjectService.d.ts
createProjectService.d.ts.map
createProjectService.js
createProjectService.js.map
createSourceFile.d.ts
createSourceFile.d.ts.map
createSourceFile.js
createSourceFile.js.map
describeFilePath.d.ts
describeFilePath.d.ts.map
describeFilePath.js
describeFilePath.js.map
getParsedConfigFile.d.ts
getParsedConfigFile.d.ts.map
getParsedConfigFile.js
getParsedConfigFile.js.map
getScriptKind.d.ts
getScriptKind.d.ts.map
getScriptKind.js
getScriptKind.js.map
getWatchProgramsForProjects.d.ts
getWatchProgramsForProjects.d.ts.map
getWatchProgramsForProjects.js
getWatchProgramsForProjects.js.map
shared.d.ts
shared.d.ts.map
shared.js
shared.js.map
useProvidedPrograms.d.ts
useProvidedPrograms.d.ts.map
useProvidedPrograms.js
useProvidedPrograms.js.map
validateDefaultProjectForFilesGlob.d.ts
validateDefaultProjectForFilesGlob.d.ts.map
validateDefaultProjectForFilesGlob.js
validateDefaultProjectForFilesGlob.js.map

./node_modules/@typescript-eslint/typescript-estree/dist/jsx:
xhtml-entities.d.ts
xhtml-entities.d.ts.map
xhtml-entities.js
xhtml-entities.js.map

./node_modules/@typescript-eslint/typescript-estree/dist/parseSettings:
ExpiringCache.d.ts
ExpiringCache.d.ts.map
ExpiringCache.js
ExpiringCache.js.map
createParseSettings.d.ts
createParseSettings.d.ts.map
createParseSettings.js
createParseSettings.js.map
getProjectConfigFiles.d.ts
getProjectConfigFiles.d.ts.map
getProjectConfigFiles.js
getProjectConfigFiles.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
inferSingleRun.d.ts
inferSingleRun.d.ts.map
inferSingleRun.js
inferSingleRun.js.map
resolveProjectList.d.ts
resolveProjectList.d.ts.map
resolveProjectList.js
resolveProjectList.js.map
warnAboutTSVersion.d.ts
warnAboutTSVersion.d.ts.map
warnAboutTSVersion.js
warnAboutTSVersion.js.map

./node_modules/@typescript-eslint/typescript-estree/dist/ts-estree:
estree-to-ts-node-types.d.ts
estree-to-ts-node-types.d.ts.map
estree-to-ts-node-types.js
estree-to-ts-node-types.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
ts-nodes.d.ts
ts-nodes.d.ts.map
ts-nodes.js
ts-nodes.js.map

./node_modules/@typescript-eslint/typescript-estree/node_modules:
brace-expansion/
minimatch/
semver/

./node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion:
LICENSE
README.md
index.js
package.json

./node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch:
LICENSE
README.md
dist/
package.json

./node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch/dist:
commonjs/
esm/

./node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch/dist/commonjs:
assert-valid-pattern.d.ts
assert-valid-pattern.d.ts.map
assert-valid-pattern.js
assert-valid-pattern.js.map
ast.d.ts
ast.d.ts.map
ast.js
ast.js.map
brace-expressions.d.ts
brace-expressions.d.ts.map
brace-expressions.js
brace-expressions.js.map
escape.d.ts
escape.d.ts.map
escape.js
escape.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
unescape.d.ts
unescape.d.ts.map
unescape.js
unescape.js.map

./node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch/dist/esm:
assert-valid-pattern.d.ts
assert-valid-pattern.d.ts.map
assert-valid-pattern.js
assert-valid-pattern.js.map
ast.d.ts
ast.d.ts.map
ast.js
ast.js.map
brace-expressions.d.ts
brace-expressions.d.ts.map
brace-expressions.js
brace-expressions.js.map
escape.d.ts
escape.d.ts.map
escape.js
escape.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
unescape.d.ts
unescape.d.ts.map
unescape.js
unescape.js.map

./node_modules/@typescript-eslint/typescript-estree/node_modules/semver:
LICENSE
README.md
bin/
classes/
functions/
index.js
internal/
package.json
preload.js
range.bnf
ranges/

./node_modules/@typescript-eslint/typescript-estree/node_modules/semver/bin:
semver.js*

./node_modules/@typescript-eslint/typescript-estree/node_modules/semver/classes:
comparator.js
index.js
range.js
semver.js

./node_modules/@typescript-eslint/typescript-estree/node_modules/semver/functions:
clean.js
cmp.js
coerce.js
compare-build.js
compare-loose.js
compare.js
diff.js
eq.js
gt.js
gte.js
inc.js
lt.js
lte.js
major.js
minor.js
neq.js
parse.js
patch.js
prerelease.js
rcompare.js
rsort.js
satisfies.js
sort.js
valid.js

./node_modules/@typescript-eslint/typescript-estree/node_modules/semver/internal:
constants.js
debug.js
identifiers.js
lrucache.js
parse-options.js
re.js

./node_modules/@typescript-eslint/typescript-estree/node_modules/semver/ranges:
gtr.js
intersects.js
ltr.js
max-satisfying.js
min-satisfying.js
min-version.js
outside.js
simplify.js
subset.js
to-comparators.js
valid.js

./node_modules/@typescript-eslint/utils:
LICENSE
README.md
dist/
package.json

./node_modules/@typescript-eslint/utils/dist:
ast-utils/
eslint-utils/
index.d.ts
index.d.ts.map
index.js
index.js.map
json-schema.d.ts
json-schema.d.ts.map
json-schema.js
json-schema.js.map
ts-eslint/
ts-estree.d.ts
ts-estree.d.ts.map
ts-estree.js
ts-estree.js.map
ts-utils/

./node_modules/@typescript-eslint/utils/dist/ast-utils:
eslint-utils/
helpers.d.ts
helpers.d.ts.map
helpers.js
helpers.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
misc.d.ts
misc.d.ts.map
misc.js
misc.js.map
predicates.d.ts
predicates.d.ts.map
predicates.js
predicates.js.map

./node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils:
PatternMatcher.d.ts
PatternMatcher.d.ts.map
PatternMatcher.js
PatternMatcher.js.map
ReferenceTracker.d.ts
ReferenceTracker.d.ts.map
ReferenceTracker.js
ReferenceTracker.js.map
astUtilities.d.ts
astUtilities.d.ts.map
astUtilities.js
astUtilities.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
predicates.d.ts
predicates.d.ts.map
predicates.js
predicates.js.map
scopeAnalysis.d.ts
scopeAnalysis.d.ts.map
scopeAnalysis.js
scopeAnalysis.js.map

./node_modules/@typescript-eslint/utils/dist/eslint-utils:
InferTypesFromRule.d.ts
InferTypesFromRule.d.ts.map
InferTypesFromRule.js
InferTypesFromRule.js.map
RuleCreator.d.ts
RuleCreator.d.ts.map
RuleCreator.js
RuleCreator.js.map
applyDefault.d.ts
applyDefault.d.ts.map
applyDefault.js
applyDefault.js.map
deepMerge.d.ts
deepMerge.d.ts.map
deepMerge.js
deepMerge.js.map
getParserServices.d.ts
getParserServices.d.ts.map
getParserServices.js
getParserServices.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
nullThrows.d.ts
nullThrows.d.ts.map
nullThrows.js
nullThrows.js.map
parserSeemsToBeTSESLint.d.ts
parserSeemsToBeTSESLint.d.ts.map
parserSeemsToBeTSESLint.js
parserSeemsToBeTSESLint.js.map

./node_modules/@typescript-eslint/utils/dist/ts-eslint:
AST.d.ts
AST.d.ts.map
AST.js
AST.js.map
Config.d.ts
Config.d.ts.map
Config.js
Config.js.map
ESLint.d.ts
ESLint.d.ts.map
ESLint.js
ESLint.js.map
Linter.d.ts
Linter.d.ts.map
Linter.js
Linter.js.map
Parser.d.ts
Parser.d.ts.map
Parser.js
Parser.js.map
ParserOptions.d.ts
ParserOptions.d.ts.map
ParserOptions.js
ParserOptions.js.map
Processor.d.ts
Processor.d.ts.map
Processor.js
Processor.js.map
Rule.d.ts
Rule.d.ts.map
Rule.js
Rule.js.map
RuleTester.d.ts
RuleTester.d.ts.map
RuleTester.js
RuleTester.js.map
Scope.d.ts
Scope.d.ts.map
Scope.js
Scope.js.map
SourceCode.d.ts
SourceCode.d.ts.map
SourceCode.js
SourceCode.js.map
eslint/
index.d.ts
index.d.ts.map
index.js
index.js.map

./node_modules/@typescript-eslint/utils/dist/ts-eslint/eslint:
ESLintShared.d.ts
ESLintShared.d.ts.map
ESLintShared.js
ESLintShared.js.map
FlatESLint.d.ts
FlatESLint.d.ts.map
FlatESLint.js
FlatESLint.js.map
LegacyESLint.d.ts
LegacyESLint.d.ts.map
LegacyESLint.js
LegacyESLint.js.map

./node_modules/@typescript-eslint/utils/dist/ts-utils:
index.d.ts
index.d.ts.map
index.js
index.js.map
isArray.d.ts
isArray.d.ts.map
isArray.js
isArray.js.map

./node_modules/@typescript-eslint/visitor-keys:
LICENSE
README.md
dist/
node_modules/
package.json

./node_modules/@typescript-eslint/visitor-keys/dist:
get-keys.d.ts
get-keys.d.ts.map
get-keys.js
get-keys.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
visitor-keys.d.ts
visitor-keys.d.ts.map
visitor-keys.js
visitor-keys.js.map

./node_modules/@typescript-eslint/visitor-keys/node_modules:
eslint-visitor-keys/

./node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys:
LICENSE
README.md
dist/
lib/
package.json

./node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys/dist:
eslint-visitor-keys.cjs
eslint-visitor-keys.d.cts
index.d.ts
visitor-keys.d.ts

./node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys/lib:
index.js
visitor-keys.js

./node_modules/@vitejs:
plugin-react/

./node_modules/@vitejs/plugin-react:
LICENSE
README.md
dist/
package.json

./node_modules/@vitejs/plugin-react/dist:
index.cjs
index.d.cts
index.d.mts
index.d.ts
index.mjs
refreshUtils.js

./node_modules/acorn:
CHANGELOG.md
LICENSE
README.md
bin/
dist/
package.json

./node_modules/acorn/bin:
acorn*

./node_modules/acorn/dist:
acorn.d.mts
acorn.d.ts
acorn.js
acorn.mjs
bin.js

./node_modules/acorn-jsx:
LICENSE
README.md
index.d.ts
index.js
package.json
xhtml.js

./node_modules/ajv:
LICENSE
README.md
dist/
lib/
package.json
scripts/

./node_modules/ajv/dist:
ajv.bundle.js
ajv.min.js
ajv.min.js.map

./node_modules/ajv/lib:
ajv.d.ts
ajv.js
cache.js
compile/
data.js
definition_schema.js
dot/
dotjs/
keyword.js
refs/

./node_modules/ajv/lib/compile:
async.js
equal.js
error_classes.js
formats.js
index.js
resolve.js
rules.js
schema_obj.js
ucs2length.js
util.js

./node_modules/ajv/lib/dot:
_limit.jst
_limitItems.jst
_limitLength.jst
_limitProperties.jst
allOf.jst
anyOf.jst
coerce.def
comment.jst
const.jst
contains.jst
custom.jst
defaults.def
definitions.def
dependencies.jst
enum.jst
errors.def
format.jst
if.jst
items.jst
missing.def
multipleOf.jst
not.jst
oneOf.jst
pattern.jst
properties.jst
propertyNames.jst
ref.jst
required.jst
uniqueItems.jst
validate.jst

./node_modules/ajv/lib/dotjs:
README.md
_limit.js
_limitItems.js
_limitLength.js
_limitProperties.js
allOf.js
anyOf.js
comment.js
const.js
contains.js
custom.js
dependencies.js
enum.js
format.js
if.js
index.js
items.js
multipleOf.js
not.js
oneOf.js
pattern.js
properties.js
propertyNames.js
ref.js
required.js
uniqueItems.js
validate.js

./node_modules/ajv/lib/refs:
data.json
json-schema-draft-04.json
json-schema-draft-06.json
json-schema-draft-07.json
json-schema-secure.json

./node_modules/ajv/scripts:
bundle.js
compile-dots.js
info
prepare-tests
publish-built-version
travis-gh-pages

./node_modules/ansi-regex:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/ansi-styles:
index.js
license
package.json
readme.md

./node_modules/any-promise:
LICENSE
README.md
implementation.d.ts
implementation.js
index.d.ts
index.js
loader.js
optional.js
package.json
register/
register-shim.js
register.d.ts
register.js

./node_modules/any-promise/register:
bluebird.d.ts
bluebird.js
es6-promise.d.ts
es6-promise.js
lie.d.ts
lie.js
native-promise-only.d.ts
native-promise-only.js
pinkie.d.ts
pinkie.js
promise.d.ts
promise.js
q.d.ts
q.js
rsvp.d.ts
rsvp.js
vow.d.ts
vow.js
when.d.ts
when.js

./node_modules/anymatch:
LICENSE
README.md
index.d.ts
index.js
package.json

./node_modules/arg:
LICENSE.md
README.md
index.d.ts
index.js
package.json

./node_modules/argparse:
CHANGELOG.md
LICENSE
README.md
argparse.js
lib/
package.json

./node_modules/argparse/lib:
sub.js
textwrap.js

./node_modules/atob:
LICENSE
LICENSE.DOCS
README.md
bin/
bower.json
browser-atob.js
node-atob.js
package.json
test.js

./node_modules/atob/bin:
atob.js*

./node_modules/autoprefixer:
LICENSE
README.md
bin/
data/
lib/
package.json

./node_modules/autoprefixer/bin:
autoprefixer*

./node_modules/autoprefixer/data:
prefixes.js

./node_modules/autoprefixer/lib:
at-rule.js
autoprefixer.d.ts
autoprefixer.js
brackets.js
browsers.js
declaration.js
hacks/
info.js
old-selector.js
old-value.js
prefixer.js
prefixes.js
processor.js
resolution.js
selector.js
supports.js
transition.js
utils.js
value.js
vendor.js

./node_modules/autoprefixer/lib/hacks:
align-content.js
align-items.js
align-self.js
animation.js
appearance.js
autofill.js
backdrop-filter.js
background-clip.js
background-size.js
block-logical.js
border-image.js
border-radius.js
break-props.js
cross-fade.js
display-flex.js
display-grid.js
file-selector-button.js
filter-value.js
filter.js
flex-basis.js
flex-direction.js
flex-flow.js
flex-grow.js
flex-shrink.js
flex-spec.js
flex-wrap.js
flex.js
fullscreen.js
gradient.js
grid-area.js
grid-column-align.js
grid-end.js
grid-row-align.js
grid-row-column.js
grid-rows-columns.js
grid-start.js
grid-template-areas.js
grid-template.js
grid-utils.js
image-rendering.js
image-set.js
inline-logical.js
intrinsic.js
justify-content.js
mask-border.js
mask-composite.js
order.js
overscroll-behavior.js
pixelated.js
place-self.js
placeholder-shown.js
placeholder.js
print-color-adjust.js
text-decoration-skip-ink.js
text-decoration.js
text-emphasis-position.js
transform-decl.js
user-select.js
writing-mode.js

./node_modules/balanced-match:
LICENSE.md
README.md
index.js
package.json

./node_modules/base64-arraybuffer:
CHANGELOG.md
LICENSE
README.md
dist/
package.json
rollup.config.ts

./node_modules/base64-arraybuffer/dist:
base64-arraybuffer.es5.js
base64-arraybuffer.es5.js.map
base64-arraybuffer.umd.js
base64-arraybuffer.umd.js.map
lib/
types/

./node_modules/base64-arraybuffer/dist/lib:
index.js
index.js.map

./node_modules/base64-arraybuffer/dist/types:
index.d.ts

./node_modules/binary-extensions:
binary-extensions.json
binary-extensions.json.d.ts
index.d.ts
index.js
license
package.json
readme.md

./node_modules/brace-expansion:
LICENSE
README.md
index.js
package.json

./node_modules/braces:
LICENSE
README.md
index.js
lib/
package.json

./node_modules/braces/lib:
compile.js
constants.js
expand.js
parse.js
stringify.js
utils.js

./node_modules/browserslist:
LICENSE
README.md
browser.js
cli.js*
error.d.ts
error.js
index.d.ts
index.js
node.js
package.json
parse.js

./node_modules/btoa:
LICENSE
LICENSE.DOCS
README.md
bin/
index.js
package.json
test.js

./node_modules/btoa/bin:
btoa.js*

./node_modules/callsites:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/camelcase-css:
README.md
index-es5.js
index.js
license
package.json

./node_modules/caniuse-lite:
LICENSE
README.md
data/
dist/
package.json

./node_modules/caniuse-lite/data:
agents.js
browserVersions.js
browsers.js
features/
features.js
regions/

./node_modules/caniuse-lite/data/features:
aac.js
abortcontroller.js
ac3-ec3.js
accelerometer.js
addeventlistener.js
alternate-stylesheet.js
ambient-light.js
apng.js
array-find-index.js
array-find.js
array-flat.js
array-includes.js
arrow-functions.js
asmjs.js
async-clipboard.js
async-functions.js
atob-btoa.js
audio-api.js
audio.js
audiotracks.js
autofocus.js
auxclick.js
av1.js
avif.js
background-attachment.js
background-clip-text.js
background-img-opts.js
background-position-x-y.js
background-repeat-round-space.js
background-sync.js
battery-status.js
beacon.js
beforeafterprint.js
bigint.js
blobbuilder.js
bloburls.js
border-image.js
border-radius.js
broadcastchannel.js
brotli.js
calc.js
canvas-blending.js
canvas-text.js
canvas.js
ch-unit.js
chacha20-poly1305.js
channel-messaging.js
childnode-remove.js
classlist.js
client-hints-dpr-width-viewport.js
clipboard.js
colr-v1.js
colr.js
comparedocumentposition.js
console-basic.js
console-time.js
const.js
constraint-validation.js
contenteditable.js
contentsecuritypolicy.js
contentsecuritypolicy2.js
cookie-store-api.js
cors.js
createimagebitmap.js
credential-management.js
cryptography.js
css-all.js
css-anchor-positioning.js
css-animation.js
css-any-link.js
css-appearance.js
css-at-counter-style.js
css-autofill.js
css-backdrop-filter.js
css-background-offsets.js
css-backgroundblendmode.js
css-boxdecorationbreak.js
css-boxshadow.js
css-canvas.js
css-caret-color.js
css-cascade-layers.js
css-cascade-scope.js
css-case-insensitive.js
css-clip-path.js
css-color-adjust.js
css-color-function.js
css-conic-gradients.js
css-container-queries-style.js
css-container-queries.js
css-container-query-units.js
css-containment.js
css-content-visibility.js
css-counters.js
css-crisp-edges.js
css-cross-fade.js
css-default-pseudo.js
css-descendant-gtgt.js
css-deviceadaptation.js
css-dir-pseudo.js
css-display-contents.js
css-element-function.js
css-env-function.js
css-exclusions.js
css-featurequeries.js
css-file-selector-button.js
css-filter-function.js
css-filters.js
css-first-letter.js
css-first-line.js
css-fixed.js
css-focus-visible.js
css-focus-within.js
css-font-palette.js
css-font-rendering-controls.js
css-font-stretch.js
css-gencontent.js
css-gradients.js
css-grid-animation.js
css-grid.js
css-hanging-punctuation.js
css-has.js
css-hyphens.js
css-image-orientation.js
css-image-set.js
css-in-out-of-range.js
css-indeterminate-pseudo.js
css-initial-letter.js
css-initial-value.js
css-lch-lab.js
css-letter-spacing.js
css-line-clamp.js
css-logical-props.js
css-marker-pseudo.js
css-masks.js
css-matches-pseudo.js
css-math-functions.js
css-media-interaction.js
css-media-range-syntax.js
css-media-resolution.js
css-media-scripting.js
css-mediaqueries.js
css-mixblendmode.js
css-module-scripts.js
css-motion-paths.js
css-namespaces.js
css-nesting.js
css-not-sel-list.js
css-nth-child-of.js
css-opacity.js
css-optional-pseudo.js
css-overflow-anchor.js
css-overflow-overlay.js
css-overflow.js
css-overscroll-behavior.js
css-page-break.js
css-paged-media.js
css-paint-api.js
css-placeholder-shown.js
css-placeholder.js
css-print-color-adjust.js
css-read-only-write.js
css-rebeccapurple.js
css-reflections.js
css-regions.js
css-relative-colors.js
css-repeating-gradients.js
css-resize.js
css-revert-value.js
css-rrggbbaa.js
css-scroll-behavior.js
css-scrollbar.js
css-sel2.js
css-sel3.js
css-selection.js
css-shapes.js
css-snappoints.js
css-sticky.js
css-subgrid.js
css-supports-api.js
css-table.js
css-text-align-last.js
css-text-box-trim.js
css-text-indent.js
css-text-justify.js
css-text-orientation.js
css-text-spacing.js
css-text-wrap-balance.js
css-textshadow.js
css-touch-action.js
css-transitions.js
css-unicode-bidi.js
css-unset-value.js
css-variables.js
css-when-else.js
css-widows-orphans.js
css-width-stretch.js
css-writing-mode.js
css-zoom.js
css3-attr.js
css3-boxsizing.js
css3-colors.js
css3-cursors-grab.js
css3-cursors-newer.js
css3-cursors.js
css3-tabsize.js
currentcolor.js
custom-elements.js
custom-elementsv1.js
customevent.js
datalist.js
dataset.js
datauri.js
date-tolocaledatestring.js
declarative-shadow-dom.js
decorators.js
details.js
deviceorientation.js
devicepixelratio.js
dialog.js
dispatchevent.js
dnssec.js
do-not-track.js
document-currentscript.js
document-evaluate-xpath.js
document-execcommand.js
document-policy.js
document-scrollingelement.js
documenthead.js
dom-manip-convenience.js
dom-range.js
domcontentloaded.js
dommatrix.js
download.js
dragndrop.js
element-closest.js
element-from-point.js
element-scroll-methods.js
eme.js
eot.js
es5.js
es6-class.js
es6-generators.js
es6-module-dynamic-import.js
es6-module.js
es6-number.js
es6-string-includes.js
es6.js
eventsource.js
extended-system-fonts.js
feature-policy.js
fetch.js
fieldset-disabled.js
fileapi.js
filereader.js
filereadersync.js
filesystem.js
flac.js
flexbox-gap.js
flexbox.js
flow-root.js
focusin-focusout-events.js
font-family-system-ui.js
font-feature.js
font-kerning.js
font-loading.js
font-size-adjust.js
font-smooth.js
font-unicode-range.js
font-variant-alternates.js
font-variant-numeric.js
fontface.js
form-attribute.js
form-submit-attributes.js
form-validation.js
forms.js
fullscreen.js
gamepad.js
geolocation.js
getboundingclientrect.js
getcomputedstyle.js
getelementsbyclassname.js
getrandomvalues.js
gyroscope.js
hardwareconcurrency.js
hashchange.js
heif.js
hevc.js
hidden.js
high-resolution-time.js
history.js
html-media-capture.js
html5semantic.js
http-live-streaming.js
http2.js
http3.js
iframe-sandbox.js
iframe-seamless.js
iframe-srcdoc.js
imagecapture.js
ime.js
img-naturalwidth-naturalheight.js
import-maps.js
imports.js
indeterminate-checkbox.js
indexeddb.js
indexeddb2.js
inline-block.js
innertext.js
input-autocomplete-onoff.js
input-color.js
input-datetime.js
input-email-tel-url.js
input-event.js
input-file-accept.js
input-file-directory.js
input-file-multiple.js
input-inputmode.js
input-minlength.js
input-number.js
input-pattern.js
input-placeholder.js
input-range.js
input-search.js
input-selection.js
insert-adjacent.js
insertadjacenthtml.js
internationalization.js
intersectionobserver-v2.js
intersectionobserver.js
intl-pluralrules.js
intrinsic-width.js
jpeg2000.js
jpegxl.js
jpegxr.js
js-regexp-lookbehind.js
json.js
justify-content-space-evenly.js
kerning-pairs-ligatures.js
keyboardevent-charcode.js
keyboardevent-code.js
keyboardevent-getmodifierstate.js
keyboardevent-key.js
keyboardevent-location.js
keyboardevent-which.js
lazyload.js
let.js
link-icon-png.js
link-icon-svg.js
link-rel-dns-prefetch.js
link-rel-modulepreload.js
link-rel-preconnect.js
link-rel-prefetch.js
link-rel-preload.js
link-rel-prerender.js
loading-lazy-attr.js
localecompare.js
magnetometer.js
matchesselector.js
matchmedia.js
mathml.js
maxlength.js
mdn-css-backdrop-pseudo-element.js
mdn-css-unicode-bidi-isolate-override.js
mdn-css-unicode-bidi-isolate.js
mdn-css-unicode-bidi-plaintext.js
mdn-text-decoration-color.js
mdn-text-decoration-line.js
mdn-text-decoration-shorthand.js
mdn-text-decoration-style.js
media-fragments.js
mediacapture-fromelement.js
mediarecorder.js
mediasource.js
menu.js
meta-theme-color.js
meter.js
midi.js
minmaxwh.js
mp3.js
mpeg-dash.js
mpeg4.js
multibackgrounds.js
multicolumn.js
mutation-events.js
mutationobserver.js
namevalue-storage.js
native-filesystem-api.js
nav-timing.js
netinfo.js
notifications.js
object-entries.js
object-fit.js
object-observe.js
object-values.js
objectrtc.js
offline-apps.js
offscreencanvas.js
ogg-vorbis.js
ogv.js
ol-reversed.js
once-event-listener.js
online-status.js
opus.js
orientation-sensor.js
outline.js
pad-start-end.js
page-transition-events.js
pagevisibility.js
passive-event-listener.js
passkeys.js
passwordrules.js
path2d.js
payment-request.js
pdf-viewer.js
permissions-api.js
permissions-policy.js
picture-in-picture.js
picture.js
ping.js
png-alpha.js
pointer-events.js
pointer.js
pointerlock.js
portals.js
prefers-color-scheme.js
prefers-reduced-motion.js
progress.js
promise-finally.js
promises.js
proximity.js
proxy.js
publickeypinning.js
push-api.js
queryselector.js
readonly-attr.js
referrer-policy.js
registerprotocolhandler.js
rel-noopener.js
rel-noreferrer.js
rellist.js
rem.js
requestanimationframe.js
requestidlecallback.js
resizeobserver.js
resource-timing.js
rest-parameters.js
rtcpeerconnection.js
ruby.js
run-in.js
same-site-cookie-attribute.js
screen-orientation.js
script-async.js
script-defer.js
scrollintoview.js
scrollintoviewifneeded.js
sdch.js
selection-api.js
selectlist.js
server-timing.js
serviceworkers.js
setimmediate.js
shadowdom.js
shadowdomv1.js
sharedarraybuffer.js
sharedworkers.js
sni.js
spdy.js
speech-recognition.js
speech-synthesis.js
spellcheck-attribute.js
sql-storage.js
srcset.js
stream.js
streams.js
stricttransportsecurity.js
style-scoped.js
subresource-bundling.js
subresource-integrity.js
svg-css.js
svg-filters.js
svg-fonts.js
svg-fragment.js
svg-html.js
svg-html5.js
svg-img.js
svg-smil.js
svg.js
sxg.js
tabindex-attr.js
template-literals.js
template.js
temporal.js
testfeat.js
text-decoration.js
text-emphasis.js
text-overflow.js
text-size-adjust.js
text-stroke.js
textcontent.js
textencoder.js
tls1-1.js
tls1-2.js
tls1-3.js
touch.js
transforms2d.js
transforms3d.js
trusted-types.js
ttf.js
typedarrays.js
u2f.js
unhandledrejection.js
upgradeinsecurerequests.js
url-scroll-to-text-fragment.js
url.js
urlsearchparams.js
use-strict.js
user-select-none.js
user-timing.js
variable-fonts.js
vector-effect.js
vibration.js
video.js
videotracks.js
view-transitions.js
viewport-unit-variants.js
viewport-units.js
wai-aria.js
wake-lock.js
wasm-bigint.js
wasm-bulk-memory.js
wasm-extended-const.js
wasm-gc.js
wasm-multi-memory.js
wasm-multi-value.js
wasm-mutable-globals.js
wasm-nontrapping-fptoint.js
wasm-reference-types.js
wasm-relaxed-simd.js
wasm-signext.js
wasm-simd.js
wasm-tail-calls.js
wasm-threads.js
wasm.js
wav.js
wbr-element.js
web-animation.js
web-app-manifest.js
web-bluetooth.js
web-serial.js
web-share.js
webauthn.js
webcodecs.js
webgl.js
webgl2.js
webgpu.js
webhid.js
webkit-user-drag.js
webm.js
webnfc.js
webp.js
websockets.js
webtransport.js
webusb.js
webvr.js
webvtt.js
webworkers.js
webxr.js
will-change.js
woff.js
woff2.js
word-break.js
wordwrap.js
x-doc-messaging.js
x-frame-options.js
xhr2.js
xhtml.js
xhtmlsmil.js
xml-serializer.js
zstd.js

./node_modules/caniuse-lite/data/regions:
AD.js
AE.js
AF.js
AG.js
AI.js
AL.js
AM.js
AO.js
AR.js
AS.js
AT.js
AU.js
AW.js
AX.js
AZ.js
BA.js
BB.js
BD.js
BE.js
BF.js
BG.js
BH.js
BI.js
BJ.js
BM.js
BN.js
BO.js
BR.js
BS.js
BT.js
BW.js
BY.js
BZ.js
CA.js
CD.js
CF.js
CG.js
CH.js
CI.js
CK.js
CL.js
CM.js
CN.js
CO.js
CR.js
CU.js
CV.js
CX.js
CY.js
CZ.js
DE.js
DJ.js
DK.js
DM.js
DO.js
DZ.js
EC.js
EE.js
EG.js
ER.js
ES.js
ET.js
FI.js
FJ.js
FK.js
FM.js
FO.js
FR.js
GA.js
GB.js
GD.js
GE.js
GF.js
GG.js
GH.js
GI.js
GL.js
GM.js
GN.js
GP.js
GQ.js
GR.js
GT.js
GU.js
GW.js
GY.js
HK.js
HN.js
HR.js
HT.js
HU.js
ID.js
IE.js
IL.js
IM.js
IN.js
IQ.js
IR.js
IS.js
IT.js
JE.js
JM.js
JO.js
JP.js
KE.js
KG.js
KH.js
KI.js
KM.js
KN.js
KP.js
KR.js
KW.js
KY.js
KZ.js
LA.js
LB.js
LC.js
LI.js
LK.js
LR.js
LS.js
LT.js
LU.js
LV.js
LY.js
MA.js
MC.js
MD.js
ME.js
MG.js
MH.js
MK.js
ML.js
MM.js
MN.js
MO.js
MP.js
MQ.js
MR.js
MS.js
MT.js
MU.js
MV.js
MW.js
MX.js
MY.js
MZ.js
NA.js
NC.js
NE.js
NF.js
NG.js
NI.js
NL.js
NO.js
NP.js
NR.js
NU.js
NZ.js
OM.js
PA.js
PE.js
PF.js
PG.js
PH.js
PK.js
PL.js
PM.js
PN.js
PR.js
PS.js
PT.js
PW.js
PY.js
QA.js
RE.js
RO.js
RS.js
RU.js
RW.js
SA.js
SB.js
SC.js
SD.js
SE.js
SG.js
SH.js
SI.js
SK.js
SL.js
SM.js
SN.js
SO.js
SR.js
ST.js
SV.js
SY.js
SZ.js
TC.js
TD.js
TG.js
TH.js
TJ.js
TK.js
TL.js
TM.js
TN.js
TO.js
TR.js
TT.js
TV.js
TW.js
TZ.js
UA.js
UG.js
US.js
UY.js
UZ.js
VA.js
VC.js
VE.js
VG.js
VI.js
VN.js
VU.js
WF.js
WS.js
YE.js
YT.js
ZA.js
ZM.js
ZW.js
alt-af.js
alt-an.js
alt-as.js
alt-eu.js
alt-na.js
alt-oc.js
alt-sa.js
alt-ww.js

./node_modules/caniuse-lite/dist:
lib/
unpacker/

./node_modules/caniuse-lite/dist/lib:
statuses.js
supported.js

./node_modules/caniuse-lite/dist/unpacker:
agents.js
browserVersions.js
browsers.js
feature.js
features.js
index.js
region.js

./node_modules/canvg:
LICENSE
README.md
lib/
node_modules/
package.json

./node_modules/canvg/lib:
BoundingBox.d.ts
BoundingBox.d.ts.map
Canvg.d.ts
Canvg.d.ts.map
Document/
Font.d.ts
Font.d.ts.map
Mouse.d.ts
Mouse.d.ts.map
Parser.d.ts
Parser.d.ts.map
PathParser.d.ts
PathParser.d.ts.map
Point.d.ts
Point.d.ts.map
Property.d.ts
Property.d.ts.map
SVGFontLoader.d.ts
SVGFontLoader.d.ts.map
Screen.d.ts
Screen.d.ts.map
Transform/
ViewPort.d.ts
ViewPort.d.ts.map
index.babel.js
index.cjs
index.d.ts
index.d.ts.map
index.es.js
index.js
presets/
types.d.ts
types.d.ts.map
umd.js
umd.js.map
util/

./node_modules/canvg/lib/Document:
AElement.d.ts
AElement.d.ts.map
AnimateColorElement.d.ts
AnimateColorElement.d.ts.map
AnimateElement.d.ts
AnimateElement.d.ts.map
AnimateTransformElement.d.ts
AnimateTransformElement.d.ts.map
CircleElement.d.ts
CircleElement.d.ts.map
ClipPathElement.d.ts
ClipPathElement.d.ts.map
DefsElement.d.ts
DefsElement.d.ts.map
DescElement.d.ts
DescElement.d.ts.map
Document.d.ts
Document.d.ts.map
Element.d.ts
Element.d.ts.map
EllipseElement.d.ts
EllipseElement.d.ts.map
FeColorMatrixElement.d.ts
FeColorMatrixElement.d.ts.map
FeCompositeElement.d.ts
FeCompositeElement.d.ts.map
FeDropShadowElement.d.ts
FeDropShadowElement.d.ts.map
FeGaussianBlurElement.d.ts
FeGaussianBlurElement.d.ts.map
FeMorphologyElement.d.ts
FeMorphologyElement.d.ts.map
FilterElement.d.ts
FilterElement.d.ts.map
FontElement.d.ts
FontElement.d.ts.map
FontFaceElement.d.ts
FontFaceElement.d.ts.map
GElement.d.ts
GElement.d.ts.map
GlyphElement.d.ts
GlyphElement.d.ts.map
GradientElement.d.ts
GradientElement.d.ts.map
ImageElement.d.ts
ImageElement.d.ts.map
LineElement.d.ts
LineElement.d.ts.map
LinearGradientElement.d.ts
LinearGradientElement.d.ts.map
MarkerElement.d.ts
MarkerElement.d.ts.map
MaskElement.d.ts
MaskElement.d.ts.map
MissingGlyphElement.d.ts
MissingGlyphElement.d.ts.map
PathElement.d.ts
PathElement.d.ts.map
PatternElement.d.ts
PatternElement.d.ts.map
PolygonElement.d.ts
PolygonElement.d.ts.map
PolylineElement.d.ts
PolylineElement.d.ts.map
RadialGradientElement.d.ts
RadialGradientElement.d.ts.map
RectElement.d.ts
RectElement.d.ts.map
RenderedElement.d.ts
RenderedElement.d.ts.map
SVGElement.d.ts
SVGElement.d.ts.map
StopElement.d.ts
StopElement.d.ts.map
StyleElement.d.ts
StyleElement.d.ts.map
SymbolElement.d.ts
SymbolElement.d.ts.map
TRefElement.d.ts
TRefElement.d.ts.map
TSpanElement.d.ts
TSpanElement.d.ts.map
TextElement.d.ts
TextElement.d.ts.map
TextNode.d.ts
TextNode.d.ts.map
TextPathElement.d.ts
TextPathElement.d.ts.map
TitleElement.d.ts
TitleElement.d.ts.map
UnknownElement.d.ts
UnknownElement.d.ts.map
UseElement.d.ts
UseElement.d.ts.map
elements.d.ts
elements.d.ts.map
index.d.ts
index.d.ts.map

./node_modules/canvg/lib/Transform:
Matrix.d.ts
Matrix.d.ts.map
Rotate.d.ts
Rotate.d.ts.map
Scale.d.ts
Scale.d.ts.map
Skew.d.ts
Skew.d.ts.map
SkewX.d.ts
SkewX.d.ts.map
SkewY.d.ts
SkewY.d.ts.map
Transform.d.ts
Transform.d.ts.map
Translate.d.ts
Translate.d.ts.map
index.d.ts
index.d.ts.map
types.d.ts
types.d.ts.map

./node_modules/canvg/lib/presets:
index.d.ts
index.d.ts.map
node.d.ts
node.d.ts.map
offscreen.d.ts
offscreen.d.ts.map
types.d.ts
types.d.ts.map

./node_modules/canvg/lib/util:
debug.d.ts
debug.d.ts.map
index.d.ts
index.d.ts.map
math.d.ts
math.d.ts.map
string.d.ts
string.d.ts.map
styles.d.ts
styles.d.ts.map

./node_modules/canvg/node_modules:
regenerator-runtime/

./node_modules/canvg/node_modules/regenerator-runtime:
LICENSE
README.md
package.json
path.js
runtime.js

./node_modules/chalk:
index.js
index.js.flow
license
package.json
readme.md
templates.js
types/

./node_modules/chalk/types:
index.d.ts

./node_modules/chokidar:
LICENSE
README.md
index.js
lib/
node_modules/
package.json
types/

./node_modules/chokidar/lib:
constants.js
fsevents-handler.js
nodefs-handler.js

./node_modules/chokidar/node_modules:
glob-parent/

./node_modules/chokidar/node_modules/glob-parent:
CHANGELOG.md
LICENSE
README.md
index.js
package.json

./node_modules/chokidar/types:
index.d.ts

./node_modules/color-convert:
CHANGELOG.md
LICENSE
README.md
conversions.js
index.js
package.json
route.js

./node_modules/color-name:
LICENSE
README.md
index.js
package.json
test.js

./node_modules/commander:
CHANGELOG.md
LICENSE
Readme.md
index.js
package.json
typings/

./node_modules/commander/typings:
index.d.ts

./node_modules/concat-map:
LICENSE
README.markdown
example/
index.js
package.json
test/

./node_modules/concat-map/example:
map.js

./node_modules/concat-map/test:
map.js

./node_modules/convert-source-map:
LICENSE
README.md
index.js
package.json

./node_modules/core-js:
LICENSE
README.md
actual/
configurator.js
es/
features/
full/
index.js
internals/
modules/
package.json
postinstall.js
proposals/
stable/
stage/
web/

./node_modules/core-js/actual:
README.md
aggregate-error.js
array/
array-buffer/
async-disposable-stack/
async-iterator/
atob.js
btoa.js
clear-immediate.js
data-view/
date/
disposable-stack/
dom-collections/
dom-exception/
error/
escape.js
function/
get-iterator-method.js
get-iterator.js
global-this.js
index.js
instance/
is-iterable.js
iterator/
json/
map/
math/
number/
object/
parse-float.js
parse-int.js
promise/
queue-microtask.js
reflect/
regexp/
self.js
set/
set-immediate.js
set-interval.js
set-timeout.js
string/
structured-clone.js
suppressed-error.js
symbol/
typed-array/
unescape.js
url/
url-search-params/
weak-map/
weak-set/

./node_modules/core-js/actual/array:
at.js
concat.js
copy-within.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flat-map.js
flat.js
for-each.js
from-async.js
from.js
group-by-to-map.js
group-by.js
group-to-map.js
group.js
includes.js
index-of.js
index.js
is-array.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
of.js
push.js
reduce-right.js
reduce.js
reverse.js
slice.js
some.js
sort.js
splice.js
to-reversed.js
to-sorted.js
to-spliced.js
unshift.js
values.js
virtual/
with.js

./node_modules/core-js/actual/array/virtual:
at.js
concat.js
copy-within.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flat-map.js
flat.js
for-each.js
group-by-to-map.js
group-by.js
group-to-map.js
group.js
includes.js
index-of.js
index.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
push.js
reduce-right.js
reduce.js
reverse.js
slice.js
some.js
sort.js
splice.js
to-reversed.js
to-sorted.js
to-spliced.js
unshift.js
values.js
with.js

./node_modules/core-js/actual/array-buffer:
constructor.js
detached.js
index.js
is-view.js
slice.js
transfer-to-fixed-length.js
transfer.js

./node_modules/core-js/actual/async-disposable-stack:
constructor.js
index.js

./node_modules/core-js/actual/async-iterator:
async-dispose.js
drop.js
every.js
filter.js
find.js
flat-map.js
for-each.js
from.js
index.js
map.js
reduce.js
some.js
take.js
to-array.js

./node_modules/core-js/actual/data-view:
get-float16.js
index.js
set-float16.js

./node_modules/core-js/actual/date:
get-year.js
index.js
now.js
set-year.js
to-gmt-string.js
to-iso-string.js
to-json.js
to-primitive.js
to-string.js

./node_modules/core-js/actual/disposable-stack:
constructor.js
index.js

./node_modules/core-js/actual/dom-collections:
for-each.js
index.js
iterator.js

./node_modules/core-js/actual/dom-exception:
constructor.js
index.js
to-string-tag.js

./node_modules/core-js/actual/error:
constructor.js
index.js
to-string.js

./node_modules/core-js/actual/function:
bind.js
has-instance.js
index.js
metadata.js
name.js
virtual/

./node_modules/core-js/actual/function/virtual:
bind.js
index.js

./node_modules/core-js/actual/instance:
at.js
bind.js
code-point-at.js
concat.js
copy-within.js
ends-with.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flags.js
flat-map.js
flat.js
for-each.js
group-by-to-map.js
group-by.js
group-to-map.js
group.js
includes.js
index-of.js
is-well-formed.js
keys.js
last-index-of.js
map.js
match-all.js
pad-end.js
pad-start.js
push.js
reduce-right.js
reduce.js
repeat.js
replace-all.js
reverse.js
slice.js
some.js
sort.js
splice.js
starts-with.js
to-reversed.js
to-sorted.js
to-spliced.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js
unshift.js
values.js
with.js

./node_modules/core-js/actual/iterator:
dispose.js
drop.js
every.js
filter.js
find.js
flat-map.js
for-each.js
from.js
index.js
map.js
reduce.js
some.js
take.js
to-array.js
to-async.js

./node_modules/core-js/actual/json:
index.js
is-raw-json.js
parse.js
raw-json.js
stringify.js
to-string-tag.js

./node_modules/core-js/actual/map:
group-by.js
index.js

./node_modules/core-js/actual/math:
acosh.js
asinh.js
atanh.js
cbrt.js
clz32.js
cosh.js
expm1.js
f16round.js
fround.js
hypot.js
imul.js
index.js
log10.js
log1p.js
log2.js
sign.js
sinh.js
sum-precise.js
tanh.js
to-string-tag.js
trunc.js

./node_modules/core-js/actual/number:
constructor.js
epsilon.js
index.js
is-finite.js
is-integer.js
is-nan.js
is-safe-integer.js
max-safe-integer.js
min-safe-integer.js
parse-float.js
parse-int.js
to-exponential.js
to-fixed.js
to-precision.js
virtual/

./node_modules/core-js/actual/number/virtual:
index.js
to-exponential.js
to-fixed.js
to-precision.js

./node_modules/core-js/actual/object:
assign.js
create.js
define-getter.js
define-properties.js
define-property.js
define-setter.js
entries.js
freeze.js
from-entries.js
get-own-property-descriptor.js
get-own-property-descriptors.js
get-own-property-names.js
get-own-property-symbols.js
get-prototype-of.js
group-by.js
has-own.js
index.js
is-extensible.js
is-frozen.js
is-sealed.js
is.js
keys.js
lookup-getter.js
lookup-setter.js
prevent-extensions.js
proto.js
seal.js
set-prototype-of.js
to-string.js
values.js

./node_modules/core-js/actual/promise:
all-settled.js
any.js
finally.js
index.js
try.js
with-resolvers.js

./node_modules/core-js/actual/reflect:
apply.js
construct.js
define-property.js
delete-property.js
get-own-property-descriptor.js
get-prototype-of.js
get.js
has.js
index.js
is-extensible.js
own-keys.js
prevent-extensions.js
set-prototype-of.js
set.js
to-string-tag.js

./node_modules/core-js/actual/regexp:
constructor.js
dot-all.js
escape.js
flags.js
index.js
match.js
replace.js
search.js
split.js
sticky.js
test.js
to-string.js

./node_modules/core-js/actual/set:
difference.js
index.js
intersection.js
is-disjoint-from.js
is-subset-of.js
is-superset-of.js
symmetric-difference.js
union.js

./node_modules/core-js/actual/string:
anchor.js
at.js
big.js
blink.js
bold.js
code-point-at.js
ends-with.js
fixed.js
fontcolor.js
fontsize.js
from-code-point.js
includes.js
index.js
is-well-formed.js
italics.js
iterator.js
link.js
match-all.js
match.js
pad-end.js
pad-start.js
raw.js
repeat.js
replace-all.js
replace.js
search.js
small.js
split.js
starts-with.js
strike.js
sub.js
substr.js
sup.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js
virtual/

./node_modules/core-js/actual/string/virtual:
anchor.js
at.js
big.js
blink.js
bold.js
code-point-at.js
ends-with.js
fixed.js
fontcolor.js
fontsize.js
includes.js
index.js
is-well-formed.js
italics.js
iterator.js
link.js
match-all.js
pad-end.js
pad-start.js
repeat.js
replace-all.js
small.js
starts-with.js
strike.js
sub.js
substr.js
sup.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js

./node_modules/core-js/actual/symbol:
async-dispose.js
async-iterator.js
description.js
dispose.js
for.js
has-instance.js
index.js
is-concat-spreadable.js
iterator.js
key-for.js
match-all.js
match.js
metadata.js
replace.js
search.js
species.js
split.js
to-primitive.js
to-string-tag.js
unscopables.js

./node_modules/core-js/actual/typed-array:
at.js
copy-within.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
float32-array.js
float64-array.js
for-each.js
from-base64.js
from-hex.js
from.js
includes.js
index-of.js
index.js
int16-array.js
int32-array.js
int8-array.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
methods.js
of.js
reduce-right.js
reduce.js
reverse.js
set-from-base64.js
set-from-hex.js
set.js
slice.js
some.js
sort.js
subarray.js
to-base64.js
to-hex.js
to-locale-string.js
to-reversed.js
to-sorted.js
to-spliced.js
to-string.js
uint16-array.js
uint32-array.js
uint8-array.js
uint8-clamped-array.js
values.js
with.js

./node_modules/core-js/actual/url:
can-parse.js
index.js
parse.js
to-json.js

./node_modules/core-js/actual/url-search-params:
index.js

./node_modules/core-js/actual/weak-map:
index.js

./node_modules/core-js/actual/weak-set:
index.js

./node_modules/core-js/es:
README.md
aggregate-error.js
array/
array-buffer/
data-view/
date/
error/
escape.js
function/
get-iterator-method.js
get-iterator.js
global-this.js
index.js
instance/
is-iterable.js
iterator/
json/
map/
math/
number/
object/
parse-float.js
parse-int.js
promise/
reflect/
regexp/
set/
string/
symbol/
typed-array/
unescape.js
weak-map/
weak-set/

./node_modules/core-js/es/array:
at.js
concat.js
copy-within.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flat-map.js
flat.js
for-each.js
from.js
includes.js
index-of.js
index.js
is-array.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
of.js
push.js
reduce-right.js
reduce.js
reverse.js
slice.js
some.js
sort.js
splice.js
to-reversed.js
to-sorted.js
to-spliced.js
unshift.js
values.js
virtual/
with.js

./node_modules/core-js/es/array/virtual:
at.js
concat.js
copy-within.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flat-map.js
flat.js
for-each.js
includes.js
index-of.js
index.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
push.js
reduce-right.js
reduce.js
reverse.js
slice.js
some.js
sort.js
splice.js
to-reversed.js
to-sorted.js
to-spliced.js
unshift.js
values.js
with.js

./node_modules/core-js/es/array-buffer:
constructor.js
detached.js
index.js
is-view.js
slice.js
transfer-to-fixed-length.js
transfer.js

./node_modules/core-js/es/data-view:
index.js

./node_modules/core-js/es/date:
get-year.js
index.js
now.js
set-year.js
to-gmt-string.js
to-iso-string.js
to-json.js
to-primitive.js
to-string.js

./node_modules/core-js/es/error:
constructor.js
index.js
to-string.js

./node_modules/core-js/es/function:
bind.js
has-instance.js
index.js
name.js
virtual/

./node_modules/core-js/es/function/virtual:
bind.js
index.js

./node_modules/core-js/es/instance:
at.js
bind.js
code-point-at.js
concat.js
copy-within.js
ends-with.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flags.js
flat-map.js
flat.js
for-each.js
includes.js
index-of.js
is-well-formed.js
keys.js
last-index-of.js
map.js
match-all.js
pad-end.js
pad-start.js
push.js
reduce-right.js
reduce.js
repeat.js
replace-all.js
reverse.js
slice.js
some.js
sort.js
splice.js
starts-with.js
to-reversed.js
to-sorted.js
to-spliced.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js
unshift.js
values.js
with.js

./node_modules/core-js/es/iterator:
drop.js
every.js
filter.js
find.js
flat-map.js
for-each.js
from.js
index.js
map.js
reduce.js
some.js
take.js
to-array.js

./node_modules/core-js/es/json:
index.js
stringify.js
to-string-tag.js

./node_modules/core-js/es/map:
group-by.js
index.js

./node_modules/core-js/es/math:
acosh.js
asinh.js
atanh.js
cbrt.js
clz32.js
cosh.js
expm1.js
fround.js
hypot.js
imul.js
index.js
log10.js
log1p.js
log2.js
sign.js
sinh.js
tanh.js
to-string-tag.js
trunc.js

./node_modules/core-js/es/number:
constructor.js
epsilon.js
index.js
is-finite.js
is-integer.js
is-nan.js
is-safe-integer.js
max-safe-integer.js
min-safe-integer.js
parse-float.js
parse-int.js
to-exponential.js
to-fixed.js
to-precision.js
virtual/

./node_modules/core-js/es/number/virtual:
index.js
to-exponential.js
to-fixed.js
to-precision.js

./node_modules/core-js/es/object:
assign.js
create.js
define-getter.js
define-properties.js
define-property.js
define-setter.js
entries.js
freeze.js
from-entries.js
get-own-property-descriptor.js
get-own-property-descriptors.js
get-own-property-names.js
get-own-property-symbols.js
get-prototype-of.js
group-by.js
has-own.js
index.js
is-extensible.js
is-frozen.js
is-sealed.js
is.js
keys.js
lookup-getter.js
lookup-setter.js
prevent-extensions.js
proto.js
seal.js
set-prototype-of.js
to-string.js
values.js

./node_modules/core-js/es/promise:
all-settled.js
any.js
finally.js
index.js
try.js
with-resolvers.js

./node_modules/core-js/es/reflect:
apply.js
construct.js
define-property.js
delete-property.js
get-own-property-descriptor.js
get-prototype-of.js
get.js
has.js
index.js
is-extensible.js
own-keys.js
prevent-extensions.js
set-prototype-of.js
set.js
to-string-tag.js

./node_modules/core-js/es/regexp:
constructor.js
dot-all.js
flags.js
index.js
match.js
replace.js
search.js
split.js
sticky.js
test.js
to-string.js

./node_modules/core-js/es/set:
difference.js
index.js
intersection.js
is-disjoint-from.js
is-subset-of.js
is-superset-of.js
symmetric-difference.js
union.js

./node_modules/core-js/es/string:
anchor.js
at.js
big.js
blink.js
bold.js
code-point-at.js
ends-with.js
fixed.js
fontcolor.js
fontsize.js
from-code-point.js
includes.js
index.js
is-well-formed.js
italics.js
iterator.js
link.js
match-all.js
match.js
pad-end.js
pad-start.js
raw.js
repeat.js
replace-all.js
replace.js
search.js
small.js
split.js
starts-with.js
strike.js
sub.js
substr.js
sup.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js
virtual/

./node_modules/core-js/es/string/virtual:
anchor.js
at.js
big.js
blink.js
bold.js
code-point-at.js
ends-with.js
fixed.js
fontcolor.js
fontsize.js
includes.js
index.js
is-well-formed.js
italics.js
iterator.js
link.js
match-all.js
pad-end.js
pad-start.js
repeat.js
replace-all.js
small.js
starts-with.js
strike.js
sub.js
substr.js
sup.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js

./node_modules/core-js/es/symbol:
async-iterator.js
description.js
for.js
has-instance.js
index.js
is-concat-spreadable.js
iterator.js
key-for.js
match-all.js
match.js
replace.js
search.js
species.js
split.js
to-primitive.js
to-string-tag.js
unscopables.js

./node_modules/core-js/es/typed-array:
at.js
copy-within.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
float32-array.js
float64-array.js
for-each.js
from.js
includes.js
index-of.js
index.js
int16-array.js
int32-array.js
int8-array.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
methods.js
of.js
reduce-right.js
reduce.js
reverse.js
set.js
slice.js
some.js
sort.js
subarray.js
to-locale-string.js
to-reversed.js
to-sorted.js
to-string.js
uint16-array.js
uint32-array.js
uint8-array.js
uint8-clamped-array.js
values.js
with.js

./node_modules/core-js/es/weak-map:
index.js

./node_modules/core-js/es/weak-set:
index.js

./node_modules/core-js/features:
aggregate-error.js
array/
array-buffer/
async-disposable-stack/
async-iterator/
atob.js
bigint/
btoa.js
clear-immediate.js
composite-key.js
composite-symbol.js
data-view/
date/
disposable-stack/
dom-collections/
dom-exception/
error/
escape.js
function/
get-iterator-method.js
get-iterator.js
global-this.js
index.js
instance/
is-iterable.js
iterator/
json/
map/
math/
number/
object/
observable/
parse-float.js
parse-int.js
promise/
queue-microtask.js
reflect/
regexp/
self.js
set/
set-immediate.js
set-interval.js
set-timeout.js
string/
structured-clone.js
suppressed-error.js
symbol/
typed-array/
unescape.js
url/
url-search-params/
weak-map/
weak-set/

./node_modules/core-js/features/array:
at.js
concat.js
copy-within.js
entries.js
every.js
fill.js
filter-out.js
filter-reject.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flat-map.js
flat.js
for-each.js
from-async.js
from.js
group-by-to-map.js
group-by.js
group-to-map.js
group.js
includes.js
index-of.js
index.js
is-array.js
is-template-object.js
iterator.js
join.js
keys.js
last-index-of.js
last-index.js
last-item.js
map.js
of.js
push.js
reduce-right.js
reduce.js
reverse.js
slice.js
some.js
sort.js
splice.js
to-reversed.js
to-sorted.js
to-spliced.js
unique-by.js
unshift.js
values.js
virtual/
with.js

./node_modules/core-js/features/array/virtual:
at.js
concat.js
copy-within.js
entries.js
every.js
fill.js
filter-out.js
filter-reject.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flat-map.js
flat.js
for-each.js
group-by-to-map.js
group-by.js
group-to-map.js
group.js
includes.js
index-of.js
index.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
push.js
reduce-right.js
reduce.js
reverse.js
slice.js
some.js
sort.js
splice.js
to-reversed.js
to-sorted.js
to-spliced.js
unique-by.js
unshift.js
values.js
with.js

./node_modules/core-js/features/array-buffer:
constructor.js
detached.js
index.js
is-view.js
slice.js
transfer-to-fixed-length.js
transfer.js

./node_modules/core-js/features/async-disposable-stack:
constructor.js
index.js

./node_modules/core-js/features/async-iterator:
as-indexed-pairs.js
async-dispose.js
drop.js
every.js
filter.js
find.js
flat-map.js
for-each.js
from.js
index.js
indexed.js
map.js
reduce.js
some.js
take.js
to-array.js

./node_modules/core-js/features/bigint:
index.js
range.js

./node_modules/core-js/features/data-view:
get-float16.js
get-uint8-clamped.js
index.js
set-float16.js
set-uint8-clamped.js

./node_modules/core-js/features/date:
get-year.js
index.js
now.js
set-year.js
to-gmt-string.js
to-iso-string.js
to-json.js
to-primitive.js
to-string.js

./node_modules/core-js/features/disposable-stack:
constructor.js
index.js

./node_modules/core-js/features/dom-collections:
for-each.js
index.js
iterator.js

./node_modules/core-js/features/dom-exception:
constructor.js
index.js
to-string-tag.js

./node_modules/core-js/features/error:
constructor.js
index.js
to-string.js

./node_modules/core-js/features/function:
bind.js
demethodize.js
has-instance.js
index.js
is-callable.js
is-constructor.js
metadata.js
name.js
un-this.js
virtual/

./node_modules/core-js/features/function/virtual:
bind.js
demethodize.js
index.js
un-this.js

./node_modules/core-js/features/instance:
at.js
bind.js
code-point-at.js
code-points.js
concat.js
copy-within.js
demethodize.js
ends-with.js
entries.js
every.js
fill.js
filter-out.js
filter-reject.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flags.js
flat-map.js
flat.js
for-each.js
group-by-to-map.js
group-by.js
group-to-map.js
group.js
includes.js
index-of.js
is-well-formed.js
keys.js
last-index-of.js
map.js
match-all.js
pad-end.js
pad-start.js
push.js
reduce-right.js
reduce.js
repeat.js
replace-all.js
reverse.js
slice.js
some.js
sort.js
splice.js
starts-with.js
to-reversed.js
to-sorted.js
to-spliced.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js
un-this.js
unique-by.js
unshift.js
values.js
with.js

./node_modules/core-js/features/iterator:
as-indexed-pairs.js
concat.js
dispose.js
drop.js
every.js
filter.js
find.js
flat-map.js
for-each.js
from.js
index.js
indexed.js
map.js
range.js
reduce.js
some.js
take.js
to-array.js
to-async.js

./node_modules/core-js/features/json:
index.js
is-raw-json.js
parse.js
raw-json.js
stringify.js
to-string-tag.js

./node_modules/core-js/features/map:
delete-all.js
emplace.js
every.js
filter.js
find-key.js
find.js
from.js
get-or-insert-computed.js
get-or-insert.js
group-by.js
includes.js
index.js
key-by.js
key-of.js
map-keys.js
map-values.js
merge.js
of.js
reduce.js
some.js
update-or-insert.js
update.js
upsert.js

./node_modules/core-js/features/math:
acosh.js
asinh.js
atanh.js
cbrt.js
clamp.js
clz32.js
cosh.js
deg-per-rad.js
degrees.js
expm1.js
f16round.js
fround.js
fscale.js
hypot.js
iaddh.js
imul.js
imulh.js
index.js
isubh.js
log10.js
log1p.js
log2.js
rad-per-deg.js
radians.js
scale.js
seeded-prng.js
sign.js
signbit.js
sinh.js
sum-precise.js
tanh.js
to-string-tag.js
trunc.js
umulh.js

./node_modules/core-js/features/number:
constructor.js
epsilon.js
from-string.js
index.js
is-finite.js
is-integer.js
is-nan.js
is-safe-integer.js
max-safe-integer.js
min-safe-integer.js
parse-float.js
parse-int.js
range.js
to-exponential.js
to-fixed.js
to-precision.js
virtual/

./node_modules/core-js/features/number/virtual:
index.js
to-exponential.js
to-fixed.js
to-precision.js

./node_modules/core-js/features/object:
assign.js
create.js
define-getter.js
define-properties.js
define-property.js
define-setter.js
entries.js
freeze.js
from-entries.js
get-own-property-descriptor.js
get-own-property-descriptors.js
get-own-property-names.js
get-own-property-symbols.js
get-prototype-of.js
group-by.js
has-own.js
index.js
is-extensible.js
is-frozen.js
is-sealed.js
is.js
iterate-entries.js
iterate-keys.js
iterate-values.js
keys.js
lookup-getter.js
lookup-setter.js
prevent-extensions.js
proto.js
seal.js
set-prototype-of.js
to-string.js
values.js

./node_modules/core-js/features/observable:
index.js

./node_modules/core-js/features/promise:
all-settled.js
any.js
finally.js
index.js
try.js
with-resolvers.js

./node_modules/core-js/features/reflect:
apply.js
construct.js
define-metadata.js
define-property.js
delete-metadata.js
delete-property.js
get-metadata-keys.js
get-metadata.js
get-own-metadata-keys.js
get-own-metadata.js
get-own-property-descriptor.js
get-prototype-of.js
get.js
has-metadata.js
has-own-metadata.js
has.js
index.js
is-extensible.js
metadata.js
own-keys.js
prevent-extensions.js
set-prototype-of.js
set.js
to-string-tag.js

./node_modules/core-js/features/regexp:
constructor.js
dot-all.js
escape.js
flags.js
index.js
match.js
replace.js
search.js
split.js
sticky.js
test.js
to-string.js

./node_modules/core-js/features/set:
add-all.js
delete-all.js
difference.js
every.js
filter.js
find.js
from.js
index.js
intersection.js
is-disjoint-from.js
is-subset-of.js
is-superset-of.js
join.js
map.js
of.js
reduce.js
some.js
symmetric-difference.js
union.js

./node_modules/core-js/features/string:
anchor.js
at.js
big.js
blink.js
bold.js
code-point-at.js
code-points.js
cooked.js
dedent.js
ends-with.js
fixed.js
fontcolor.js
fontsize.js
from-code-point.js
includes.js
index.js
is-well-formed.js
italics.js
iterator.js
link.js
match-all.js
match.js
pad-end.js
pad-start.js
raw.js
repeat.js
replace-all.js
replace.js
search.js
small.js
split.js
starts-with.js
strike.js
sub.js
substr.js
sup.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js
virtual/

./node_modules/core-js/features/string/virtual:
anchor.js
at.js
big.js
blink.js
bold.js
code-point-at.js
code-points.js
ends-with.js
fixed.js
fontcolor.js
fontsize.js
includes.js
index.js
is-well-formed.js
italics.js
iterator.js
link.js
match-all.js
pad-end.js
pad-start.js
repeat.js
replace-all.js
small.js
starts-with.js
strike.js
sub.js
substr.js
sup.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js

./node_modules/core-js/features/symbol:
async-dispose.js
async-iterator.js
custom-matcher.js
description.js
dispose.js
for.js
has-instance.js
index.js
is-concat-spreadable.js
is-registered-symbol.js
is-registered.js
is-well-known-symbol.js
is-well-known.js
iterator.js
key-for.js
match-all.js
match.js
matcher.js
metadata-key.js
metadata.js
observable.js
pattern-match.js
replace-all.js
replace.js
search.js
species.js
split.js
to-primitive.js
to-string-tag.js
unscopables.js

./node_modules/core-js/features/typed-array:
at.js
copy-within.js
entries.js
every.js
fill.js
filter-out.js
filter-reject.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
float32-array.js
float64-array.js
for-each.js
from-async.js
from-base64.js
from-hex.js
from.js
group-by.js
includes.js
index-of.js
index.js
int16-array.js
int32-array.js
int8-array.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
methods.js
of.js
reduce-right.js
reduce.js
reverse.js
set-from-base64.js
set-from-hex.js
set.js
slice.js
some.js
sort.js
subarray.js
to-base64.js
to-hex.js
to-locale-string.js
to-reversed.js
to-sorted.js
to-spliced.js
to-string.js
uint16-array.js
uint32-array.js
uint8-array.js
uint8-clamped-array.js
unique-by.js
values.js
with.js

./node_modules/core-js/features/url:
can-parse.js
index.js
parse.js
to-json.js

./node_modules/core-js/features/url-search-params:
index.js

./node_modules/core-js/features/weak-map:
delete-all.js
emplace.js
from.js
get-or-insert-computed.js
get-or-insert.js
index.js
of.js
upsert.js

./node_modules/core-js/features/weak-set:
add-all.js
delete-all.js
from.js
index.js
of.js

./node_modules/core-js/full:
README.md
aggregate-error.js
array/
array-buffer/
async-disposable-stack/
async-iterator/
atob.js
bigint/
btoa.js
clear-immediate.js
composite-key.js
composite-symbol.js
data-view/
date/
disposable-stack/
dom-collections/
dom-exception/
error/
escape.js
function/
get-iterator-method.js
get-iterator.js
global-this.js
index.js
instance/
is-iterable.js
iterator/
json/
map/
math/
number/
object/
observable/
parse-float.js
parse-int.js
promise/
queue-microtask.js
reflect/
regexp/
self.js
set/
set-immediate.js
set-interval.js
set-timeout.js
string/
structured-clone.js
suppressed-error.js
symbol/
typed-array/
unescape.js
url/
url-search-params/
weak-map/
weak-set/

./node_modules/core-js/full/array:
at.js
concat.js
copy-within.js
entries.js
every.js
fill.js
filter-out.js
filter-reject.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flat-map.js
flat.js
for-each.js
from-async.js
from.js
group-by-to-map.js
group-by.js
group-to-map.js
group.js
includes.js
index-of.js
index.js
is-array.js
is-template-object.js
iterator.js
join.js
keys.js
last-index-of.js
last-index.js
last-item.js
map.js
of.js
push.js
reduce-right.js
reduce.js
reverse.js
slice.js
some.js
sort.js
splice.js
to-reversed.js
to-sorted.js
to-spliced.js
unique-by.js
unshift.js
values.js
virtual/
with.js

./node_modules/core-js/full/array/virtual:
at.js
concat.js
copy-within.js
entries.js
every.js
fill.js
filter-out.js
filter-reject.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flat-map.js
flat.js
for-each.js
group-by-to-map.js
group-by.js
group-to-map.js
group.js
includes.js
index-of.js
index.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
push.js
reduce-right.js
reduce.js
reverse.js
slice.js
some.js
sort.js
splice.js
to-reversed.js
to-sorted.js
to-spliced.js
unique-by.js
unshift.js
values.js
with.js

./node_modules/core-js/full/array-buffer:
constructor.js
detached.js
index.js
is-view.js
slice.js
transfer-to-fixed-length.js
transfer.js

./node_modules/core-js/full/async-disposable-stack:
constructor.js
index.js

./node_modules/core-js/full/async-iterator:
as-indexed-pairs.js
async-dispose.js
drop.js
every.js
filter.js
find.js
flat-map.js
for-each.js
from.js
index.js
indexed.js
map.js
reduce.js
some.js
take.js
to-array.js

./node_modules/core-js/full/bigint:
index.js
range.js

./node_modules/core-js/full/data-view:
get-float16.js
get-uint8-clamped.js
index.js
set-float16.js
set-uint8-clamped.js

./node_modules/core-js/full/date:
get-year.js
index.js
now.js
set-year.js
to-gmt-string.js
to-iso-string.js
to-json.js
to-primitive.js
to-string.js

./node_modules/core-js/full/disposable-stack:
constructor.js
index.js

./node_modules/core-js/full/dom-collections:
for-each.js
index.js
iterator.js

./node_modules/core-js/full/dom-exception:
constructor.js
index.js
to-string-tag.js

./node_modules/core-js/full/error:
constructor.js
index.js
to-string.js

./node_modules/core-js/full/function:
bind.js
demethodize.js
has-instance.js
index.js
is-callable.js
is-constructor.js
metadata.js
name.js
un-this.js
virtual/

./node_modules/core-js/full/function/virtual:
bind.js
demethodize.js
index.js
un-this.js

./node_modules/core-js/full/instance:
at.js
bind.js
code-point-at.js
code-points.js
concat.js
copy-within.js
demethodize.js
ends-with.js
entries.js
every.js
fill.js
filter-out.js
filter-reject.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flags.js
flat-map.js
flat.js
for-each.js
group-by-to-map.js
group-by.js
group-to-map.js
group.js
includes.js
index-of.js
is-well-formed.js
keys.js
last-index-of.js
map.js
match-all.js
pad-end.js
pad-start.js
push.js
reduce-right.js
reduce.js
repeat.js
replace-all.js
reverse.js
slice.js
some.js
sort.js
splice.js
starts-with.js
to-reversed.js
to-sorted.js
to-spliced.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js
un-this.js
unique-by.js
unshift.js
values.js
with.js

./node_modules/core-js/full/iterator:
as-indexed-pairs.js
concat.js
dispose.js
drop.js
every.js
filter.js
find.js
flat-map.js
for-each.js
from.js
index.js
indexed.js
map.js
range.js
reduce.js
some.js
take.js
to-array.js
to-async.js

./node_modules/core-js/full/json:
index.js
is-raw-json.js
parse.js
raw-json.js
stringify.js
to-string-tag.js

./node_modules/core-js/full/map:
delete-all.js
emplace.js
every.js
filter.js
find-key.js
find.js
from.js
get-or-insert-computed.js
get-or-insert.js
group-by.js
includes.js
index.js
key-by.js
key-of.js
map-keys.js
map-values.js
merge.js
of.js
reduce.js
some.js
update-or-insert.js
update.js
upsert.js

./node_modules/core-js/full/math:
acosh.js
asinh.js
atanh.js
cbrt.js
clamp.js
clz32.js
cosh.js
deg-per-rad.js
degrees.js
expm1.js
f16round.js
fround.js
fscale.js
hypot.js
iaddh.js
imul.js
imulh.js
index.js
isubh.js
log10.js
log1p.js
log2.js
rad-per-deg.js
radians.js
scale.js
seeded-prng.js
sign.js
signbit.js
sinh.js
sum-precise.js
tanh.js
to-string-tag.js
trunc.js
umulh.js

./node_modules/core-js/full/number:
constructor.js
epsilon.js
from-string.js
index.js
is-finite.js
is-integer.js
is-nan.js
is-safe-integer.js
max-safe-integer.js
min-safe-integer.js
parse-float.js
parse-int.js
range.js
to-exponential.js
to-fixed.js
to-precision.js
virtual/

./node_modules/core-js/full/number/virtual:
index.js
to-exponential.js
to-fixed.js
to-precision.js

./node_modules/core-js/full/object:
assign.js
create.js
define-getter.js
define-properties.js
define-property.js
define-setter.js
entries.js
freeze.js
from-entries.js
get-own-property-descriptor.js
get-own-property-descriptors.js
get-own-property-names.js
get-own-property-symbols.js
get-prototype-of.js
group-by.js
has-own.js
index.js
is-extensible.js
is-frozen.js
is-sealed.js
is.js
iterate-entries.js
iterate-keys.js
iterate-values.js
keys.js
lookup-getter.js
lookup-setter.js
prevent-extensions.js
proto.js
seal.js
set-prototype-of.js
to-string.js
values.js

./node_modules/core-js/full/observable:
index.js

./node_modules/core-js/full/promise:
all-settled.js
any.js
finally.js
index.js
try.js
with-resolvers.js

./node_modules/core-js/full/reflect:
apply.js
construct.js
define-metadata.js
define-property.js
delete-metadata.js
delete-property.js
get-metadata-keys.js
get-metadata.js
get-own-metadata-keys.js
get-own-metadata.js
get-own-property-descriptor.js
get-prototype-of.js
get.js
has-metadata.js
has-own-metadata.js
has.js
index.js
is-extensible.js
metadata.js
own-keys.js
prevent-extensions.js
set-prototype-of.js
set.js
to-string-tag.js

./node_modules/core-js/full/regexp:
constructor.js
dot-all.js
escape.js
flags.js
index.js
match.js
replace.js
search.js
split.js
sticky.js
test.js
to-string.js

./node_modules/core-js/full/set:
add-all.js
delete-all.js
difference.js
every.js
filter.js
find.js
from.js
index.js
intersection.js
is-disjoint-from.js
is-subset-of.js
is-superset-of.js
join.js
map.js
of.js
reduce.js
some.js
symmetric-difference.js
union.js

./node_modules/core-js/full/string:
anchor.js
at.js
big.js
blink.js
bold.js
code-point-at.js
code-points.js
cooked.js
dedent.js
ends-with.js
fixed.js
fontcolor.js
fontsize.js
from-code-point.js
includes.js
index.js
is-well-formed.js
italics.js
iterator.js
link.js
match-all.js
match.js
pad-end.js
pad-start.js
raw.js
repeat.js
replace-all.js
replace.js
search.js
small.js
split.js
starts-with.js
strike.js
sub.js
substr.js
sup.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js
virtual/

./node_modules/core-js/full/string/virtual:
anchor.js
at.js
big.js
blink.js
bold.js
code-point-at.js
code-points.js
ends-with.js
fixed.js
fontcolor.js
fontsize.js
includes.js
index.js
is-well-formed.js
italics.js
iterator.js
link.js
match-all.js
pad-end.js
pad-start.js
repeat.js
replace-all.js
small.js
starts-with.js
strike.js
sub.js
substr.js
sup.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js

./node_modules/core-js/full/symbol:
async-dispose.js
async-iterator.js
custom-matcher.js
description.js
dispose.js
for.js
has-instance.js
index.js
is-concat-spreadable.js
is-registered-symbol.js
is-registered.js
is-well-known-symbol.js
is-well-known.js
iterator.js
key-for.js
match-all.js
match.js
matcher.js
metadata-key.js
metadata.js
observable.js
pattern-match.js
replace-all.js
replace.js
search.js
species.js
split.js
to-primitive.js
to-string-tag.js
unscopables.js

./node_modules/core-js/full/typed-array:
at.js
copy-within.js
entries.js
every.js
fill.js
filter-out.js
filter-reject.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
float32-array.js
float64-array.js
for-each.js
from-async.js
from-base64.js
from-hex.js
from.js
group-by.js
includes.js
index-of.js
index.js
int16-array.js
int32-array.js
int8-array.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
methods.js
of.js
reduce-right.js
reduce.js
reverse.js
set-from-base64.js
set-from-hex.js
set.js
slice.js
some.js
sort.js
subarray.js
to-base64.js
to-hex.js
to-locale-string.js
to-reversed.js
to-sorted.js
to-spliced.js
to-string.js
uint16-array.js
uint32-array.js
uint8-array.js
uint8-clamped-array.js
unique-by.js
values.js
with.js

./node_modules/core-js/full/url:
can-parse.js
index.js
parse.js
to-json.js

./node_modules/core-js/full/url-search-params:
index.js

./node_modules/core-js/full/weak-map:
delete-all.js
emplace.js
from.js
get-or-insert-computed.js
get-or-insert.js
index.js
of.js
upsert.js

./node_modules/core-js/full/weak-set:
add-all.js
delete-all.js
from.js
index.js
of.js

./node_modules/core-js/internals:
README.md
a-callable.js
a-constructor.js
a-data-view.js
a-map.js
a-possible-prototype.js
a-set.js
a-string.js
a-weak-map.js
a-weak-set.js
add-disposable-resource.js
add-to-unscopables.js
advance-string-index.js
an-instance.js
an-object-or-undefined.js
an-object.js
an-uint8-array.js
array-buffer-basic-detection.js
array-buffer-byte-length.js
array-buffer-is-detached.js
array-buffer-non-extensible.js
array-buffer-not-detached.js
array-buffer-transfer.js
array-buffer-view-core.js
array-buffer.js
array-copy-within.js
array-fill.js
array-for-each.js
array-from-async.js
array-from-constructor-and-list.js
array-from.js
array-group-to-map.js
array-group.js
array-includes.js
array-iteration-from-last.js
array-iteration.js
array-last-index-of.js
array-method-has-species-support.js
array-method-is-strict.js
array-reduce.js
array-set-length.js
array-slice.js
array-sort.js
array-species-constructor.js
array-species-create.js
array-to-reversed.js
array-unique-by.js
array-with.js
async-from-sync-iterator.js
async-iterator-close.js
async-iterator-create-proxy.js
async-iterator-indexed.js
async-iterator-iteration.js
async-iterator-map.js
async-iterator-prototype.js
async-iterator-wrap.js
base64-map.js
call-with-safe-iteration-closing.js
caller.js
check-correctness-of-iteration.js
classof-raw.js
classof.js
collection-from.js
collection-of.js
collection-strong.js
collection-weak.js
collection.js
composite-key.js
copy-constructor-properties.js
correct-is-regexp-logic.js
correct-prototype-getter.js
create-html.js
create-iter-result-object.js
create-non-enumerable-property.js
create-property-descriptor.js
create-property.js
date-to-iso-string.js
date-to-primitive.js
define-built-in-accessor.js
define-built-in.js
define-built-ins.js
define-global-property.js
delete-property-or-throw.js
descriptors.js
detach-transferable.js
document-create-element.js
does-not-exceed-safe-integer.js
dom-exception-constants.js
dom-iterables.js
dom-token-list-prototype.js
entry-unbind.js
entry-virtual.js
enum-bug-keys.js
environment-ff-version.js
environment-is-ie-or-edge.js
environment-is-ios-pebble.js
environment-is-ios.js
environment-is-node.js
environment-is-webos-webkit.js
environment-user-agent.js
environment-v8-version.js
environment-webkit-version.js
environment.js
error-stack-clear.js
error-stack-install.js
error-stack-installable.js
error-to-string.js
export.js
fails.js
fix-regexp-well-known-symbol-logic.js
flatten-into-array.js
freezing.js
function-apply.js
function-bind-context.js
function-bind-native.js
function-bind.js
function-call.js
function-demethodize.js
function-name.js
function-uncurry-this-accessor.js
function-uncurry-this-clause.js
function-uncurry-this.js
get-alphabet-option.js
get-async-iterator-flattenable.js
get-async-iterator.js
get-built-in-node-module.js
get-built-in-prototype-method.js
get-built-in.js
get-iterator-direct.js
get-iterator-flattenable.js
get-iterator-method.js
get-iterator.js
get-json-replacer-function.js
get-method.js
get-set-record.js
get-substitution.js
global-this.js
has-own-property.js
hidden-keys.js
host-report-errors.js
html.js
ie8-dom-define.js
ieee754.js
indexed-object.js
inherit-if-required.js
inspect-source.js
install-error-cause.js
internal-metadata.js
internal-state.js
is-array-iterator-method.js
is-array.js
is-big-int-array.js
is-callable.js
is-constructor.js
is-data-descriptor.js
is-forced.js
is-integral-number.js
is-iterable.js
is-null-or-undefined.js
is-object.js
is-possible-prototype.js
is-pure.js
is-raw-json.js
is-regexp.js
is-symbol.js
iterate-simple.js
iterate.js
iterator-close.js
iterator-create-constructor.js
iterator-create-proxy.js
iterator-define.js
iterator-indexed.js
iterator-map.js
iterators-core.js
iterators.js
length-of-array-like.js
make-built-in.js
map-helpers.js
map-iterate.js
map-upsert.js
math-expm1.js
math-f16round.js
math-float-round.js
math-fround.js
math-log10.js
math-log1p.js
math-scale.js
math-sign.js
math-trunc.js
microtask.js
native-raw-json.js
new-promise-capability.js
normalize-string-argument.js
not-a-nan.js
not-a-regexp.js
number-is-finite.js
number-parse-float.js
number-parse-int.js
numeric-range-iterator.js
object-assign.js
object-create.js
object-define-properties.js
object-define-property.js
object-get-own-property-descriptor.js
object-get-own-property-names-external.js
object-get-own-property-names.js
object-get-own-property-symbols.js
object-get-prototype-of.js
object-is-extensible.js
object-is-prototype-of.js
object-iterator.js
object-keys-internal.js
object-keys.js
object-property-is-enumerable.js
object-prototype-accessors-forced.js
object-set-prototype-of.js
object-to-array.js
object-to-string.js
ordinary-to-primitive.js
own-keys.js
parse-json-string.js
path.js
perform.js
promise-constructor-detection.js
promise-native-constructor.js
promise-resolve.js
promise-statics-incorrect-iteration.js
proxy-accessor.js
queue.js
reflect-metadata.js
regexp-exec-abstract.js
regexp-exec.js
regexp-flags.js
regexp-get-flags.js
regexp-sticky-helpers.js
regexp-unsupported-dot-all.js
regexp-unsupported-ncg.js
require-object-coercible.js
safe-get-built-in.js
same-value-zero.js
same-value.js
schedulers-fix.js
set-clone.js
set-difference.js
set-helpers.js
set-intersection.js
set-is-disjoint-from.js
set-is-subset-of.js
set-is-superset-of.js
set-iterate.js
set-method-accept-set-like.js
set-size.js
set-species.js
set-symmetric-difference.js
set-to-string-tag.js
set-union.js
shared-key.js
shared-store.js
shared.js
species-constructor.js
string-cooked.js
string-html-forced.js
string-multibyte.js
string-pad-webkit-bug.js
string-pad.js
string-parse.js
string-punycode-to-ascii.js
string-repeat.js
string-trim-end.js
string-trim-forced.js
string-trim-start.js
string-trim.js
structured-clone-proper-transfer.js
symbol-constructor-detection.js
symbol-define-to-primitive.js
symbol-is-registered.js
symbol-is-well-known.js
symbol-registry-detection.js
task.js
this-number-value.js
to-absolute-index.js
to-big-int.js
to-index.js
to-indexed-object.js
to-integer-or-infinity.js
to-length.js
to-object.js
to-offset.js
to-positive-integer.js
to-primitive.js
to-property-key.js
to-set-like.js
to-string-tag-support.js
to-string.js
to-uint8-clamped.js
try-to-string.js
typed-array-constructor.js
typed-array-constructors-require-wrappers.js
typed-array-from-same-type-and-list.js
typed-array-from.js
uid.js
uint8-from-base64.js
uint8-from-hex.js
url-constructor-detection.js
use-symbol-as-uid.js
v8-prototype-define-bug.js
validate-arguments-length.js
weak-map-basic-detection.js
weak-map-helpers.js
weak-set-helpers.js
well-known-symbol-define.js
well-known-symbol-wrapped.js
well-known-symbol.js
whitespaces.js
wrap-error-constructor-with-cause.js

./node_modules/core-js/modules:
README.md
es.aggregate-error.cause.js
es.aggregate-error.constructor.js
es.aggregate-error.js
es.array-buffer.constructor.js
es.array-buffer.detached.js
es.array-buffer.is-view.js
es.array-buffer.slice.js
es.array-buffer.transfer-to-fixed-length.js
es.array-buffer.transfer.js
es.array.at.js
es.array.concat.js
es.array.copy-within.js
es.array.every.js
es.array.fill.js
es.array.filter.js
es.array.find-index.js
es.array.find-last-index.js
es.array.find-last.js
es.array.find.js
es.array.flat-map.js
es.array.flat.js
es.array.for-each.js
es.array.from.js
es.array.includes.js
es.array.index-of.js
es.array.is-array.js
es.array.iterator.js
es.array.join.js
es.array.last-index-of.js
es.array.map.js
es.array.of.js
es.array.push.js
es.array.reduce-right.js
es.array.reduce.js
es.array.reverse.js
es.array.slice.js
es.array.some.js
es.array.sort.js
es.array.species.js
es.array.splice.js
es.array.to-reversed.js
es.array.to-sorted.js
es.array.to-spliced.js
es.array.unscopables.flat-map.js
es.array.unscopables.flat.js
es.array.unshift.js
es.array.with.js
es.data-view.constructor.js
es.data-view.js
es.date.get-year.js
es.date.now.js
es.date.set-year.js
es.date.to-gmt-string.js
es.date.to-iso-string.js
es.date.to-json.js
es.date.to-primitive.js
es.date.to-string.js
es.error.cause.js
es.error.to-string.js
es.escape.js
es.function.bind.js
es.function.has-instance.js
es.function.name.js
es.global-this.js
es.iterator.constructor.js
es.iterator.drop.js
es.iterator.every.js
es.iterator.filter.js
es.iterator.find.js
es.iterator.flat-map.js
es.iterator.for-each.js
es.iterator.from.js
es.iterator.map.js
es.iterator.reduce.js
es.iterator.some.js
es.iterator.take.js
es.iterator.to-array.js
es.json.stringify.js
es.json.to-string-tag.js
es.map.constructor.js
es.map.group-by.js
es.map.js
es.math.acosh.js
es.math.asinh.js
es.math.atanh.js
es.math.cbrt.js
es.math.clz32.js
es.math.cosh.js
es.math.expm1.js
es.math.fround.js
es.math.hypot.js
es.math.imul.js
es.math.log10.js
es.math.log1p.js
es.math.log2.js
es.math.sign.js
es.math.sinh.js
es.math.tanh.js
es.math.to-string-tag.js
es.math.trunc.js
es.number.constructor.js
es.number.epsilon.js
es.number.is-finite.js
es.number.is-integer.js
es.number.is-nan.js
es.number.is-safe-integer.js
es.number.max-safe-integer.js
es.number.min-safe-integer.js
es.number.parse-float.js
es.number.parse-int.js
es.number.to-exponential.js
es.number.to-fixed.js
es.number.to-precision.js
es.object.assign.js
es.object.create.js
es.object.define-getter.js
es.object.define-properties.js
es.object.define-property.js
es.object.define-setter.js
es.object.entries.js
es.object.freeze.js
es.object.from-entries.js
es.object.get-own-property-descriptor.js
es.object.get-own-property-descriptors.js
es.object.get-own-property-names.js
es.object.get-own-property-symbols.js
es.object.get-prototype-of.js
es.object.group-by.js
es.object.has-own.js
es.object.is-extensible.js
es.object.is-frozen.js
es.object.is-sealed.js
es.object.is.js
es.object.keys.js
es.object.lookup-getter.js
es.object.lookup-setter.js
es.object.prevent-extensions.js
es.object.proto.js
es.object.seal.js
es.object.set-prototype-of.js
es.object.to-string.js
es.object.values.js
es.parse-float.js
es.parse-int.js
es.promise.all-settled.js
es.promise.all.js
es.promise.any.js
es.promise.catch.js
es.promise.constructor.js
es.promise.finally.js
es.promise.js
es.promise.race.js
es.promise.reject.js
es.promise.resolve.js
es.promise.try.js
es.promise.with-resolvers.js
es.reflect.apply.js
es.reflect.construct.js
es.reflect.define-property.js
es.reflect.delete-property.js
es.reflect.get-own-property-descriptor.js
es.reflect.get-prototype-of.js
es.reflect.get.js
es.reflect.has.js
es.reflect.is-extensible.js
es.reflect.own-keys.js
es.reflect.prevent-extensions.js
es.reflect.set-prototype-of.js
es.reflect.set.js
es.reflect.to-string-tag.js
es.regexp.constructor.js
es.regexp.dot-all.js
es.regexp.exec.js
es.regexp.flags.js
es.regexp.sticky.js
es.regexp.test.js
es.regexp.to-string.js
es.set.constructor.js
es.set.difference.v2.js
es.set.intersection.v2.js
es.set.is-disjoint-from.v2.js
es.set.is-subset-of.v2.js
es.set.is-superset-of.v2.js
es.set.js
es.set.symmetric-difference.v2.js
es.set.union.v2.js
es.string.anchor.js
es.string.at-alternative.js
es.string.big.js
es.string.blink.js
es.string.bold.js
es.string.code-point-at.js
es.string.ends-with.js
es.string.fixed.js
es.string.fontcolor.js
es.string.fontsize.js
es.string.from-code-point.js
es.string.includes.js
es.string.is-well-formed.js
es.string.italics.js
es.string.iterator.js
es.string.link.js
es.string.match-all.js
es.string.match.js
es.string.pad-end.js
es.string.pad-start.js
es.string.raw.js
es.string.repeat.js
es.string.replace-all.js
es.string.replace.js
es.string.search.js
es.string.small.js
es.string.split.js
es.string.starts-with.js
es.string.strike.js
es.string.sub.js
es.string.substr.js
es.string.sup.js
es.string.to-well-formed.js
es.string.trim-end.js
es.string.trim-left.js
es.string.trim-right.js
es.string.trim-start.js
es.string.trim.js
es.symbol.async-iterator.js
es.symbol.constructor.js
es.symbol.description.js
es.symbol.for.js
es.symbol.has-instance.js
es.symbol.is-concat-spreadable.js
es.symbol.iterator.js
es.symbol.js
es.symbol.key-for.js
es.symbol.match-all.js
es.symbol.match.js
es.symbol.replace.js
es.symbol.search.js
es.symbol.species.js
es.symbol.split.js
es.symbol.to-primitive.js
es.symbol.to-string-tag.js
es.symbol.unscopables.js
es.typed-array.at.js
es.typed-array.copy-within.js
es.typed-array.every.js
es.typed-array.fill.js
es.typed-array.filter.js
es.typed-array.find-index.js
es.typed-array.find-last-index.js
es.typed-array.find-last.js
es.typed-array.find.js
es.typed-array.float32-array.js
es.typed-array.float64-array.js
es.typed-array.for-each.js
es.typed-array.from.js
es.typed-array.includes.js
es.typed-array.index-of.js
es.typed-array.int16-array.js
es.typed-array.int32-array.js
es.typed-array.int8-array.js
es.typed-array.iterator.js
es.typed-array.join.js
es.typed-array.last-index-of.js
es.typed-array.map.js
es.typed-array.of.js
es.typed-array.reduce-right.js
es.typed-array.reduce.js
es.typed-array.reverse.js
es.typed-array.set.js
es.typed-array.slice.js
es.typed-array.some.js
es.typed-array.sort.js
es.typed-array.subarray.js
es.typed-array.to-locale-string.js
es.typed-array.to-reversed.js
es.typed-array.to-sorted.js
es.typed-array.to-string.js
es.typed-array.uint16-array.js
es.typed-array.uint32-array.js
es.typed-array.uint8-array.js
es.typed-array.uint8-clamped-array.js
es.typed-array.with.js
es.unescape.js
es.weak-map.constructor.js
es.weak-map.js
es.weak-set.constructor.js
es.weak-set.js
esnext.aggregate-error.js
esnext.array-buffer.detached.js
esnext.array-buffer.transfer-to-fixed-length.js
esnext.array-buffer.transfer.js
esnext.array.at.js
esnext.array.filter-out.js
esnext.array.filter-reject.js
esnext.array.find-last-index.js
esnext.array.find-last.js
esnext.array.from-async.js
esnext.array.group-by-to-map.js
esnext.array.group-by.js
esnext.array.group-to-map.js
esnext.array.group.js
esnext.array.is-template-object.js
esnext.array.last-index.js
esnext.array.last-item.js
esnext.array.to-reversed.js
esnext.array.to-sorted.js
esnext.array.to-spliced.js
esnext.array.unique-by.js
esnext.array.with.js
esnext.async-disposable-stack.constructor.js
esnext.async-iterator.as-indexed-pairs.js
esnext.async-iterator.async-dispose.js
esnext.async-iterator.constructor.js
esnext.async-iterator.drop.js
esnext.async-iterator.every.js
esnext.async-iterator.filter.js
esnext.async-iterator.find.js
esnext.async-iterator.flat-map.js
esnext.async-iterator.for-each.js
esnext.async-iterator.from.js
esnext.async-iterator.indexed.js
esnext.async-iterator.map.js
esnext.async-iterator.reduce.js
esnext.async-iterator.some.js
esnext.async-iterator.take.js
esnext.async-iterator.to-array.js
esnext.bigint.range.js
esnext.composite-key.js
esnext.composite-symbol.js
esnext.data-view.get-float16.js
esnext.data-view.get-uint8-clamped.js
esnext.data-view.set-float16.js
esnext.data-view.set-uint8-clamped.js
esnext.disposable-stack.constructor.js
esnext.function.demethodize.js
esnext.function.is-callable.js
esnext.function.is-constructor.js
esnext.function.metadata.js
esnext.function.un-this.js
esnext.global-this.js
esnext.iterator.as-indexed-pairs.js
esnext.iterator.concat.js
esnext.iterator.constructor.js
esnext.iterator.dispose.js
esnext.iterator.drop.js
esnext.iterator.every.js
esnext.iterator.filter.js
esnext.iterator.find.js
esnext.iterator.flat-map.js
esnext.iterator.for-each.js
esnext.iterator.from.js
esnext.iterator.indexed.js
esnext.iterator.map.js
esnext.iterator.range.js
esnext.iterator.reduce.js
esnext.iterator.some.js
esnext.iterator.take.js
esnext.iterator.to-array.js
esnext.iterator.to-async.js
esnext.json.is-raw-json.js
esnext.json.parse.js
esnext.json.raw-json.js
esnext.map.delete-all.js
esnext.map.emplace.js
esnext.map.every.js
esnext.map.filter.js
esnext.map.find-key.js
esnext.map.find.js
esnext.map.from.js
esnext.map.get-or-insert-computed.js
esnext.map.get-or-insert.js
esnext.map.group-by.js
esnext.map.includes.js
esnext.map.key-by.js
esnext.map.key-of.js
esnext.map.map-keys.js
esnext.map.map-values.js
esnext.map.merge.js
esnext.map.of.js
esnext.map.reduce.js
esnext.map.some.js
esnext.map.update-or-insert.js
esnext.map.update.js
esnext.map.upsert.js
esnext.math.clamp.js
esnext.math.deg-per-rad.js
esnext.math.degrees.js
esnext.math.f16round.js
esnext.math.fscale.js
esnext.math.iaddh.js
esnext.math.imulh.js
esnext.math.isubh.js
esnext.math.rad-per-deg.js
esnext.math.radians.js
esnext.math.scale.js
esnext.math.seeded-prng.js
esnext.math.signbit.js
esnext.math.sum-precise.js
esnext.math.umulh.js
esnext.number.from-string.js
esnext.number.range.js
esnext.object.group-by.js
esnext.object.has-own.js
esnext.object.iterate-entries.js
esnext.object.iterate-keys.js
esnext.object.iterate-values.js
esnext.observable.constructor.js
esnext.observable.from.js
esnext.observable.js
esnext.observable.of.js
esnext.promise.all-settled.js
esnext.promise.any.js
esnext.promise.try.js
esnext.promise.with-resolvers.js
esnext.reflect.define-metadata.js
esnext.reflect.delete-metadata.js
esnext.reflect.get-metadata-keys.js
esnext.reflect.get-metadata.js
esnext.reflect.get-own-metadata-keys.js
esnext.reflect.get-own-metadata.js
esnext.reflect.has-metadata.js
esnext.reflect.has-own-metadata.js
esnext.reflect.metadata.js
esnext.regexp.escape.js
esnext.set.add-all.js
esnext.set.delete-all.js
esnext.set.difference.js
esnext.set.difference.v2.js
esnext.set.every.js
esnext.set.filter.js
esnext.set.find.js
esnext.set.from.js
esnext.set.intersection.js
esnext.set.intersection.v2.js
esnext.set.is-disjoint-from.js
esnext.set.is-disjoint-from.v2.js
esnext.set.is-subset-of.js
esnext.set.is-subset-of.v2.js
esnext.set.is-superset-of.js
esnext.set.is-superset-of.v2.js
esnext.set.join.js
esnext.set.map.js
esnext.set.of.js
esnext.set.reduce.js
esnext.set.some.js
esnext.set.symmetric-difference.js
esnext.set.symmetric-difference.v2.js
esnext.set.union.js
esnext.set.union.v2.js
esnext.string.at-alternative.js
esnext.string.at.js
esnext.string.code-points.js
esnext.string.cooked.js
esnext.string.dedent.js
esnext.string.is-well-formed.js
esnext.string.match-all.js
esnext.string.replace-all.js
esnext.string.to-well-formed.js
esnext.suppressed-error.constructor.js
esnext.symbol.async-dispose.js
esnext.symbol.custom-matcher.js
esnext.symbol.dispose.js
esnext.symbol.is-registered-symbol.js
esnext.symbol.is-registered.js
esnext.symbol.is-well-known-symbol.js
esnext.symbol.is-well-known.js
esnext.symbol.matcher.js
esnext.symbol.metadata-key.js
esnext.symbol.metadata.js
esnext.symbol.observable.js
esnext.symbol.pattern-match.js
esnext.symbol.replace-all.js
esnext.typed-array.at.js
esnext.typed-array.filter-out.js
esnext.typed-array.filter-reject.js
esnext.typed-array.find-last-index.js
esnext.typed-array.find-last.js
esnext.typed-array.from-async.js
esnext.typed-array.group-by.js
esnext.typed-array.to-reversed.js
esnext.typed-array.to-sorted.js
esnext.typed-array.to-spliced.js
esnext.typed-array.unique-by.js
esnext.typed-array.with.js
esnext.uint8-array.from-base64.js
esnext.uint8-array.from-hex.js
esnext.uint8-array.set-from-base64.js
esnext.uint8-array.set-from-hex.js
esnext.uint8-array.to-base64.js
esnext.uint8-array.to-hex.js
esnext.weak-map.delete-all.js
esnext.weak-map.emplace.js
esnext.weak-map.from.js
esnext.weak-map.get-or-insert-computed.js
esnext.weak-map.get-or-insert.js
esnext.weak-map.of.js
esnext.weak-map.upsert.js
esnext.weak-set.add-all.js
esnext.weak-set.delete-all.js
esnext.weak-set.from.js
esnext.weak-set.of.js
web.atob.js
web.btoa.js
web.clear-immediate.js
web.dom-collections.for-each.js
web.dom-collections.iterator.js
web.dom-exception.constructor.js
web.dom-exception.stack.js
web.dom-exception.to-string-tag.js
web.immediate.js
web.queue-microtask.js
web.self.js
web.set-immediate.js
web.set-interval.js
web.set-timeout.js
web.structured-clone.js
web.timers.js
web.url-search-params.constructor.js
web.url-search-params.delete.js
web.url-search-params.has.js
web.url-search-params.js
web.url-search-params.size.js
web.url.can-parse.js
web.url.constructor.js
web.url.js
web.url.parse.js
web.url.to-json.js

./node_modules/core-js/proposals:
accessible-object-hasownproperty.js
array-buffer-base64.js
array-buffer-transfer.js
array-filtering-stage-1.js
array-filtering.js
array-find-from-last.js
array-flat-map.js
array-from-async-stage-2.js
array-from-async.js
array-grouping-stage-3-2.js
array-grouping-stage-3.js
array-grouping-v2.js
array-grouping.js
array-includes.js
array-is-template-object.js
array-last.js
array-unique.js
async-explicit-resource-management.js
async-iteration.js
async-iterator-helpers.js
change-array-by-copy-stage-4.js
change-array-by-copy.js
collection-methods.js
collection-of-from.js
data-view-get-set-uint8-clamped.js
decorator-metadata-v2.js
decorator-metadata.js
decorators.js
efficient-64-bit-arithmetic.js
error-cause.js
explicit-resource-management.js
extractors.js
float16.js
function-demethodize.js
function-is-callable-is-constructor.js
function-un-this.js
global-this.js
index.js
iterator-helpers-stage-3-2.js
iterator-helpers-stage-3.js
iterator-helpers.js
iterator-range.js
iterator-sequencing.js
json-parse-with-source.js
keys-composition.js
map-update-or-insert.js
map-upsert-stage-2.js
map-upsert-v4.js
map-upsert.js
math-extensions.js
math-signbit.js
math-sum.js
number-from-string.js
number-range.js
object-from-entries.js
object-getownpropertydescriptors.js
object-iteration.js
object-values-entries.js
observable.js
pattern-matching-v2.js
pattern-matching.js
promise-all-settled.js
promise-any.js
promise-finally.js
promise-try.js
promise-with-resolvers.js
reflect-metadata.js
regexp-dotall-flag.js
regexp-escaping.js
regexp-named-groups.js
relative-indexing-method.js
seeded-random.js
set-methods-v2.js
set-methods.js
string-at.js
string-code-points.js
string-cooked.js
string-dedent.js
string-left-right-trim.js
string-match-all.js
string-padding.js
string-replace-all-stage-4.js
string-replace-all.js
symbol-description.js
symbol-predicates-v2.js
symbol-predicates.js
url.js
using-statement.js
well-formed-stringify.js
well-formed-unicode-strings.js

./node_modules/core-js/stable:
README.md
aggregate-error.js
array/
array-buffer/
atob.js
btoa.js
clear-immediate.js
data-view/
date/
dom-collections/
dom-exception/
error/
escape.js
function/
get-iterator-method.js
get-iterator.js
global-this.js
index.js
instance/
is-iterable.js
iterator/
json/
map/
math/
number/
object/
parse-float.js
parse-int.js
promise/
queue-microtask.js
reflect/
regexp/
self.js
set/
set-immediate.js
set-interval.js
set-timeout.js
string/
structured-clone.js
symbol/
typed-array/
unescape.js
url/
url-search-params/
weak-map/
weak-set/

./node_modules/core-js/stable/array:
at.js
concat.js
copy-within.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flat-map.js
flat.js
for-each.js
from.js
includes.js
index-of.js
index.js
is-array.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
of.js
push.js
reduce-right.js
reduce.js
reverse.js
slice.js
some.js
sort.js
splice.js
to-reversed.js
to-sorted.js
to-spliced.js
unshift.js
values.js
virtual/
with.js

./node_modules/core-js/stable/array/virtual:
at.js
concat.js
copy-within.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flat-map.js
flat.js
for-each.js
includes.js
index-of.js
index.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
push.js
reduce-right.js
reduce.js
reverse.js
slice.js
some.js
sort.js
splice.js
to-reversed.js
to-sorted.js
to-spliced.js
unshift.js
values.js
with.js

./node_modules/core-js/stable/array-buffer:
constructor.js
detached.js
index.js
is-view.js
slice.js
transfer-to-fixed-length.js
transfer.js

./node_modules/core-js/stable/data-view:
index.js

./node_modules/core-js/stable/date:
get-year.js
index.js
now.js
set-year.js
to-gmt-string.js
to-iso-string.js
to-json.js
to-primitive.js
to-string.js

./node_modules/core-js/stable/dom-collections:
for-each.js
index.js
iterator.js

./node_modules/core-js/stable/dom-exception:
constructor.js
index.js
to-string-tag.js

./node_modules/core-js/stable/error:
constructor.js
index.js
to-string.js

./node_modules/core-js/stable/function:
bind.js
has-instance.js
index.js
name.js
virtual/

./node_modules/core-js/stable/function/virtual:
bind.js
index.js

./node_modules/core-js/stable/instance:
at.js
bind.js
code-point-at.js
concat.js
copy-within.js
ends-with.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
flags.js
flat-map.js
flat.js
for-each.js
includes.js
index-of.js
is-well-formed.js
keys.js
last-index-of.js
map.js
match-all.js
pad-end.js
pad-start.js
push.js
reduce-right.js
reduce.js
repeat.js
replace-all.js
reverse.js
slice.js
some.js
sort.js
splice.js
starts-with.js
to-reversed.js
to-sorted.js
to-spliced.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js
unshift.js
values.js
with.js

./node_modules/core-js/stable/iterator:
drop.js
every.js
filter.js
find.js
flat-map.js
for-each.js
from.js
index.js
map.js
reduce.js
some.js
take.js
to-array.js

./node_modules/core-js/stable/json:
index.js
stringify.js
to-string-tag.js

./node_modules/core-js/stable/map:
group-by.js
index.js

./node_modules/core-js/stable/math:
acosh.js
asinh.js
atanh.js
cbrt.js
clz32.js
cosh.js
expm1.js
fround.js
hypot.js
imul.js
index.js
log10.js
log1p.js
log2.js
sign.js
sinh.js
tanh.js
to-string-tag.js
trunc.js

./node_modules/core-js/stable/number:
constructor.js
epsilon.js
index.js
is-finite.js
is-integer.js
is-nan.js
is-safe-integer.js
max-safe-integer.js
min-safe-integer.js
parse-float.js
parse-int.js
to-exponential.js
to-fixed.js
to-precision.js
virtual/

./node_modules/core-js/stable/number/virtual:
index.js
to-exponential.js
to-fixed.js
to-precision.js

./node_modules/core-js/stable/object:
assign.js
create.js
define-getter.js
define-properties.js
define-property.js
define-setter.js
entries.js
freeze.js
from-entries.js
get-own-property-descriptor.js
get-own-property-descriptors.js
get-own-property-names.js
get-own-property-symbols.js
get-prototype-of.js
group-by.js
has-own.js
index.js
is-extensible.js
is-frozen.js
is-sealed.js
is.js
keys.js
lookup-getter.js
lookup-setter.js
prevent-extensions.js
proto.js
seal.js
set-prototype-of.js
to-string.js
values.js

./node_modules/core-js/stable/promise:
all-settled.js
any.js
finally.js
index.js
try.js
with-resolvers.js

./node_modules/core-js/stable/reflect:
apply.js
construct.js
define-property.js
delete-property.js
get-own-property-descriptor.js
get-prototype-of.js
get.js
has.js
index.js
is-extensible.js
own-keys.js
prevent-extensions.js
set-prototype-of.js
set.js
to-string-tag.js

./node_modules/core-js/stable/regexp:
constructor.js
dot-all.js
flags.js
index.js
match.js
replace.js
search.js
split.js
sticky.js
test.js
to-string.js

./node_modules/core-js/stable/set:
difference.js
index.js
intersection.js
is-disjoint-from.js
is-subset-of.js
is-superset-of.js
symmetric-difference.js
union.js

./node_modules/core-js/stable/string:
anchor.js
at.js
big.js
blink.js
bold.js
code-point-at.js
ends-with.js
fixed.js
fontcolor.js
fontsize.js
from-code-point.js
includes.js
index.js
is-well-formed.js
italics.js
iterator.js
link.js
match-all.js
match.js
pad-end.js
pad-start.js
raw.js
repeat.js
replace-all.js
replace.js
search.js
small.js
split.js
starts-with.js
strike.js
sub.js
substr.js
sup.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js
virtual/

./node_modules/core-js/stable/string/virtual:
anchor.js
at.js
big.js
blink.js
bold.js
code-point-at.js
ends-with.js
fixed.js
fontcolor.js
fontsize.js
includes.js
index.js
is-well-formed.js
italics.js
iterator.js
link.js
match-all.js
pad-end.js
pad-start.js
repeat.js
replace-all.js
small.js
starts-with.js
strike.js
sub.js
substr.js
sup.js
to-well-formed.js
trim-end.js
trim-left.js
trim-right.js
trim-start.js
trim.js

./node_modules/core-js/stable/symbol:
async-iterator.js
description.js
for.js
has-instance.js
index.js
is-concat-spreadable.js
iterator.js
key-for.js
match-all.js
match.js
replace.js
search.js
species.js
split.js
to-primitive.js
to-string-tag.js
unscopables.js

./node_modules/core-js/stable/typed-array:
at.js
copy-within.js
entries.js
every.js
fill.js
filter.js
find-index.js
find-last-index.js
find-last.js
find.js
float32-array.js
float64-array.js
for-each.js
from.js
includes.js
index-of.js
index.js
int16-array.js
int32-array.js
int8-array.js
iterator.js
join.js
keys.js
last-index-of.js
map.js
methods.js
of.js
reduce-right.js
reduce.js
reverse.js
set.js
slice.js
some.js
sort.js
subarray.js
to-locale-string.js
to-reversed.js
to-sorted.js
to-string.js
uint16-array.js
uint32-array.js
uint8-array.js
uint8-clamped-array.js
values.js
with.js

./node_modules/core-js/stable/url:
can-parse.js
index.js
parse.js
to-json.js

./node_modules/core-js/stable/url-search-params:
index.js

./node_modules/core-js/stable/weak-map:
index.js

./node_modules/core-js/stable/weak-set:
index.js

./node_modules/core-js/stage:
0.js
1.js
2.7.js
2.js
3.js
4.js
README.md
index.js
pre.js

./node_modules/core-js/web:
README.md
dom-collections.js
dom-exception.js
immediate.js
index.js
queue-microtask.js
structured-clone.js
timers.js
url-search-params.js
url.js

./node_modules/core-util-is:
LICENSE
README.md
lib/
package.json

./node_modules/core-util-is/lib:
util.js

./node_modules/cross-spawn:
CHANGELOG.md
LICENSE
README.md
index.js
lib/
package.json

./node_modules/cross-spawn/lib:
enoent.js
parse.js
util/

./node_modules/cross-spawn/lib/util:
escape.js
readShebang.js
resolveCommand.js

./node_modules/css-line-break:
CHANGELOG.md
LICENSE
README.md
dist/
package.json
rollup.config.ts

./node_modules/css-line-break/dist:
css-line-break.es5.js
css-line-break.es5.js.map
css-line-break.umd.js
css-line-break.umd.js.map
lib/
types/

./node_modules/css-line-break/dist/lib:
LineBreak.js
LineBreak.js.map
Util.js
Util.js.map
index.js
index.js.map
linebreak-trie.js
linebreak-trie.js.map

./node_modules/css-line-break/dist/types:
LineBreak.d.ts
Util.d.ts
index.d.ts
linebreak-trie.d.ts

./node_modules/cssesc:
LICENSE-MIT.txt
README.md
bin/
cssesc.js
man/
package.json

./node_modules/cssesc/bin:
cssesc*

./node_modules/cssesc/man:
cssesc.1

./node_modules/csstype:
LICENSE
README.md
index.d.ts
index.js.flow
package.json

./node_modules/debug:
LICENSE
README.md
package.json
src/

./node_modules/debug/src:
browser.js
common.js
index.js
node.js

./node_modules/deep-is:
LICENSE
README.markdown
example/
index.js
package.json
test/

./node_modules/deep-is/example:
cmp.js

./node_modules/deep-is/test:
NaN.js
cmp.js
neg-vs-pos-0.js

./node_modules/didyoumean:
LICENSE
README.md
didYouMean-1.2.1.js
didYouMean-1.2.1.min.js
package.json*

./node_modules/dlv:
README.md
dist/
index.js
package.json

./node_modules/dlv/dist:
dlv.es.js
dlv.es.js.map
dlv.js
dlv.js.map
dlv.umd.js
dlv.umd.js.map

./node_modules/docx:
LICENSE
README.md
build/
node_modules/
package.json

./node_modules/docx/build:
export/
file/
index.cjs
index.d.ts
index.iife.js
index.mjs
index.spec.d.ts
index.umd.js
patcher/
tests/
util/

./node_modules/docx/build/export:
formatter.d.ts
formatter.spec.d.ts
index.d.ts
packer/

./node_modules/docx/build/export/packer:
image-replacer.d.ts
image-replacer.spec.d.ts
next-compiler.d.ts
next-compiler.spec.d.ts
numbering-replacer.d.ts
packer.d.ts
packer.spec.d.ts

./node_modules/docx/build/file:
app-properties/
border/
checkbox/
content-types/
core-properties/
custom-properties/
document/
document-wrapper.d.ts
document-wrapper.spec.d.ts
drawing/
file-child.d.ts
file.d.ts
file.spec.d.ts
fonts/
footer/
footer-wrapper.d.ts
footer-wrapper.spec.d.ts
footnotes/
footnotes-wrapper.d.ts
footnotes-wrapper.spec.d.ts
header/
header-wrapper.d.ts
header-wrapper.spec.d.ts
header.d.ts
index.d.ts
media/
numbering/
paragraph/
relationships/
settings/
shading/
shared/
styles/
table/
table-of-contents/
track-revision/
vertical-align/
xml-components/

./node_modules/docx/build/file/app-properties:
app-properties-attributes.d.ts
app-properties.d.ts

./node_modules/docx/build/file/border:
border.d.ts
border.spec.d.ts
index.d.ts

./node_modules/docx/build/file/checkbox:
checkbox-symbol.d.ts
checkbox-util.d.ts
checkbox-util.spec.d.ts
checkbox.d.ts
checkbox.spec.d.ts
index.d.ts

./node_modules/docx/build/file/content-types:
content-types-attributes.d.ts
content-types.d.ts
content-types.spec.d.ts
default/
override/

./node_modules/docx/build/file/content-types/default:
default-attributes.d.ts
default.d.ts

./node_modules/docx/build/file/content-types/override:
override-attributes.d.ts
override.d.ts

./node_modules/docx/build/file/core-properties:
index.d.ts
properties.d.ts
properties.spec.d.ts

./node_modules/docx/build/file/custom-properties:
custom-properties-attributes.d.ts
custom-properties.d.ts
custom-properties.spec.d.ts
custom-property-attributes.d.ts
custom-property.d.ts
index.d.ts

./node_modules/docx/build/file/document:
body/
document-attributes.d.ts
document-background/
document.d.ts
document.spec.d.ts
index.d.ts

./node_modules/docx/build/file/document/body:
body.d.ts
body.spec.d.ts
index.d.ts
section-properties/

./node_modules/docx/build/file/document/body/section-properties:
index.d.ts
properties/
section-properties.d.ts
section-properties.spec.d.ts

./node_modules/docx/build/file/document/body/section-properties/properties:
column.d.ts
columns.d.ts
columns.spec.d.ts
doc-grid.d.ts
doc-grid.spec.d.ts
header-footer-reference.d.ts
header-footer-reference.spec.d.ts
index.d.ts
line-number.d.ts
page-borders.d.ts
page-borders.spec.d.ts
page-margin.d.ts
page-number.d.ts
page-size.d.ts
page-size.spec.d.ts
page-text-direction.d.ts
page-text-direction.spec.d.ts
section-type.d.ts
section-type.spec.d.ts

./node_modules/docx/build/file/document/document-background:
document-background.d.ts
document-background.spec.d.ts
index.d.ts

./node_modules/docx/build/file/drawing:
anchor/
doc-properties/
drawing.d.ts
drawing.spec.d.ts
effect-extent/
extent/
floating/
graphic-frame/
index.d.ts
inline/
text-wrap/

./node_modules/docx/build/file/drawing/anchor:
anchor-attributes.d.ts
anchor.d.ts
anchor.spec.d.ts
index.d.ts

./node_modules/docx/build/file/drawing/doc-properties:
doc-properties-children.d.ts
doc-properties-children.spec.d.ts
doc-properties.d.ts

./node_modules/docx/build/file/drawing/effect-extent:
effect-extent.d.ts

./node_modules/docx/build/file/drawing/extent:
extent-attributes.d.ts
extent.d.ts

./node_modules/docx/build/file/drawing/floating:
align.d.ts
align.spec.d.ts
floating-position.d.ts
horizontal-position.d.ts
horizontal-position.spec.d.ts
index.d.ts
position-offset.d.ts
position-offset.spec.d.ts
simple-pos.d.ts
simple-pos.spec.d.ts
vertical-position.d.ts
vertical-position.spec.d.ts

./node_modules/docx/build/file/drawing/graphic-frame:
graphic-frame-locks/
graphic-frame-properties.d.ts

./node_modules/docx/build/file/drawing/graphic-frame/graphic-frame-locks:
graphic-frame-lock-attributes.d.ts
graphic-frame-locks.d.ts

./node_modules/docx/build/file/drawing/inline:
graphic/
index.d.ts
inline.d.ts
inline.spec.d.ts

./node_modules/docx/build/file/drawing/inline/graphic:
graphic-data/
graphic.d.ts
index.d.ts

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data:
graphic-data-attribute.d.ts
graphic-data.d.ts
index.d.ts
pic/

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic:
blip/
index.d.ts
non-visual-pic-properties/
pic-attributes.d.ts
pic.d.ts
shape-properties/

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/blip:
blip-fill.d.ts
blip.d.ts
source-rectangle.d.ts
stretch.d.ts

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/non-visual-pic-properties:
child-non-visual-pic-properties/
non-visual-pic-properties.d.ts
non-visual-properties/

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/non-visual-pic-properties/child-non-visual-pic-properties:
child-non-visual-pic-properties.d.ts
pic-locks/

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/non-visual-pic-properties/child-non-visual-pic-properties/pic-locks:
pic-locks-attributes.d.ts
pic-locks.d.ts

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/non-visual-pic-properties/non-visual-properties:
non-visual-properties-attributes.d.ts
non-visual-properties.d.ts

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/shape-properties:
form/
form.spec.d.ts
outline/
preset-geometry/
shape-properties-attributes.d.ts
shape-properties.d.ts

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/shape-properties/form:
extents/
form.d.ts
index.d.ts
offset/

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/shape-properties/form/extents:
extents-attributes.d.ts
extents.d.ts

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/shape-properties/form/offset:
off-attributes.d.ts
off.d.ts

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/shape-properties/outline:
no-fill.d.ts
no-fill.spec.d.ts
outline.d.ts
outline.spec.d.ts
rgb-color.d.ts
scheme-color.d.ts
solid-fill.d.ts
solid-fill.spec.d.ts

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/shape-properties/preset-geometry:
adjustment-values/
preset-geometry-attributes.d.ts
preset-geometry.d.ts

./node_modules/docx/build/file/drawing/inline/graphic/graphic-data/pic/shape-properties/preset-geometry/adjustment-values:
adjustment-values.d.ts

./node_modules/docx/build/file/drawing/text-wrap:
index.d.ts
text-wrapping.d.ts
wrap-none.d.ts
wrap-square.d.ts
wrap-tight.d.ts
wrap-top-and-bottom.d.ts

./node_modules/docx/build/file/fonts:
create-regular-font.d.ts
font-table.d.ts
font-wrapper.d.ts
font.d.ts
font.spec.d.ts
index.d.ts
obfuscate-ttf-to-odttf.d.ts
obsfuscate-ttf-to-odtts.spec.d.ts

./node_modules/docx/build/file/footer:
footer-attributes.d.ts
footer.d.ts
footer.spec.d.ts
index.d.ts

./node_modules/docx/build/file/footnotes:
footnote/
footnotes-attributes.d.ts
footnotes.d.ts
index.d.ts

./node_modules/docx/build/file/footnotes/footnote:
footnote-attributes.d.ts
footnote.d.ts
footnote.spec.d.ts
index.d.ts
run/

./node_modules/docx/build/file/footnotes/footnote/run:
continuation-seperator-run.d.ts
continuation-seperator.d.ts
footnote-ref-run.d.ts
footnote-ref.d.ts
index.d.ts
reference-run.d.ts
seperator-run.d.ts
seperator.d.ts

./node_modules/docx/build/file/header:
header-attributes.d.ts
header.d.ts
header.spec.d.ts
index.d.ts

./node_modules/docx/build/file/media:
data.d.ts
index.d.ts
media.d.ts
media.spec.d.ts

./node_modules/docx/build/file/numbering:
abstract-numbering.d.ts
abstract-numbering.spec.d.ts
concrete-numbering.spec.d.ts
index.d.ts
level.d.ts
level.spec.d.ts
multi-level-type.d.ts
num.d.ts
numbering.d.ts
numbering.spec.d.ts

./node_modules/docx/build/file/paragraph:
formatting/
frame/
index.d.ts
links/
math/
paragraph.d.ts
paragraph.spec.d.ts
properties.d.ts
properties.spec.d.ts
run/

./node_modules/docx/build/file/paragraph/formatting:
alignment.d.ts
alignment.spec.d.ts
border.d.ts
border.spec.d.ts
break.d.ts
break.spec.d.ts
indent.d.ts
indent.spec.d.ts
index.d.ts
spacing.d.ts
spacing.spec.d.ts
style.d.ts
style.spec.d.ts
tab-stop.d.ts
tab-stop.spec.d.ts
unordered-list.d.ts
unordered-list.spec.d.ts
word-wrap.d.ts
word-wrap.spec.d.ts

./node_modules/docx/build/file/paragraph/frame:
frame-properties.d.ts
frame-properties.spec.d.ts
index.d.ts

./node_modules/docx/build/file/paragraph/links:
bookmark-attributes.d.ts
bookmark.d.ts
bookmark.spec.d.ts
hyperlink-attributes.d.ts
hyperlink.d.ts
hyperlink.spec.d.ts
index.d.ts
outline-level.d.ts
outline-level.spec.d.ts
pageref-field-instruction.d.ts
pageref-field-instruction.spec.d.ts
pageref.d.ts
pageref.spec.d.ts

./node_modules/docx/build/file/paragraph/math:
brackets/
fraction/
function/
index.d.ts
math-component.d.ts
math-run.d.ts
math-run.spec.d.ts
math-text.d.ts
math-text.spec.d.ts
math.d.ts
math.spec.d.ts
n-ary/
radical/
script/

./node_modules/docx/build/file/paragraph/math/brackets:
index.d.ts
math-angled-brackets.d.ts
math-angled-brackets.spec.d.ts
math-beginning-character.d.ts
math-beginning-character.spec.d.ts
math-bracket-properties.d.ts
math-bracket-properties.spec.d.ts
math-curly-brackets.d.ts
math-curly-brackets.spec.d.ts
math-ending-char.d.ts
math-ending-character.spec.d.ts
math-round-brackets.d.ts
math-round-brackets.spec.d.ts
math-square-brackets.d.ts
math-square-brackets.spec.d.ts

./node_modules/docx/build/file/paragraph/math/fraction:
index.d.ts
math-denominator.d.ts
math-denominator.spec.d.ts
math-fraction.d.ts
math-fraction.spec.d.ts
math-numerator.d.ts
math-numerator.spec.d.ts

./node_modules/docx/build/file/paragraph/math/function:
index.d.ts
math-function-name.d.ts
math-function-name.spec.d.ts
math-function-properties.d.ts
math-function-properties.spec.d.ts
math-function.d.ts
math-function.spec.d.ts

./node_modules/docx/build/file/paragraph/math/n-ary:
index.d.ts
math-accent-character.d.ts
math-accent-character.spec.d.ts
math-base.d.ts
math-base.spec.d.ts
math-integral.d.ts
math-integral.spec.d.ts
math-limit-location.d.ts
math-limit-location.spec.d.ts
math-n-ary-properties.d.ts
math-n-ary-properties.spec.d.ts
math-sub-script-hide.d.ts
math-sub-script-hide.spec.d.ts
math-sub-script.d.ts
math-sub-script.spec.d.ts
math-sum.d.ts
math-sum.spec.d.ts
math-super-script-hide.d.ts
math-super-script-hide.spec.d.ts
math-super-script.d.ts
math-super-script.spec.d.ts

./node_modules/docx/build/file/paragraph/math/radical:
index.d.ts
math-degree-hide.d.ts
math-degree-hide.spec.d.ts
math-degree.d.ts
math-degree.spec.d.ts
math-radical-properties.d.ts
math-radical-properties.spec.d.ts
math-radical.d.ts
math-radical.spec.d.ts

./node_modules/docx/build/file/paragraph/math/script:
index.d.ts
pre-sub-super-script/
sub-script/
sub-super-script/
super-script/

./node_modules/docx/build/file/paragraph/math/script/pre-sub-super-script:
index.d.ts
math-pre-sub-super-script-function-properties.d.ts
math-pre-sub-super-script-function-properties.spec.d.ts
math-pre-sub-super-script-function.d.ts
math-pre-sub-super-script-function.spec.d.ts

./node_modules/docx/build/file/paragraph/math/script/sub-script:
index.d.ts
math-sub-script-function-properties.d.ts
math-sub-script-function-properties.spec.d.ts
math-sub-script-function.d.ts
math-sub-script-function.spec.d.ts

./node_modules/docx/build/file/paragraph/math/script/sub-super-script:
index.d.ts
math-sub-super-script-function-properties.d.ts
math-sub-super-script-function-properties.spec.d.ts
math-sub-super-script-function.d.ts
math-sub-super-script-function.spec.d.ts

./node_modules/docx/build/file/paragraph/math/script/super-script:
index.d.ts
math-super-script-function-properties.d.ts
math-super-script-function-properties.spec.d.ts
math-super-script-function.d.ts
math-super-script-function.spec.d.ts

./node_modules/docx/build/file/paragraph/run:
break.d.ts
break.spec.d.ts
comment-run.d.ts
comment-run.spec.d.ts
emphasis-mark.d.ts
emphasis-mark.spec.d.ts
empty-children.d.ts
empty-children.spec.d.ts
field.d.ts
formatting.d.ts
formatting.spec.d.ts
image-run.d.ts
image-run.spec.d.ts
index.d.ts
language.d.ts
language.spec.d.ts
page-number.d.ts
page-number.spec.d.ts
positional-tab.d.ts
positional-tab.spec.d.ts
properties.d.ts
run-components/
run-fonts.d.ts
run-fonts.spec.d.ts
run.d.ts
run.spec.d.ts
script.d.ts
script.spec.d.ts
sequential-identifier-instruction.d.ts
sequential-identifier.d.ts
sequential-identifier.spec.d.ts
simple-field.d.ts
simple-field.spec.d.ts
symbol-run.d.ts
symbol-run.spec.d.ts
text-attributes.d.ts
text-run.d.ts
text-run.spec.d.ts
underline.d.ts
underline.spec.d.ts

./node_modules/docx/build/file/paragraph/run/run-components:
symbol.d.ts
symbol.spec.d.ts
text.d.ts
text.spec.d.ts

./node_modules/docx/build/file/relationships:
attributes.d.ts
index.d.ts
relationship/
relationships.d.ts
relationships.spec.d.ts

./node_modules/docx/build/file/relationships/relationship:
relationship-attributes.d.ts
relationship.d.ts

./node_modules/docx/build/file/settings:
compatibility-setting/
compatibility.d.ts
compatibility.spec.d.ts
index.d.ts
settings.d.ts
settings.spec.d.ts

./node_modules/docx/build/file/settings/compatibility-setting:
compatibility-setting.d.ts
compatibility-setting.spec.d.ts

./node_modules/docx/build/file/shading:
index.d.ts
shading.d.ts
shading.spec.d.ts

./node_modules/docx/build/file/shared:
alignment.d.ts
index.d.ts
number-format.d.ts
space-type.d.ts

./node_modules/docx/build/file/styles:
defaults/
external-styles-factory.d.ts
external-styles-factory.spec.d.ts
factory.d.ts
index.d.ts
latent-styles/
sample/
style/
styles.d.ts
styles.spec.d.ts

./node_modules/docx/build/file/styles/defaults:
document-defaults.d.ts
document-defaults.spec.d.ts
index.d.ts
paragraph-properties.d.ts
run-properties.d.ts

./node_modules/docx/build/file/styles/latent-styles:
exceptions.d.ts
exceptions.spec.d.ts
index.d.ts
latent-styles.d.ts
latent-styles.spec.d.ts

./node_modules/docx/build/file/styles/sample:
default-style.d.ts
default-style.spec.d.ts
index.d.ts

./node_modules/docx/build/file/styles/style:
character-style.d.ts
character-style.spec.d.ts
components.d.ts
components.spec.d.ts
default-styles.d.ts
default-styles.spec.d.ts
index.d.ts
paragraph-style.d.ts
paragraph-style.spec.d.ts
style.d.ts
style.spec.d.ts

./node_modules/docx/build/file/table:
grid.d.ts
grid.spec.d.ts
index.d.ts
table-cell/
table-properties/
table-row/
table-width.d.ts
table.d.ts
table.spec.d.ts

./node_modules/docx/build/file/table/table-cell:
index.d.ts
table-cell-components.d.ts
table-cell-properties.d.ts
table-cell-properties.spec.d.ts
table-cell.d.ts
table-cell.spec.d.ts

./node_modules/docx/build/file/table/table-properties:
index.d.ts
table-borders.d.ts
table-borders.spec.d.ts
table-cell-margin.d.ts
table-cell-margin.spec.d.ts
table-float-properties.d.ts
table-float-properties.spec.d.ts
table-layout.d.ts
table-properties.d.ts
table-properties.spec.d.ts

./node_modules/docx/build/file/table/table-row:
index.d.ts
table-row-height.d.ts
table-row-properties.d.ts
table-row-properties.spec.d.ts
table-row.d.ts
table-row.spec.d.ts

./node_modules/docx/build/file/table-of-contents:
field-instruction.d.ts
index.d.ts
sdt-content.d.ts
sdt-properties.d.ts
table-of-contents-properties.d.ts
table-of-contents.d.ts
table-of-contents.spec.d.ts

./node_modules/docx/build/file/track-revision:
index.d.ts
track-revision-components/
track-revision.d.ts

./node_modules/docx/build/file/track-revision/track-revision-components:
deleted-page-number.d.ts
deleted-page-number.spec.d.ts
deleted-text-run.d.ts
deleted-text-run.spec.d.ts
deleted-text.d.ts
deleted-text.spec.d.ts
inserted-text-run.d.ts
inserted-text-run.spec.d.ts

./node_modules/docx/build/file/vertical-align:
index.d.ts
vertical-align.d.ts

./node_modules/docx/build/file/xml-components:
attribute.spec.d.ts
attributes.d.ts
base.d.ts
default-attributes.d.ts
imported-xml-component.d.ts
imported-xml-component.spec.d.ts
index.d.ts
initializable-xml-component.d.ts
simple-elements.d.ts
simple-elements.spec.d.ts
xml-component.d.ts
xml-component.spec.d.ts
xmlable-object.d.ts

./node_modules/docx/build/patcher:
content-types-manager.d.ts
content-types-manager.spec.d.ts
from-docx.d.ts
from-docx.spec.d.ts
index.d.ts
paragraph-split-inject.d.ts
paragraph-split-inject.spec.d.ts
paragraph-token-replacer.d.ts
paragraph-token-replacer.spec.d.ts
relationship-manager.d.ts
relationship-manager.spec.d.ts
replacer.d.ts
replacer.spec.d.ts
run-renderer.d.ts
run-renderer.spec.d.ts
traverser.d.ts
traverser.spec.d.ts
util.d.ts
util.spec.d.ts

./node_modules/docx/build/tests:
utility.d.ts

./node_modules/docx/build/util:
convenience-functions.d.ts
convenience-functions.spec.d.ts
index.d.ts
values.d.ts
values.spec.d.ts

./node_modules/docx/node_modules:
nanoid/

./node_modules/docx/node_modules/nanoid:
LICENSE
README.md
bin/
index.browser.js
index.d.ts
index.js
nanoid.js
non-secure/
package.json
url-alphabet/

./node_modules/docx/node_modules/nanoid/bin:
nanoid.js*

./node_modules/docx/node_modules/nanoid/non-secure:
index.d.ts
index.js

./node_modules/docx/node_modules/nanoid/url-alphabet:
index.js

./node_modules/dompurify:
LICENSE
README.md
dist/
package.json

./node_modules/dompurify/dist:
purify.cjs.js
purify.cjs.js.map
purify.es.js
purify.es.js.map
purify.js
purify.js.map
purify.min.js
purify.min.js.map

./node_modules/eastasianwidth:
README.md
eastasianwidth.js
package.json

./node_modules/electron-to-chromium:
LICENSE
README.md
chromium-versions.js
chromium-versions.json
full-chromium-versions.js
full-chromium-versions.json
full-versions.js
full-versions.json
index.js
package.json
versions.js
versions.json

./node_modules/emoji-regex:
LICENSE-MIT.txt
README.md
RGI_Emoji.d.ts
RGI_Emoji.js
es2015/
index.d.ts
index.js
package.json
text.d.ts
text.js

./node_modules/emoji-regex/es2015:
RGI_Emoji.d.ts
RGI_Emoji.js
index.d.ts
index.js
text.d.ts
text.js

./node_modules/esbuild:
LICENSE.md
README.md
bin/
esbuild.wasm*
esm/
lib/
package.json
wasm_exec.js
wasm_exec_node.js

./node_modules/esbuild/bin:
esbuild*

./node_modules/esbuild/esm:
browser.d.ts
browser.js
browser.min.js

./node_modules/esbuild/lib:
browser.d.ts
browser.js
browser.min.js
main.d.ts
main.js

./node_modules/escalade:
dist/
index.d.mts
index.d.ts
license
package.json
readme.md
sync/

./node_modules/escalade/dist:
index.js
index.mjs

./node_modules/escalade/sync:
index.d.mts
index.d.ts
index.js
index.mjs

./node_modules/escape-string-regexp:
index.js
license
package.json
readme.md

./node_modules/eslint:
LICENSE
README.md
bin/
conf/
lib/
messages/
node_modules/
package.json

./node_modules/eslint/bin:
eslint.js*

./node_modules/eslint/conf:
default-cli-options.js
ecma-version.js
globals.js
replacements.json
rule-type-list.json

./node_modules/eslint/lib:
api.js
cli-engine/
cli.js
config/
eslint/
languages/
linter/
options.js
rule-tester/
rules/
services/
shared/
types/
universal.js
unsupported-api.js

./node_modules/eslint/lib/cli-engine:
cli-engine.js
file-enumerator.js
formatters/
hash.js
index.js
lint-result-cache.js
load-rules.js

./node_modules/eslint/lib/cli-engine/formatters:
formatters-meta.json
html.js
json-with-metadata.js
json.js
stylish.js

./node_modules/eslint/lib/config:
config-loader.js
config.js
default-config.js
flat-config-array.js
flat-config-helpers.js
flat-config-schema.js
rule-validator.js

./node_modules/eslint/lib/eslint:
eslint-helpers.js
eslint.js
index.js
legacy-eslint.js

./node_modules/eslint/lib/languages:
js/

./node_modules/eslint/lib/languages/js:
index.js
source-code/
validate-language-options.js

./node_modules/eslint/lib/languages/js/source-code:
index.js
source-code.js
token-store/

./node_modules/eslint/lib/languages/js/source-code/token-store:
backward-token-comment-cursor.js
backward-token-cursor.js
cursor.js
cursors.js
decorative-cursor.js
filter-cursor.js
forward-token-comment-cursor.js
forward-token-cursor.js
index.js
limit-cursor.js
padded-token-cursor.js
skip-cursor.js
utils.js

./node_modules/eslint/lib/linter:
apply-disable-directives.js
code-path-analysis/
file-context.js
index.js
interpolate.js
linter.js
node-event-generator.js
report-translator.js
rule-fixer.js
rules.js
safe-emitter.js
source-code-fixer.js
timing.js
vfile.js

./node_modules/eslint/lib/linter/code-path-analysis:
code-path-analyzer.js
code-path-segment.js
code-path-state.js
code-path.js
debug-helpers.js
fork-context.js
id-generator.js

./node_modules/eslint/lib/rule-tester:
index.js
rule-tester.js

./node_modules/eslint/lib/rules:
accessor-pairs.js
array-bracket-newline.js
array-bracket-spacing.js
array-callback-return.js
array-element-newline.js
arrow-body-style.js
arrow-parens.js
arrow-spacing.js
block-scoped-var.js
block-spacing.js
brace-style.js
callback-return.js
camelcase.js
capitalized-comments.js
class-methods-use-this.js
comma-dangle.js
comma-spacing.js
comma-style.js
complexity.js
computed-property-spacing.js
consistent-return.js
consistent-this.js
constructor-super.js
curly.js
default-case-last.js
default-case.js
default-param-last.js
dot-location.js
dot-notation.js
eol-last.js
eqeqeq.js
for-direction.js
func-call-spacing.js
func-name-matching.js
func-names.js
func-style.js
function-call-argument-newline.js
function-paren-newline.js
generator-star-spacing.js
getter-return.js
global-require.js
grouped-accessor-pairs.js
guard-for-in.js
handle-callback-err.js
id-blacklist.js
id-denylist.js
id-length.js
id-match.js
implicit-arrow-linebreak.js
indent-legacy.js
indent.js
index.js
init-declarations.js
jsx-quotes.js
key-spacing.js
keyword-spacing.js
line-comment-position.js
linebreak-style.js
lines-around-comment.js
lines-around-directive.js
lines-between-class-members.js
logical-assignment-operators.js
max-classes-per-file.js
max-depth.js
max-len.js
max-lines-per-function.js
max-lines.js
max-nested-callbacks.js
max-params.js
max-statements-per-line.js
max-statements.js
multiline-comment-style.js
multiline-ternary.js
new-cap.js
new-parens.js
newline-after-var.js
newline-before-return.js
newline-per-chained-call.js
no-alert.js
no-array-constructor.js
no-async-promise-executor.js
no-await-in-loop.js
no-bitwise.js
no-buffer-constructor.js
no-caller.js
no-case-declarations.js
no-catch-shadow.js
no-class-assign.js
no-compare-neg-zero.js
no-cond-assign.js
no-confusing-arrow.js
no-console.js
no-const-assign.js
no-constant-binary-expression.js
no-constant-condition.js
no-constructor-return.js
no-continue.js
no-control-regex.js
no-debugger.js
no-delete-var.js
no-div-regex.js
no-dupe-args.js
no-dupe-class-members.js
no-dupe-else-if.js
no-dupe-keys.js
no-duplicate-case.js
no-duplicate-imports.js
no-else-return.js
no-empty-character-class.js
no-empty-function.js
no-empty-pattern.js
no-empty-static-block.js
no-empty.js
no-eq-null.js
no-eval.js
no-ex-assign.js
no-extend-native.js
no-extra-bind.js
no-extra-boolean-cast.js
no-extra-label.js
no-extra-parens.js
no-extra-semi.js
no-fallthrough.js
no-floating-decimal.js
no-func-assign.js
no-global-assign.js
no-implicit-coercion.js
no-implicit-globals.js
no-implied-eval.js
no-import-assign.js
no-inline-comments.js
no-inner-declarations.js
no-invalid-regexp.js
no-invalid-this.js
no-irregular-whitespace.js
no-iterator.js
no-label-var.js
no-labels.js
no-lone-blocks.js
no-lonely-if.js
no-loop-func.js
no-loss-of-precision.js
no-magic-numbers.js
no-misleading-character-class.js
no-mixed-operators.js
no-mixed-requires.js
no-mixed-spaces-and-tabs.js
no-multi-assign.js
no-multi-spaces.js
no-multi-str.js
no-multiple-empty-lines.js
no-native-reassign.js
no-negated-condition.js
no-negated-in-lhs.js
no-nested-ternary.js
no-new-func.js
no-new-native-nonconstructor.js
no-new-object.js
no-new-require.js
no-new-symbol.js
no-new-wrappers.js
no-new.js
no-nonoctal-decimal-escape.js
no-obj-calls.js
no-object-constructor.js
no-octal-escape.js
no-octal.js
no-param-reassign.js
no-path-concat.js
no-plusplus.js
no-process-env.js
no-process-exit.js
no-promise-executor-return.js
no-proto.js
no-prototype-builtins.js
no-redeclare.js
no-regex-spaces.js
no-restricted-exports.js
no-restricted-globals.js
no-restricted-imports.js
no-restricted-modules.js
no-restricted-properties.js
no-restricted-syntax.js
no-return-assign.js
no-return-await.js
no-script-url.js
no-self-assign.js
no-self-compare.js
no-sequences.js
no-setter-return.js
no-shadow-restricted-names.js
no-shadow.js
no-spaced-func.js
no-sparse-arrays.js
no-sync.js
no-tabs.js
no-template-curly-in-string.js
no-ternary.js
no-this-before-super.js
no-throw-literal.js
no-trailing-spaces.js
no-undef-init.js
no-undef.js
no-undefined.js
no-underscore-dangle.js
no-unexpected-multiline.js
no-unmodified-loop-condition.js
no-unneeded-ternary.js
no-unreachable-loop.js
no-unreachable.js
no-unsafe-finally.js
no-unsafe-negation.js
no-unsafe-optional-chaining.js
no-unused-expressions.js
no-unused-labels.js
no-unused-private-class-members.js
no-unused-vars.js
no-use-before-define.js
no-useless-assignment.js
no-useless-backreference.js
no-useless-call.js
no-useless-catch.js
no-useless-computed-key.js
no-useless-concat.js
no-useless-constructor.js
no-useless-escape.js
no-useless-rename.js
no-useless-return.js
no-var.js
no-void.js
no-warning-comments.js
no-whitespace-before-property.js
no-with.js
nonblock-statement-body-position.js
object-curly-newline.js
object-curly-spacing.js
object-property-newline.js
object-shorthand.js
one-var-declaration-per-line.js
one-var.js
operator-assignment.js
operator-linebreak.js
padded-blocks.js
padding-line-between-statements.js
prefer-arrow-callback.js
prefer-const.js
prefer-destructuring.js
prefer-exponentiation-operator.js
prefer-named-capture-group.js
prefer-numeric-literals.js
prefer-object-has-own.js
prefer-object-spread.js
prefer-promise-reject-errors.js
prefer-reflect.js
prefer-regex-literals.js
prefer-rest-params.js
prefer-spread.js
prefer-template.js
quote-props.js
quotes.js
radix.js
require-atomic-updates.js
require-await.js
require-unicode-regexp.js
require-yield.js
rest-spread-spacing.js
semi-spacing.js
semi-style.js
semi.js
sort-imports.js
sort-keys.js
sort-vars.js
space-before-blocks.js
space-before-function-paren.js
space-in-parens.js
space-infix-ops.js
space-unary-ops.js
spaced-comment.js
strict.js
switch-colon-spacing.js
symbol-description.js
template-curly-spacing.js
template-tag-spacing.js
unicode-bom.js
use-isnan.js
utils/
valid-typeof.js
vars-on-top.js
wrap-iife.js
wrap-regex.js
yield-star-spacing.js
yoda.js

./node_modules/eslint/lib/rules/utils:
ast-utils.js
char-source.js
fix-tracker.js
keywords.js
lazy-loading-rule-map.js
regular-expressions.js
unicode/

./node_modules/eslint/lib/rules/utils/unicode:
index.js
is-combining-character.js
is-emoji-modifier.js
is-regional-indicator-symbol.js
is-surrogate-pair.js

./node_modules/eslint/lib/services:
parser-service.js
processor-service.js

./node_modules/eslint/lib/shared:
ajv.js
ast-utils.js
directives.js
flags.js
logging.js
runtime-info.js
serialization.js
severity.js
stats.js
string-utils.js
traverser.js
types.js

./node_modules/eslint/lib/types:
index.d.ts
rules/
universal.d.ts
use-at-your-own-risk.d.ts

./node_modules/eslint/lib/types/rules:
best-practices.d.ts
deprecated.d.ts
ecmascript-6.d.ts
index.d.ts
node-commonjs.d.ts
possible-errors.d.ts
strict-mode.d.ts
stylistic-issues.d.ts
variables.d.ts

./node_modules/eslint/messages:
all-files-ignored.js
all-matched-files-ignored.js
config-file-missing.js
eslintrc-incompat.js
eslintrc-plugins.js
extend-config-missing.js
failed-to-read-json.js
file-not-found.js
invalid-rule-options.js
invalid-rule-severity.js
no-config-found.js
plugin-conflict.js
plugin-invalid.js
plugin-missing.js
print-config-with-directory-path.js
shared.js
whitespace-found.js

./node_modules/eslint/node_modules:
ansi-styles/
chalk/
color-convert/
color-name/
escape-string-regexp/
has-flag/
supports-color/

./node_modules/eslint/node_modules/ansi-styles:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/eslint/node_modules/chalk:
index.d.ts
license
package.json
readme.md
source/

./node_modules/eslint/node_modules/chalk/source:
index.js
templates.js
util.js

./node_modules/eslint/node_modules/color-convert:
CHANGELOG.md
LICENSE
README.md
conversions.js
index.js
package.json
route.js

./node_modules/eslint/node_modules/color-name:
LICENSE
README.md
index.js
package.json

./node_modules/eslint/node_modules/escape-string-regexp:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/eslint/node_modules/has-flag:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/eslint/node_modules/supports-color:
browser.js
index.js
license
package.json
readme.md

./node_modules/eslint-plugin-react-hooks:
LICENSE
README.md
cjs/
index.js
package.json

./node_modules/eslint-plugin-react-hooks/cjs:
eslint-plugin-react-hooks.development.js
eslint-plugin-react-hooks.production.js

./node_modules/eslint-plugin-react-refresh:
LICENSE
README.md
index.js
package.json

./node_modules/eslint-scope:
LICENSE
README.md
dist/
lib/
package.json

./node_modules/eslint-scope/dist:
eslint-scope.cjs

./node_modules/eslint-scope/lib:
assert.js
definition.js
index.js
pattern-visitor.js
reference.js
referencer.js
scope-manager.js
scope.js
variable.js
version.js

./node_modules/eslint-visitor-keys:
LICENSE
README.md
dist/
lib/
package.json

./node_modules/eslint-visitor-keys/dist:
eslint-visitor-keys.cjs
eslint-visitor-keys.d.cts
index.d.ts
visitor-keys.d.ts

./node_modules/eslint-visitor-keys/lib:
index.js
visitor-keys.js

./node_modules/espree:
LICENSE
README.md
dist/
espree.js
lib/
package.json

./node_modules/espree/dist:
espree.cjs

./node_modules/espree/lib:
espree.js
features.js
options.js
token-translator.js
version.js

./node_modules/esquery:
README.md
dist/
license.txt
package.json
parser.js

./node_modules/esquery/dist:
esquery.esm.js
esquery.esm.min.js
esquery.esm.min.js.map
esquery.js
esquery.lite.js
esquery.lite.min.js
esquery.lite.min.js.map
esquery.min.js
esquery.min.js.map

./node_modules/esrecurse:
README.md
esrecurse.js
gulpfile.babel.js
package.json*

./node_modules/estraverse:
LICENSE.BSD
README.md
estraverse.js
gulpfile.js
package.json

./node_modules/esutils:
LICENSE.BSD
README.md
lib/
package.json

./node_modules/esutils/lib:
ast.js
code.js
keyword.js
utils.js

./node_modules/fast-deep-equal:
LICENSE
README.md
es6/
index.d.ts
index.js
package.json
react.d.ts
react.js

./node_modules/fast-deep-equal/es6:
index.d.ts
index.js
react.d.ts
react.js

./node_modules/fast-glob:
LICENSE
README.md
node_modules/
out/
package.json

./node_modules/fast-glob/node_modules:
glob-parent/

./node_modules/fast-glob/node_modules/glob-parent:
CHANGELOG.md
LICENSE
README.md
index.js
package.json

./node_modules/fast-glob/out:
index.d.ts
index.js
managers/
providers/
readers/
settings.d.ts
settings.js
types/
utils/

./node_modules/fast-glob/out/managers:
tasks.d.ts
tasks.js

./node_modules/fast-glob/out/providers:
async.d.ts
async.js
filters/
matchers/
provider.d.ts
provider.js
stream.d.ts
stream.js
sync.d.ts
sync.js
transformers/

./node_modules/fast-glob/out/providers/filters:
deep.d.ts
deep.js
entry.d.ts
entry.js
error.d.ts
error.js

./node_modules/fast-glob/out/providers/matchers:
matcher.d.ts
matcher.js
partial.d.ts
partial.js

./node_modules/fast-glob/out/providers/transformers:
entry.d.ts
entry.js

./node_modules/fast-glob/out/readers:
async.d.ts
async.js
reader.d.ts
reader.js
stream.d.ts
stream.js
sync.d.ts
sync.js

./node_modules/fast-glob/out/types:
index.d.ts
index.js

./node_modules/fast-glob/out/utils:
array.d.ts
array.js
errno.d.ts
errno.js
fs.d.ts
fs.js
index.d.ts
index.js
path.d.ts
path.js
pattern.d.ts
pattern.js
stream.d.ts
stream.js
string.d.ts
string.js

./node_modules/fast-json-stable-stringify:
LICENSE
README.md
benchmark/
example/
index.d.ts
index.js
package.json
test/

./node_modules/fast-json-stable-stringify/benchmark:
index.js
test.json

./node_modules/fast-json-stable-stringify/example:
key_cmp.js
nested.js
str.js
value_cmp.js

./node_modules/fast-json-stable-stringify/test:
cmp.js
nested.js
str.js
to-json.js

./node_modules/fast-levenshtein:
LICENSE.md
README.md
levenshtein.js
package.json

./node_modules/fastq:
LICENSE
README.md
bench.js
example.js
example.mjs
index.d.ts
package.json
queue.js
test/

./node_modules/fastq/test:
example.ts
promise.js
test.js
tsconfig.json

./node_modules/fflate:
CHANGELOG.md
LICENSE
README.md
esm/
lib/
package.json
umd/

./node_modules/fflate/esm:
browser.d.ts
browser.js
index.d.mts
index.mjs

./node_modules/fflate/lib:
browser.cjs
browser.d.cts
index.cjs
index.d.ts
node-worker.cjs
node.cjs
node.d.cts
worker.cjs

./node_modules/fflate/umd:
index.js

./node_modules/file-entry-cache:
LICENSE
README.md
cache.js
package.json

./node_modules/file-saver:
CHANGELOG.md
LICENSE.md
README.md
dist/
package.json
src/

./node_modules/file-saver/dist:
FileSaver.js
FileSaver.min.js
FileSaver.min.js.map

./node_modules/file-saver/src:
FileSaver.js

./node_modules/fill-range:
LICENSE
README.md
index.js
package.json

./node_modules/find-up:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/flat-cache:
LICENSE
README.md
changelog.md
package.json
src/

./node_modules/flat-cache/src:
cache.js
del.js
utils.js

./node_modules/flatted:
LICENSE
README.md
cjs/
es.js
esm/
esm.js
index.js
min.js
package.json
php/
python/
types/

./node_modules/flatted/cjs:
index.js
package.json

./node_modules/flatted/esm:
index.js

./node_modules/flatted/php:
flatted.php

./node_modules/flatted/python:
__pycache__/
flatted.py
test.py

./node_modules/flatted/python/__pycache__:
flatted.cpython-311.pyc

./node_modules/flatted/types:
index.d.ts

./node_modules/foreground-child:
LICENSE
README.md
dist/
package.json

./node_modules/foreground-child/dist:
commonjs/
esm/

./node_modules/foreground-child/dist/commonjs:
all-signals.d.ts
all-signals.d.ts.map
all-signals.js
all-signals.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
proxy-signals.d.ts
proxy-signals.d.ts.map
proxy-signals.js
proxy-signals.js.map
watchdog.d.ts
watchdog.d.ts.map
watchdog.js
watchdog.js.map

./node_modules/foreground-child/dist/esm:
all-signals.d.ts
all-signals.d.ts.map
all-signals.js
all-signals.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
proxy-signals.d.ts
proxy-signals.d.ts.map
proxy-signals.js
proxy-signals.js.map
watchdog.d.ts
watchdog.d.ts.map
watchdog.js
watchdog.js.map

./node_modules/fraction.js:
LICENSE
README.md
bigfraction.js
fraction.cjs
fraction.d.ts
fraction.js
fraction.min.js
package.json

./node_modules/function-bind:
CHANGELOG.md
LICENSE
README.md
implementation.js
index.js
package.json
test/

./node_modules/function-bind/test:
index.js

./node_modules/gensync:
LICENSE
README.md
index.js
index.js.flow
package.json
test/

./node_modules/gensync/test:
index.test.js

./node_modules/glob:
LICENSE
README.md
dist/
node_modules/
package.json

./node_modules/glob/dist:
commonjs/
esm/

./node_modules/glob/dist/commonjs:
glob.d.ts
glob.d.ts.map
glob.js
glob.js.map
has-magic.d.ts
has-magic.d.ts.map
has-magic.js
has-magic.js.map
ignore.d.ts
ignore.d.ts.map
ignore.js
ignore.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
pattern.d.ts
pattern.d.ts.map
pattern.js
pattern.js.map
processor.d.ts
processor.d.ts.map
processor.js
processor.js.map
walker.d.ts
walker.d.ts.map
walker.js
walker.js.map

./node_modules/glob/dist/esm:
bin.d.mts
bin.d.mts.map
bin.mjs*
bin.mjs.map
glob.d.ts
glob.d.ts.map
glob.js
glob.js.map
has-magic.d.ts
has-magic.d.ts.map
has-magic.js
has-magic.js.map
ignore.d.ts
ignore.d.ts.map
ignore.js
ignore.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
pattern.d.ts
pattern.d.ts.map
pattern.js
pattern.js.map
processor.d.ts
processor.d.ts.map
processor.js
processor.js.map
walker.d.ts
walker.d.ts.map
walker.js
walker.js.map

./node_modules/glob/node_modules:
brace-expansion/
minimatch/

./node_modules/glob/node_modules/brace-expansion:
LICENSE
README.md
index.js
package.json

./node_modules/glob/node_modules/minimatch:
LICENSE
README.md
dist/
package.json

./node_modules/glob/node_modules/minimatch/dist:
commonjs/
esm/

./node_modules/glob/node_modules/minimatch/dist/commonjs:
assert-valid-pattern.d.ts
assert-valid-pattern.d.ts.map
assert-valid-pattern.js
assert-valid-pattern.js.map
ast.d.ts
ast.d.ts.map
ast.js
ast.js.map
brace-expressions.d.ts
brace-expressions.d.ts.map
brace-expressions.js
brace-expressions.js.map
escape.d.ts
escape.d.ts.map
escape.js
escape.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
unescape.d.ts
unescape.d.ts.map
unescape.js
unescape.js.map

./node_modules/glob/node_modules/minimatch/dist/esm:
assert-valid-pattern.d.ts
assert-valid-pattern.d.ts.map
assert-valid-pattern.js
assert-valid-pattern.js.map
ast.d.ts
ast.d.ts.map
ast.js
ast.js.map
brace-expressions.d.ts
brace-expressions.d.ts.map
brace-expressions.js
brace-expressions.js.map
escape.d.ts
escape.d.ts.map
escape.js
escape.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
unescape.d.ts
unescape.d.ts.map
unescape.js
unescape.js.map

./node_modules/glob-parent:
LICENSE
README.md
index.js
package.json

./node_modules/globals:
globals.json
index.d.ts
index.js
license
package.json
readme.md

./node_modules/graphemer:
CHANGELOG.md
LICENSE
README.md
lib/
package.json

./node_modules/graphemer/lib:
Graphemer.d.ts
Graphemer.d.ts.map
Graphemer.js
GraphemerHelper.d.ts
GraphemerHelper.d.ts.map
GraphemerHelper.js
GraphemerIterator.d.ts
GraphemerIterator.d.ts.map
GraphemerIterator.js
boundaries.d.ts
boundaries.d.ts.map
boundaries.js
index.d.ts
index.d.ts.map
index.js

./node_modules/has-flag:
index.js
license
package.json
readme.md

./node_modules/hasown:
CHANGELOG.md
LICENSE
README.md
index.d.ts
index.js
package.json
tsconfig.json

./node_modules/html2canvas:
CHANGELOG.md
LICENSE
README.md
dist/
package.json
tsconfig.json

./node_modules/html2canvas/dist:
html2canvas.esm.js
html2canvas.esm.js.map
html2canvas.js
html2canvas.js.map
html2canvas.min.js
lib/
types/

./node_modules/html2canvas/dist/lib:
__tests__/
core/
css/
dom/
index.js
index.js.map
invariant.js
invariant.js.map
render/

./node_modules/html2canvas/dist/lib/__tests__:
index.js
index.js.map

./node_modules/html2canvas/dist/lib/core:
__mocks__/
__tests__/
bitwise.js
bitwise.js.map
cache-storage.js
cache-storage.js.map
context.js
context.js.map
debugger.js
debugger.js.map
features.js
features.js.map
logger.js
logger.js.map
util.js
util.js.map

./node_modules/html2canvas/dist/lib/core/__mocks__:
cache-storage.js
cache-storage.js.map
context.js
context.js.map
features.js
features.js.map
logger.js
logger.js.map

./node_modules/html2canvas/dist/lib/core/__tests__:
cache-storage.js
cache-storage.js.map
logger.js
logger.js.map

./node_modules/html2canvas/dist/lib/css:
IPropertyDescriptor.js
IPropertyDescriptor.js.map
ITypeDescriptor.js
ITypeDescriptor.js.map
index.js
index.js.map
layout/
property-descriptors/
syntax/
types/

./node_modules/html2canvas/dist/lib/css/layout:
__mocks__/
bounds.js
bounds.js.map
text.js
text.js.map

./node_modules/html2canvas/dist/lib/css/layout/__mocks__:
bounds.js
bounds.js.map

./node_modules/html2canvas/dist/lib/css/property-descriptors:
__tests__/
background-clip.js
background-clip.js.map
background-color.js
background-color.js.map
background-image.js
background-image.js.map
background-origin.js
background-origin.js.map
background-position.js
background-position.js.map
background-repeat.js
background-repeat.js.map
background-size.js
background-size.js.map
border-color.js
border-color.js.map
border-radius.js
border-radius.js.map
border-style.js
border-style.js.map
border-width.js
border-width.js.map
box-shadow.js
box-shadow.js.map
color.js
color.js.map
content.js
content.js.map
counter-increment.js
counter-increment.js.map
counter-reset.js
counter-reset.js.map
direction.js
direction.js.map
display.js
display.js.map
duration.js
duration.js.map
float.js
float.js.map
font-family.js
font-family.js.map
font-size.js
font-size.js.map
font-style.js
font-style.js.map
font-variant.js
font-variant.js.map
font-weight.js
font-weight.js.map
letter-spacing.js
letter-spacing.js.map
line-break.js
line-break.js.map
line-height.js
line-height.js.map
list-style-image.js
list-style-image.js.map
list-style-position.js
list-style-position.js.map
list-style-type.js
list-style-type.js.map
margin.js
margin.js.map
opacity.js
opacity.js.map
overflow-wrap.js
overflow-wrap.js.map
overflow.js
overflow.js.map
padding.js
padding.js.map
paint-order.js
paint-order.js.map
position.js
position.js.map
quotes.js
quotes.js.map
text-align.js
text-align.js.map
text-decoration-color.js
text-decoration-color.js.map
text-decoration-line.js
text-decoration-line.js.map
text-shadow.js
text-shadow.js.map
text-transform.js
text-transform.js.map
transform-origin.js
transform-origin.js.map
transform.js
transform.js.map
visibility.js
visibility.js.map
webkit-text-stroke-color.js
webkit-text-stroke-color.js.map
webkit-text-stroke-width.js
webkit-text-stroke-width.js.map
word-break.js
word-break.js.map
z-index.js
z-index.js.map

./node_modules/html2canvas/dist/lib/css/property-descriptors/__tests__:
background-tests.js
background-tests.js.map
font-family.js
font-family.js.map
paint-order.js
paint-order.js.map
text-shadow.js
text-shadow.js.map
transform-tests.js
transform-tests.js.map

./node_modules/html2canvas/dist/lib/css/syntax:
__tests__/
parser.js
parser.js.map
tokenizer.js
tokenizer.js.map

./node_modules/html2canvas/dist/lib/css/syntax/__tests__:
tokernizer-tests.js
tokernizer-tests.js.map

./node_modules/html2canvas/dist/lib/css/types:
__tests__/
angle.js
angle.js.map
color.js
color.js.map
functions/
image.js
image.js.map
index.js
index.js.map
length-percentage.js
length-percentage.js.map
length.js
length.js.map
time.js
time.js.map

./node_modules/html2canvas/dist/lib/css/types/__tests__:
color-tests.js
color-tests.js.map
image-tests.js
image-tests.js.map

./node_modules/html2canvas/dist/lib/css/types/functions:
-prefix-linear-gradient.js
-prefix-linear-gradient.js.map
-prefix-radial-gradient.js
-prefix-radial-gradient.js.map
-webkit-gradient.js
-webkit-gradient.js.map
__tests__/
counter.js
counter.js.map
gradient.js
gradient.js.map
linear-gradient.js
linear-gradient.js.map
radial-gradient.js
radial-gradient.js.map

./node_modules/html2canvas/dist/lib/css/types/functions/__tests__:
radial-gradient.js
radial-gradient.js.map

./node_modules/html2canvas/dist/lib/dom:
__mocks__/
document-cloner.js
document-cloner.js.map
element-container.js
element-container.js.map
elements/
node-parser.js
node-parser.js.map
replaced-elements/
text-container.js
text-container.js.map

./node_modules/html2canvas/dist/lib/dom/__mocks__:
document-cloner.js
document-cloner.js.map

./node_modules/html2canvas/dist/lib/dom/elements:
li-element-container.js
li-element-container.js.map
ol-element-container.js
ol-element-container.js.map
select-element-container.js
select-element-container.js.map
textarea-element-container.js
textarea-element-container.js.map

./node_modules/html2canvas/dist/lib/dom/replaced-elements:
canvas-element-container.js
canvas-element-container.js.map
iframe-element-container.js
iframe-element-container.js.map
image-element-container.js
image-element-container.js.map
index.js
index.js.map
input-element-container.js
input-element-container.js.map
pseudo-elements.js
pseudo-elements.js.map
svg-element-container.js
svg-element-container.js.map

./node_modules/html2canvas/dist/lib/render:
background.js
background.js.map
bezier-curve.js
bezier-curve.js.map
border.js
border.js.map
bound-curves.js
bound-curves.js.map
box-sizing.js
box-sizing.js.map
canvas/
effects.js
effects.js.map
font-metrics.js
font-metrics.js.map
path.js
path.js.map
renderer.js
renderer.js.map
stacking-context.js
stacking-context.js.map
vector.js
vector.js.map

./node_modules/html2canvas/dist/lib/render/canvas:
canvas-renderer.js
canvas-renderer.js.map
foreignobject-renderer.js
foreignobject-renderer.js.map

./node_modules/html2canvas/dist/types:
__tests__/
core/
css/
dom/
index.d.ts
invariant.d.ts
render/

./node_modules/html2canvas/dist/types/__tests__:
index.d.ts

./node_modules/html2canvas/dist/types/core:
__mocks__/
__tests__/
bitwise.d.ts
cache-storage.d.ts
context.d.ts
debugger.d.ts
features.d.ts
logger.d.ts
util.d.ts

./node_modules/html2canvas/dist/types/core/__mocks__:
cache-storage.d.ts
context.d.ts
features.d.ts
logger.d.ts

./node_modules/html2canvas/dist/types/core/__tests__:
cache-storage.d.ts
logger.d.ts

./node_modules/html2canvas/dist/types/css:
IPropertyDescriptor.d.ts
ITypeDescriptor.d.ts
index.d.ts
layout/
property-descriptors/
syntax/
types/

./node_modules/html2canvas/dist/types/css/layout:
__mocks__/
bounds.d.ts
text.d.ts

./node_modules/html2canvas/dist/types/css/layout/__mocks__:
bounds.d.ts

./node_modules/html2canvas/dist/types/css/property-descriptors:
__tests__/
background-clip.d.ts
background-color.d.ts
background-image.d.ts
background-origin.d.ts
background-position.d.ts
background-repeat.d.ts
background-size.d.ts
border-color.d.ts
border-radius.d.ts
border-style.d.ts
border-width.d.ts
box-shadow.d.ts
color.d.ts
content.d.ts
counter-increment.d.ts
counter-reset.d.ts
direction.d.ts
display.d.ts
duration.d.ts
float.d.ts
font-family.d.ts
font-size.d.ts
font-style.d.ts
font-variant.d.ts
font-weight.d.ts
letter-spacing.d.ts
line-break.d.ts
line-height.d.ts
list-style-image.d.ts
list-style-position.d.ts
list-style-type.d.ts
margin.d.ts
opacity.d.ts
overflow-wrap.d.ts
overflow.d.ts
padding.d.ts
paint-order.d.ts
position.d.ts
quotes.d.ts
text-align.d.ts
text-decoration-color.d.ts
text-decoration-line.d.ts
text-shadow.d.ts
text-transform.d.ts
transform-origin.d.ts
transform.d.ts
visibility.d.ts
webkit-text-stroke-color.d.ts
webkit-text-stroke-width.d.ts
word-break.d.ts
z-index.d.ts

./node_modules/html2canvas/dist/types/css/property-descriptors/__tests__:
background-tests.d.ts
font-family.d.ts
paint-order.d.ts
text-shadow.d.ts
transform-tests.d.ts

./node_modules/html2canvas/dist/types/css/syntax:
__tests__/
parser.d.ts
tokenizer.d.ts

./node_modules/html2canvas/dist/types/css/syntax/__tests__:
tokernizer-tests.d.ts

./node_modules/html2canvas/dist/types/css/types:
__tests__/
angle.d.ts
color.d.ts
functions/
image.d.ts
index.d.ts
length-percentage.d.ts
length.d.ts
time.d.ts

./node_modules/html2canvas/dist/types/css/types/__tests__:
color-tests.d.ts
image-tests.d.ts

./node_modules/html2canvas/dist/types/css/types/functions:
-prefix-linear-gradient.d.ts
-prefix-radial-gradient.d.ts
-webkit-gradient.d.ts
__tests__/
counter.d.ts
gradient.d.ts
linear-gradient.d.ts
radial-gradient.d.ts

./node_modules/html2canvas/dist/types/css/types/functions/__tests__:
radial-gradient.d.ts

./node_modules/html2canvas/dist/types/dom:
__mocks__/
document-cloner.d.ts
element-container.d.ts
elements/
node-parser.d.ts
replaced-elements/
text-container.d.ts

./node_modules/html2canvas/dist/types/dom/__mocks__:
document-cloner.d.ts

./node_modules/html2canvas/dist/types/dom/elements:
li-element-container.d.ts
ol-element-container.d.ts
select-element-container.d.ts
textarea-element-container.d.ts

./node_modules/html2canvas/dist/types/dom/replaced-elements:
canvas-element-container.d.ts
iframe-element-container.d.ts
image-element-container.d.ts
index.d.ts
input-element-container.d.ts
pseudo-elements.d.ts
svg-element-container.d.ts

./node_modules/html2canvas/dist/types/render:
background.d.ts
bezier-curve.d.ts
border.d.ts
bound-curves.d.ts
box-sizing.d.ts
canvas/
effects.d.ts
font-metrics.d.ts
path.d.ts
renderer.d.ts
stacking-context.d.ts
vector.d.ts

./node_modules/html2canvas/dist/types/render/canvas:
canvas-renderer.d.ts
foreignobject-renderer.d.ts

./node_modules/ignore:
LICENSE-MIT
README.md
index.d.ts
index.js
legacy.js
package.json

./node_modules/immediate:
LICENSE.txt
README.md
dist/
lib/
package.json

./node_modules/immediate/dist:
immediate.js
immediate.min.js

./node_modules/immediate/lib:
browser.js
index.js

./node_modules/import-fresh:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/imurmurhash:
README.md
imurmurhash.js
imurmurhash.min.js
package.json

./node_modules/inherits:
LICENSE
README.md
inherits.js
inherits_browser.js
package.json

./node_modules/is-binary-path:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/is-core-module:
CHANGELOG.md
LICENSE
README.md
core.json
index.js
package.json
test/

./node_modules/is-core-module/test:
index.js

./node_modules/is-extglob:
LICENSE
README.md
index.js
package.json

./node_modules/is-fullwidth-code-point:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/is-glob:
LICENSE
README.md
index.js
package.json

./node_modules/is-number:
LICENSE
README.md
index.js
package.json

./node_modules/isarray:
Makefile
README.md
component.json
index.js
package.json
test.js

./node_modules/isexe:
LICENSE
README.md
index.js
mode.js
package.json
test/
windows.js

./node_modules/isexe/test:
basic.js

./node_modules/jackspeak:
LICENSE.md
README.md
dist/
package.json

./node_modules/jackspeak/dist:
commonjs/
esm/

./node_modules/jackspeak/dist/commonjs:
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
parse-args-cjs.cjs.map
parse-args-cjs.d.cts.map
parse-args.d.ts
parse-args.js

./node_modules/jackspeak/dist/esm:
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
parse-args.d.ts
parse-args.d.ts.map
parse-args.js
parse-args.js.map

./node_modules/jiti:
LICENSE
README.md
bin/
dist/
lib/
package.json
register.js

./node_modules/jiti/bin:
jiti.js*

./node_modules/jiti/dist:
babel.d.ts
babel.js
jiti.d.ts
jiti.js
plugins/
types.d.ts
utils.d.ts

./node_modules/jiti/dist/plugins:
babel-plugin-transform-import-meta.d.ts
import-meta-env.d.ts

./node_modules/jiti/lib:
index.js

./node_modules/js-tokens:
CHANGELOG.md
LICENSE
README.md
index.js
package.json

./node_modules/js-yaml:
CHANGELOG.md
LICENSE
README.md
bin/
dist/
index.js
lib/
package.json

./node_modules/js-yaml/bin:
js-yaml.js*

./node_modules/js-yaml/dist:
js-yaml.js
js-yaml.min.js
js-yaml.mjs

./node_modules/js-yaml/lib:
common.js
dumper.js
exception.js
loader.js
schema/
schema.js
snippet.js
type/
type.js

./node_modules/js-yaml/lib/schema:
core.js
default.js
failsafe.js
json.js

./node_modules/js-yaml/lib/type:
binary.js
bool.js
float.js
int.js
map.js
merge.js
null.js
omap.js
pairs.js
seq.js
set.js
str.js
timestamp.js

./node_modules/jsesc:
LICENSE-MIT.txt
README.md
bin/
jsesc.js
man/
package.json

./node_modules/jsesc/bin:
jsesc*

./node_modules/jsesc/man:
jsesc.1

./node_modules/json-buffer:
LICENSE
README.md
index.js
package.json
test/

./node_modules/json-buffer/test:
index.js

./node_modules/json-schema-traverse:
LICENSE
README.md
index.js
package.json
spec/

./node_modules/json-schema-traverse/spec:
fixtures/
index.spec.js

./node_modules/json-schema-traverse/spec/fixtures:
schema.js

./node_modules/json-stable-stringify-without-jsonify:
LICENSE
example/
index.js
package.json
readme.markdown
test/

./node_modules/json-stable-stringify-without-jsonify/example:
key_cmp.js
nested.js
str.js
value_cmp.js

./node_modules/json-stable-stringify-without-jsonify/test:
cmp.js
nested.js
replacer.js
space.js
str.js
to-json.js

./node_modules/json5:
LICENSE.md
README.md
dist/
lib/
package.json

./node_modules/json5/dist:
index.js
index.min.js
index.min.mjs
index.mjs

./node_modules/json5/lib:
cli.js*
index.d.ts
index.js
parse.d.ts
parse.js
register.js
require.js
stringify.d.ts
stringify.js
unicode.d.ts
unicode.js
util.d.ts
util.js

./node_modules/jspdf:
LICENSE
README.md
dist/
package.json
types/

./node_modules/jspdf/dist:
jspdf.es.js
jspdf.es.js.map
jspdf.es.min.js
jspdf.es.min.js.map
jspdf.node.js
jspdf.node.js.map
jspdf.node.min.js
jspdf.node.min.js.map
jspdf.umd.js
jspdf.umd.js.map
jspdf.umd.min.js
jspdf.umd.min.js.map
polyfills.es.js
polyfills.umd.js

./node_modules/jspdf/types:
index.d.ts

./node_modules/jszip:
CHANGES.md
LICENSE.markdown
README.markdown
deps.js
dist/
graph.svg
index.d.ts
lib/
package.json
sponsors.md
tsconfig.json
vendor/

./node_modules/jszip/dist:
jszip.js
jszip.min.js

./node_modules/jszip/lib:
base64.js
compressedObject.js
compressions.js
crc32.js
defaults.js
external.js
flate.js
generate/
index.js
license_header.js
load.js
nodejs/
nodejsUtils.js
object.js
readable-stream-browser.js
reader/
signature.js
stream/
support.js
utf8.js
utils.js
zipEntries.js
zipEntry.js
zipObject.js

./node_modules/jszip/lib/generate:
ZipFileWorker.js
index.js

./node_modules/jszip/lib/nodejs:
NodejsStreamInputAdapter.js
NodejsStreamOutputAdapter.js

./node_modules/jszip/lib/reader:
ArrayReader.js
DataReader.js
NodeBufferReader.js
StringReader.js
Uint8ArrayReader.js
readerFor.js

./node_modules/jszip/lib/stream:
ConvertWorker.js
Crc32Probe.js
DataLengthProbe.js
DataWorker.js
GenericWorker.js
StreamHelper.js

./node_modules/jszip/vendor:
FileSaver.js

./node_modules/keyv:
README.md
package.json
src/

./node_modules/keyv/src:
index.d.ts
index.js

./node_modules/levn:
LICENSE
README.md
lib/
package.json

./node_modules/levn/lib:
cast.js
index.js
parse-string.js

./node_modules/lie:
README.md
dist/
lib/
license.md
lie.d.ts
package.json
polyfill.js

./node_modules/lie/dist:
lie.js
lie.min.js
lie.polyfill.js
lie.polyfill.min.js

./node_modules/lie/lib:
browser.js
index.js

./node_modules/lilconfig:
LICENSE
dist/
package.json
readme.md

./node_modules/lilconfig/dist:
index.d.ts
index.js

./node_modules/lines-and-columns:
LICENSE
README.md
build/
package.json

./node_modules/lines-and-columns/build:
index.d.ts
index.js

./node_modules/locate-path:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/lodash.merge:
LICENSE
README.md
index.js
package.json

./node_modules/loose-envify:
LICENSE
README.md
cli.js*
custom.js
index.js
loose-envify.js
package.json
replace.js

./node_modules/lru-cache:
LICENSE
README.md
index.js
package.json

./node_modules/lucide-react:
LICENSE
README.md
dist/
dynamicIconImports.d.ts
dynamicIconImports.js
dynamicIconImports.js.map
package.json

./node_modules/lucide-react/dist:
cjs/
esm/
lucide-react.d.ts
umd/

./node_modules/lucide-react/dist/cjs:
lucide-react.js
lucide-react.js.map

./node_modules/lucide-react/dist/esm:
createLucideIcon.js
createLucideIcon.js.map
defaultAttributes.js
defaultAttributes.js.map
icons/
lucide-react.js
lucide-react.js.map

./node_modules/lucide-react/dist/esm/icons:
a-arrow-down.js
a-arrow-down.js.map
a-arrow-up.js
a-arrow-up.js.map
a-large-small.js
a-large-small.js.map
accessibility.js
accessibility.js.map
activity-square.js
activity-square.js.map
activity.js
activity.js.map
air-vent.js
air-vent.js.map
airplay.js
airplay.js.map
alarm-check.js
alarm-check.js.map
alarm-clock-check.js
alarm-clock-check.js.map
alarm-clock-minus.js
alarm-clock-minus.js.map
alarm-clock-off.js
alarm-clock-off.js.map
alarm-clock-plus.js
alarm-clock-plus.js.map
alarm-clock.js
alarm-clock.js.map
alarm-minus.js
alarm-minus.js.map
alarm-plus.js
alarm-plus.js.map
alarm-smoke.js
alarm-smoke.js.map
album.js
album.js.map
alert-circle.js
alert-circle.js.map
alert-octagon.js
alert-octagon.js.map
alert-triangle.js
alert-triangle.js.map
align-center-horizontal.js
align-center-horizontal.js.map
align-center-vertical.js
align-center-vertical.js.map
align-center.js
align-center.js.map
align-end-horizontal.js
align-end-horizontal.js.map
align-end-vertical.js
align-end-vertical.js.map
align-horizontal-distribute-center.js
align-horizontal-distribute-center.js.map
align-horizontal-distribute-end.js
align-horizontal-distribute-end.js.map
align-horizontal-distribute-start.js
align-horizontal-distribute-start.js.map
align-horizontal-justify-center.js
align-horizontal-justify-center.js.map
align-horizontal-justify-end.js
align-horizontal-justify-end.js.map
align-horizontal-justify-start.js
align-horizontal-justify-start.js.map
align-horizontal-space-around.js
align-horizontal-space-around.js.map
align-horizontal-space-between.js
align-horizontal-space-between.js.map
align-justify.js
align-justify.js.map
align-left.js
align-left.js.map
align-right.js
align-right.js.map
align-start-horizontal.js
align-start-horizontal.js.map
align-start-vertical.js
align-start-vertical.js.map
align-vertical-distribute-center.js
align-vertical-distribute-center.js.map
align-vertical-distribute-end.js
align-vertical-distribute-end.js.map
align-vertical-distribute-start.js
align-vertical-distribute-start.js.map
align-vertical-justify-center.js
align-vertical-justify-center.js.map
align-vertical-justify-end.js
align-vertical-justify-end.js.map
align-vertical-justify-start.js
align-vertical-justify-start.js.map
align-vertical-space-around.js
align-vertical-space-around.js.map
align-vertical-space-between.js
align-vertical-space-between.js.map
ambulance.js
ambulance.js.map
ampersand.js
ampersand.js.map
ampersands.js
ampersands.js.map
anchor.js
anchor.js.map
angry.js
angry.js.map
annoyed.js
annoyed.js.map
antenna.js
antenna.js.map
anvil.js
anvil.js.map
aperture.js
aperture.js.map
app-window.js
app-window.js.map
apple.js
apple.js.map
archive-restore.js
archive-restore.js.map
archive-x.js
archive-x.js.map
archive.js
archive.js.map
area-chart.js
area-chart.js.map
armchair.js
armchair.js.map
arrow-big-down-dash.js
arrow-big-down-dash.js.map
arrow-big-down.js
arrow-big-down.js.map
arrow-big-left-dash.js
arrow-big-left-dash.js.map
arrow-big-left.js
arrow-big-left.js.map
arrow-big-right-dash.js
arrow-big-right-dash.js.map
arrow-big-right.js
arrow-big-right.js.map
arrow-big-up-dash.js
arrow-big-up-dash.js.map
arrow-big-up.js
arrow-big-up.js.map
arrow-down-0-1.js
arrow-down-0-1.js.map
arrow-down-01.js
arrow-down-01.js.map
arrow-down-1-0.js
arrow-down-1-0.js.map
arrow-down-10.js
arrow-down-10.js.map
arrow-down-a-z.js
arrow-down-a-z.js.map
arrow-down-az.js
arrow-down-az.js.map
arrow-down-circle.js
arrow-down-circle.js.map
arrow-down-from-line.js
arrow-down-from-line.js.map
arrow-down-left-from-circle.js
arrow-down-left-from-circle.js.map
arrow-down-left-from-square.js
arrow-down-left-from-square.js.map
arrow-down-left-square.js
arrow-down-left-square.js.map
arrow-down-left.js
arrow-down-left.js.map
arrow-down-narrow-wide.js
arrow-down-narrow-wide.js.map
arrow-down-right-from-circle.js
arrow-down-right-from-circle.js.map
arrow-down-right-from-square.js
arrow-down-right-from-square.js.map
arrow-down-right-square.js
arrow-down-right-square.js.map
arrow-down-right.js
arrow-down-right.js.map
arrow-down-square.js
arrow-down-square.js.map
arrow-down-to-dot.js
arrow-down-to-dot.js.map
arrow-down-to-line.js
arrow-down-to-line.js.map
arrow-down-up.js
arrow-down-up.js.map
arrow-down-wide-narrow.js
arrow-down-wide-narrow.js.map
arrow-down-z-a.js
arrow-down-z-a.js.map
arrow-down-za.js
arrow-down-za.js.map
arrow-down.js
arrow-down.js.map
arrow-left-circle.js
arrow-left-circle.js.map
arrow-left-from-line.js
arrow-left-from-line.js.map
arrow-left-right.js
arrow-left-right.js.map
arrow-left-square.js
arrow-left-square.js.map
arrow-left-to-line.js
arrow-left-to-line.js.map
arrow-left.js
arrow-left.js.map
arrow-right-circle.js
arrow-right-circle.js.map
arrow-right-from-line.js
arrow-right-from-line.js.map
arrow-right-left.js
arrow-right-left.js.map
arrow-right-square.js
arrow-right-square.js.map
arrow-right-to-line.js
arrow-right-to-line.js.map
arrow-right.js
arrow-right.js.map
arrow-up-0-1.js
arrow-up-0-1.js.map
arrow-up-01.js
arrow-up-01.js.map
arrow-up-1-0.js
arrow-up-1-0.js.map
arrow-up-10.js
arrow-up-10.js.map
arrow-up-a-z.js
arrow-up-a-z.js.map
arrow-up-az.js
arrow-up-az.js.map
arrow-up-circle.js
arrow-up-circle.js.map
arrow-up-down.js
arrow-up-down.js.map
arrow-up-from-dot.js
arrow-up-from-dot.js.map
arrow-up-from-line.js
arrow-up-from-line.js.map
arrow-up-left-from-circle.js
arrow-up-left-from-circle.js.map
arrow-up-left-from-square.js
arrow-up-left-from-square.js.map
arrow-up-left-square.js
arrow-up-left-square.js.map
arrow-up-left.js
arrow-up-left.js.map
arrow-up-narrow-wide.js
arrow-up-narrow-wide.js.map
arrow-up-right-from-circle.js
arrow-up-right-from-circle.js.map
arrow-up-right-from-square.js
arrow-up-right-from-square.js.map
arrow-up-right-square.js
arrow-up-right-square.js.map
arrow-up-right.js
arrow-up-right.js.map
arrow-up-square.js
arrow-up-square.js.map
arrow-up-to-line.js
arrow-up-to-line.js.map
arrow-up-wide-narrow.js
arrow-up-wide-narrow.js.map
arrow-up-z-a.js
arrow-up-z-a.js.map
arrow-up-za.js
arrow-up-za.js.map
arrow-up.js
arrow-up.js.map
arrows-up-from-line.js
arrows-up-from-line.js.map
asterisk-square.js
asterisk-square.js.map
asterisk.js
asterisk.js.map
at-sign.js
at-sign.js.map
atom.js
atom.js.map
audio-lines.js
audio-lines.js.map
audio-waveform.js
audio-waveform.js.map
award.js
award.js.map
axe.js
axe.js.map
axis-3-d.js
axis-3-d.js.map
axis-3d.js
axis-3d.js.map
baby.js
baby.js.map
backpack.js
backpack.js.map
badge-alert.js
badge-alert.js.map
badge-cent.js
badge-cent.js.map
badge-check.js
badge-check.js.map
badge-dollar-sign.js
badge-dollar-sign.js.map
badge-euro.js
badge-euro.js.map
badge-help.js
badge-help.js.map
badge-indian-rupee.js
badge-indian-rupee.js.map
badge-info.js
badge-info.js.map
badge-japanese-yen.js
badge-japanese-yen.js.map
badge-minus.js
badge-minus.js.map
badge-percent.js
badge-percent.js.map
badge-plus.js
badge-plus.js.map
badge-pound-sterling.js
badge-pound-sterling.js.map
badge-russian-ruble.js
badge-russian-ruble.js.map
badge-swiss-franc.js
badge-swiss-franc.js.map
badge-x.js
badge-x.js.map
badge.js
badge.js.map
baggage-claim.js
baggage-claim.js.map
ban.js
ban.js.map
banana.js
banana.js.map
banknote.js
banknote.js.map
bar-chart-2.js
bar-chart-2.js.map
bar-chart-3.js
bar-chart-3.js.map
bar-chart-4.js
bar-chart-4.js.map
bar-chart-big.js
bar-chart-big.js.map
bar-chart-horizontal-big.js
bar-chart-horizontal-big.js.map
bar-chart-horizontal.js
bar-chart-horizontal.js.map
bar-chart.js
bar-chart.js.map
barcode.js
barcode.js.map
baseline.js
baseline.js.map
bath.js
bath.js.map
battery-charging.js
battery-charging.js.map
battery-full.js
battery-full.js.map
battery-low.js
battery-low.js.map
battery-medium.js
battery-medium.js.map
battery-warning.js
battery-warning.js.map
battery.js
battery.js.map
beaker.js
beaker.js.map
bean-off.js
bean-off.js.map
bean.js
bean.js.map
bed-double.js
bed-double.js.map
bed-single.js
bed-single.js.map
bed.js
bed.js.map
beef.js
beef.js.map
beer.js
beer.js.map
bell-dot.js
bell-dot.js.map
bell-electric.js
bell-electric.js.map
bell-minus.js
bell-minus.js.map
bell-off.js
bell-off.js.map
bell-plus.js
bell-plus.js.map
bell-ring.js
bell-ring.js.map
bell.js
bell.js.map
between-horizonal-end.js
between-horizonal-end.js.map
between-horizonal-start.js
between-horizonal-start.js.map
between-horizontal-end.js
between-horizontal-end.js.map
between-horizontal-start.js
between-horizontal-start.js.map
between-vertical-end.js
between-vertical-end.js.map
between-vertical-start.js
between-vertical-start.js.map
bike.js
bike.js.map
binary.js
binary.js.map
biohazard.js
biohazard.js.map
bird.js
bird.js.map
bitcoin.js
bitcoin.js.map
blend.js
blend.js.map
blinds.js
blinds.js.map
blocks.js
blocks.js.map
bluetooth-connected.js
bluetooth-connected.js.map
bluetooth-off.js
bluetooth-off.js.map
bluetooth-searching.js
bluetooth-searching.js.map
bluetooth.js
bluetooth.js.map
bold.js
bold.js.map
bolt.js
bolt.js.map
bomb.js
bomb.js.map
bone.js
bone.js.map
book-a.js
book-a.js.map
book-audio.js
book-audio.js.map
book-check.js
book-check.js.map
book-copy.js
book-copy.js.map
book-dashed.js
book-dashed.js.map
book-down.js
book-down.js.map
book-headphones.js
book-headphones.js.map
book-heart.js
book-heart.js.map
book-image.js
book-image.js.map
book-key.js
book-key.js.map
book-lock.js
book-lock.js.map
book-marked.js
book-marked.js.map
book-minus.js
book-minus.js.map
book-open-check.js
book-open-check.js.map
book-open-text.js
book-open-text.js.map
book-open.js
book-open.js.map
book-plus.js
book-plus.js.map
book-template.js
book-template.js.map
book-text.js
book-text.js.map
book-type.js
book-type.js.map
book-up-2.js
book-up-2.js.map
book-up.js
book-up.js.map
book-user.js
book-user.js.map
book-x.js
book-x.js.map
book.js
book.js.map
bookmark-check.js
bookmark-check.js.map
bookmark-minus.js
bookmark-minus.js.map
bookmark-plus.js
bookmark-plus.js.map
bookmark-x.js
bookmark-x.js.map
bookmark.js
bookmark.js.map
boom-box.js
boom-box.js.map
bot-message-square.js
bot-message-square.js.map
bot.js
bot.js.map
box-select.js
box-select.js.map
box.js
box.js.map
boxes.js
boxes.js.map
braces.js
braces.js.map
brackets.js
brackets.js.map
brain-circuit.js
brain-circuit.js.map
brain-cog.js
brain-cog.js.map
brain.js
brain.js.map
brick-wall.js
brick-wall.js.map
briefcase.js
briefcase.js.map
bring-to-front.js
bring-to-front.js.map
brush.js
brush.js.map
bug-off.js
bug-off.js.map
bug-play.js
bug-play.js.map
bug.js
bug.js.map
building-2.js
building-2.js.map
building.js
building.js.map
bus-front.js
bus-front.js.map
bus.js
bus.js.map
cable-car.js
cable-car.js.map
cable.js
cable.js.map
cake-slice.js
cake-slice.js.map
cake.js
cake.js.map
calculator.js
calculator.js.map
calendar-check-2.js
calendar-check-2.js.map
calendar-check.js
calendar-check.js.map
calendar-clock.js
calendar-clock.js.map
calendar-days.js
calendar-days.js.map
calendar-fold.js
calendar-fold.js.map
calendar-heart.js
calendar-heart.js.map
calendar-minus-2.js
calendar-minus-2.js.map
calendar-minus.js
calendar-minus.js.map
calendar-off.js
calendar-off.js.map
calendar-plus-2.js
calendar-plus-2.js.map
calendar-plus.js
calendar-plus.js.map
calendar-range.js
calendar-range.js.map
calendar-search.js
calendar-search.js.map
calendar-x-2.js
calendar-x-2.js.map
calendar-x.js
calendar-x.js.map
calendar.js
calendar.js.map
camera-off.js
camera-off.js.map
camera.js
camera.js.map
candlestick-chart.js
candlestick-chart.js.map
candy-cane.js
candy-cane.js.map
candy-off.js
candy-off.js.map
candy.js
candy.js.map
captions-off.js
captions-off.js.map
captions.js
captions.js.map
car-front.js
car-front.js.map
car-taxi-front.js
car-taxi-front.js.map
car.js
car.js.map
caravan.js
caravan.js.map
carrot.js
carrot.js.map
case-lower.js
case-lower.js.map
case-sensitive.js
case-sensitive.js.map
case-upper.js
case-upper.js.map
cassette-tape.js
cassette-tape.js.map
cast.js
cast.js.map
castle.js
castle.js.map
cat.js
cat.js.map
cctv.js
cctv.js.map
check-check.js
check-check.js.map
check-circle-2.js
check-circle-2.js.map
check-circle.js
check-circle.js.map
check-square-2.js
check-square-2.js.map
check-square.js
check-square.js.map
check.js
check.js.map
chef-hat.js
chef-hat.js.map
cherry.js
cherry.js.map
chevron-down-circle.js
chevron-down-circle.js.map
chevron-down-square.js
chevron-down-square.js.map
chevron-down.js
chevron-down.js.map
chevron-first.js
chevron-first.js.map
chevron-last.js
chevron-last.js.map
chevron-left-circle.js
chevron-left-circle.js.map
chevron-left-square.js
chevron-left-square.js.map
chevron-left.js
chevron-left.js.map
chevron-right-circle.js
chevron-right-circle.js.map
chevron-right-square.js
chevron-right-square.js.map
chevron-right.js
chevron-right.js.map
chevron-up-circle.js
chevron-up-circle.js.map
chevron-up-square.js
chevron-up-square.js.map
chevron-up.js
chevron-up.js.map
chevrons-down-up.js
chevrons-down-up.js.map
chevrons-down.js
chevrons-down.js.map
chevrons-left-right.js
chevrons-left-right.js.map
chevrons-left.js
chevrons-left.js.map
chevrons-right-left.js
chevrons-right-left.js.map
chevrons-right.js
chevrons-right.js.map
chevrons-up-down.js
chevrons-up-down.js.map
chevrons-up.js
chevrons-up.js.map
chrome.js
chrome.js.map
church.js
church.js.map
cigarette-off.js
cigarette-off.js.map
cigarette.js
cigarette.js.map
circle-dashed.js
circle-dashed.js.map
circle-dollar-sign.js
circle-dollar-sign.js.map
circle-dot-dashed.js
circle-dot-dashed.js.map
circle-dot.js
circle-dot.js.map
circle-ellipsis.js
circle-ellipsis.js.map
circle-equal.js
circle-equal.js.map
circle-fading-plus.js
circle-fading-plus.js.map
circle-off.js
circle-off.js.map
circle-slash-2.js
circle-slash-2.js.map
circle-slash.js
circle-slash.js.map
circle-slashed.js
circle-slashed.js.map
circle-user-round.js
circle-user-round.js.map
circle-user.js
circle-user.js.map
circle.js
circle.js.map
circuit-board.js
circuit-board.js.map
citrus.js
citrus.js.map
clapperboard.js
clapperboard.js.map
clipboard-check.js
clipboard-check.js.map
clipboard-copy.js
clipboard-copy.js.map
clipboard-edit.js
clipboard-edit.js.map
clipboard-list.js
clipboard-list.js.map
clipboard-minus.js
clipboard-minus.js.map
clipboard-paste.js
clipboard-paste.js.map
clipboard-pen-line.js
clipboard-pen-line.js.map
clipboard-pen.js
clipboard-pen.js.map
clipboard-plus.js
clipboard-plus.js.map
clipboard-signature.js
clipboard-signature.js.map
clipboard-type.js
clipboard-type.js.map
clipboard-x.js
clipboard-x.js.map
clipboard.js
clipboard.js.map
clock-1.js
clock-1.js.map
clock-10.js
clock-10.js.map
clock-11.js
clock-11.js.map
clock-12.js
clock-12.js.map
clock-2.js
clock-2.js.map
clock-3.js
clock-3.js.map
clock-4.js
clock-4.js.map
clock-5.js
clock-5.js.map
clock-6.js
clock-6.js.map
clock-7.js
clock-7.js.map
clock-8.js
clock-8.js.map
clock-9.js
clock-9.js.map
clock.js
clock.js.map
cloud-cog.js
cloud-cog.js.map
cloud-drizzle.js
cloud-drizzle.js.map
cloud-fog.js
cloud-fog.js.map
cloud-hail.js
cloud-hail.js.map
cloud-lightning.js
cloud-lightning.js.map
cloud-moon-rain.js
cloud-moon-rain.js.map
cloud-moon.js
cloud-moon.js.map
cloud-off.js
cloud-off.js.map
cloud-rain-wind.js
cloud-rain-wind.js.map
cloud-rain.js
cloud-rain.js.map
cloud-snow.js
cloud-snow.js.map
cloud-sun-rain.js
cloud-sun-rain.js.map
cloud-sun.js
cloud-sun.js.map
cloud.js
cloud.js.map
cloudy.js
cloudy.js.map
clover.js
clover.js.map
club.js
club.js.map
code-2.js
code-2.js.map
code-square.js
code-square.js.map
code.js
code.js.map
codepen.js
codepen.js.map
codesandbox.js
codesandbox.js.map
coffee.js
coffee.js.map
cog.js
cog.js.map
coins.js
coins.js.map
columns-2.js
columns-2.js.map
columns-3.js
columns-3.js.map
columns-4.js
columns-4.js.map
columns.js
columns.js.map
combine.js
combine.js.map
command.js
command.js.map
compass.js
compass.js.map
component.js
component.js.map
computer.js
computer.js.map
concierge-bell.js
concierge-bell.js.map
cone.js
cone.js.map
construction.js
construction.js.map
contact-2.js
contact-2.js.map
contact.js
contact.js.map
container.js
container.js.map
contrast.js
contrast.js.map
cookie.js
cookie.js.map
cooking-pot.js
cooking-pot.js.map
copy-check.js
copy-check.js.map
copy-minus.js
copy-minus.js.map
copy-plus.js
copy-plus.js.map
copy-slash.js
copy-slash.js.map
copy-x.js
copy-x.js.map
copy.js
copy.js.map
copyleft.js
copyleft.js.map
copyright.js
copyright.js.map
corner-down-left.js
corner-down-left.js.map
corner-down-right.js
corner-down-right.js.map
corner-left-down.js
corner-left-down.js.map
corner-left-up.js
corner-left-up.js.map
corner-right-down.js
corner-right-down.js.map
corner-right-up.js
corner-right-up.js.map
corner-up-left.js
corner-up-left.js.map
corner-up-right.js
corner-up-right.js.map
cpu.js
cpu.js.map
creative-commons.js
creative-commons.js.map
credit-card.js
credit-card.js.map
croissant.js
croissant.js.map
crop.js
crop.js.map
cross.js
cross.js.map
crosshair.js
crosshair.js.map
crown.js
crown.js.map
cuboid.js
cuboid.js.map
cup-soda.js
cup-soda.js.map
curly-braces.js
curly-braces.js.map
currency.js
currency.js.map
cylinder.js
cylinder.js.map
database-backup.js
database-backup.js.map
database-zap.js
database-zap.js.map
database.js
database.js.map
delete.js
delete.js.map
dessert.js
dessert.js.map
diameter.js
diameter.js.map
diamond.js
diamond.js.map
dice-1.js
dice-1.js.map
dice-2.js
dice-2.js.map
dice-3.js
dice-3.js.map
dice-4.js
dice-4.js.map
dice-5.js
dice-5.js.map
dice-6.js
dice-6.js.map
dices.js
dices.js.map
diff.js
diff.js.map
disc-2.js
disc-2.js.map
disc-3.js
disc-3.js.map
disc-album.js
disc-album.js.map
disc.js
disc.js.map
divide-circle.js
divide-circle.js.map
divide-square.js
divide-square.js.map
divide.js
divide.js.map
dna-off.js
dna-off.js.map
dna.js
dna.js.map
dog.js
dog.js.map
dollar-sign.js
dollar-sign.js.map
donut.js
donut.js.map
door-closed.js
door-closed.js.map
door-open.js
door-open.js.map
dot-square.js
dot-square.js.map
dot.js
dot.js.map
download-cloud.js
download-cloud.js.map
download.js
download.js.map
drafting-compass.js
drafting-compass.js.map
drama.js
drama.js.map
dribbble.js
dribbble.js.map
drill.js
drill.js.map
droplet.js
droplet.js.map
droplets.js
droplets.js.map
drum.js
drum.js.map
drumstick.js
drumstick.js.map
dumbbell.js
dumbbell.js.map
ear-off.js
ear-off.js.map
ear.js
ear.js.map
earth-lock.js
earth-lock.js.map
earth.js
earth.js.map
eclipse.js
eclipse.js.map
edit-2.js
edit-2.js.map
edit-3.js
edit-3.js.map
edit.js
edit.js.map
egg-fried.js
egg-fried.js.map
egg-off.js
egg-off.js.map
egg.js
egg.js.map
equal-not.js
equal-not.js.map
equal-square.js
equal-square.js.map
equal.js
equal.js.map
eraser.js
eraser.js.map
euro.js
euro.js.map
expand.js
expand.js.map
external-link.js
external-link.js.map
eye-off.js
eye-off.js.map
eye.js
eye.js.map
facebook.js
facebook.js.map
factory.js
factory.js.map
fan.js
fan.js.map
fast-forward.js
fast-forward.js.map
feather.js
feather.js.map
fence.js
fence.js.map
ferris-wheel.js
ferris-wheel.js.map
figma.js
figma.js.map
file-archive.js
file-archive.js.map
file-audio-2.js
file-audio-2.js.map
file-audio.js
file-audio.js.map
file-axis-3-d.js
file-axis-3-d.js.map
file-axis-3d.js
file-axis-3d.js.map
file-badge-2.js
file-badge-2.js.map
file-badge.js
file-badge.js.map
file-bar-chart-2.js
file-bar-chart-2.js.map
file-bar-chart.js
file-bar-chart.js.map
file-box.js
file-box.js.map
file-check-2.js
file-check-2.js.map
file-check.js
file-check.js.map
file-clock.js
file-clock.js.map
file-code-2.js
file-code-2.js.map
file-code.js
file-code.js.map
file-cog-2.js
file-cog-2.js.map
file-cog.js
file-cog.js.map
file-diff.js
file-diff.js.map
file-digit.js
file-digit.js.map
file-down.js
file-down.js.map
file-edit.js
file-edit.js.map
file-heart.js
file-heart.js.map
file-image.js
file-image.js.map
file-input.js
file-input.js.map
file-json-2.js
file-json-2.js.map
file-json.js
file-json.js.map
file-key-2.js
file-key-2.js.map
file-key.js
file-key.js.map
file-line-chart.js
file-line-chart.js.map
file-lock-2.js
file-lock-2.js.map
file-lock.js
file-lock.js.map
file-minus-2.js
file-minus-2.js.map
file-minus.js
file-minus.js.map
file-music.js
file-music.js.map
file-output.js
file-output.js.map
file-pen-line.js
file-pen-line.js.map
file-pen.js
file-pen.js.map
file-pie-chart.js
file-pie-chart.js.map
file-plus-2.js
file-plus-2.js.map
file-plus.js
file-plus.js.map
file-question.js
file-question.js.map
file-scan.js
file-scan.js.map
file-search-2.js
file-search-2.js.map
file-search.js
file-search.js.map
file-signature.js
file-signature.js.map
file-sliders.js
file-sliders.js.map
file-spreadsheet.js
file-spreadsheet.js.map
file-stack.js
file-stack.js.map
file-symlink.js
file-symlink.js.map
file-terminal.js
file-terminal.js.map
file-text.js
file-text.js.map
file-type-2.js
file-type-2.js.map
file-type.js
file-type.js.map
file-up.js
file-up.js.map
file-video-2.js
file-video-2.js.map
file-video.js
file-video.js.map
file-volume-2.js
file-volume-2.js.map
file-volume.js
file-volume.js.map
file-warning.js
file-warning.js.map
file-x-2.js
file-x-2.js.map
file-x.js
file-x.js.map
file.js
file.js.map
files.js
files.js.map
film.js
film.js.map
filter-x.js
filter-x.js.map
filter.js
filter.js.map
fingerprint.js
fingerprint.js.map
fire-extinguisher.js
fire-extinguisher.js.map
fish-off.js
fish-off.js.map
fish-symbol.js
fish-symbol.js.map
fish.js
fish.js.map
flag-off.js
flag-off.js.map
flag-triangle-left.js
flag-triangle-left.js.map
flag-triangle-right.js
flag-triangle-right.js.map
flag.js
flag.js.map
flame-kindling.js
flame-kindling.js.map
flame.js
flame.js.map
flashlight-off.js
flashlight-off.js.map
flashlight.js
flashlight.js.map
flask-conical-off.js
flask-conical-off.js.map
flask-conical.js
flask-conical.js.map
flask-round.js
flask-round.js.map
flip-horizontal-2.js
flip-horizontal-2.js.map
flip-horizontal.js
flip-horizontal.js.map
flip-vertical-2.js
flip-vertical-2.js.map
flip-vertical.js
flip-vertical.js.map
flower-2.js
flower-2.js.map
flower.js
flower.js.map
focus.js
focus.js.map
fold-horizontal.js
fold-horizontal.js.map
fold-vertical.js
fold-vertical.js.map
folder-archive.js
folder-archive.js.map
folder-check.js
folder-check.js.map
folder-clock.js
folder-clock.js.map
folder-closed.js
folder-closed.js.map
folder-cog-2.js
folder-cog-2.js.map
folder-cog.js
folder-cog.js.map
folder-dot.js
folder-dot.js.map
folder-down.js
folder-down.js.map
folder-edit.js
folder-edit.js.map
folder-git-2.js
folder-git-2.js.map
folder-git.js
folder-git.js.map
folder-heart.js
folder-heart.js.map
folder-input.js
folder-input.js.map
folder-kanban.js
folder-kanban.js.map
folder-key.js
folder-key.js.map
folder-lock.js
folder-lock.js.map
folder-minus.js
folder-minus.js.map
folder-open-dot.js
folder-open-dot.js.map
folder-open.js
folder-open.js.map
folder-output.js
folder-output.js.map
folder-pen.js
folder-pen.js.map
folder-plus.js
folder-plus.js.map
folder-root.js
folder-root.js.map
folder-search-2.js
folder-search-2.js.map
folder-search.js
folder-search.js.map
folder-symlink.js
folder-symlink.js.map
folder-sync.js
folder-sync.js.map
folder-tree.js
folder-tree.js.map
folder-up.js
folder-up.js.map
folder-x.js
folder-x.js.map
folder.js
folder.js.map
folders.js
folders.js.map
footprints.js
footprints.js.map
forklift.js
forklift.js.map
form-input.js
form-input.js.map
forward.js
forward.js.map
frame.js
frame.js.map
framer.js
framer.js.map
frown.js
frown.js.map
fuel.js
fuel.js.map
fullscreen.js
fullscreen.js.map
function-square.js
function-square.js.map
gallery-horizontal-end.js
gallery-horizontal-end.js.map
gallery-horizontal.js
gallery-horizontal.js.map
gallery-thumbnails.js
gallery-thumbnails.js.map
gallery-vertical-end.js
gallery-vertical-end.js.map
gallery-vertical.js
gallery-vertical.js.map
gamepad-2.js
gamepad-2.js.map
gamepad.js
gamepad.js.map
gantt-chart-square.js
gantt-chart-square.js.map
gantt-chart.js
gantt-chart.js.map
gantt-square.js
gantt-square.js.map
gauge-circle.js
gauge-circle.js.map
gauge.js
gauge.js.map
gavel.js
gavel.js.map
gem.js
gem.js.map
ghost.js
ghost.js.map
gift.js
gift.js.map
git-branch-plus.js
git-branch-plus.js.map
git-branch.js
git-branch.js.map
git-commit-horizontal.js
git-commit-horizontal.js.map
git-commit-vertical.js
git-commit-vertical.js.map
git-commit.js
git-commit.js.map
git-compare-arrows.js
git-compare-arrows.js.map
git-compare.js
git-compare.js.map
git-fork.js
git-fork.js.map
git-graph.js
git-graph.js.map
git-merge.js
git-merge.js.map
git-pull-request-arrow.js
git-pull-request-arrow.js.map
git-pull-request-closed.js
git-pull-request-closed.js.map
git-pull-request-create-arrow.js
git-pull-request-create-arrow.js.map
git-pull-request-create.js
git-pull-request-create.js.map
git-pull-request-draft.js
git-pull-request-draft.js.map
git-pull-request.js
git-pull-request.js.map
github.js
github.js.map
gitlab.js
gitlab.js.map
glass-water.js
glass-water.js.map
glasses.js
glasses.js.map
globe-2.js
globe-2.js.map
globe-lock.js
globe-lock.js.map
globe.js
globe.js.map
goal.js
goal.js.map
grab.js
grab.js.map
graduation-cap.js
graduation-cap.js.map
grape.js
grape.js.map
grid-2-x-2.js
grid-2-x-2.js.map
grid-2x2.js
grid-2x2.js.map
grid-3-x-3.js
grid-3-x-3.js.map
grid-3x3.js
grid-3x3.js.map
grid.js
grid.js.map
grip-horizontal.js
grip-horizontal.js.map
grip-vertical.js
grip-vertical.js.map
grip.js
grip.js.map
group.js
group.js.map
guitar.js
guitar.js.map
hammer.js
hammer.js.map
hand-coins.js
hand-coins.js.map
hand-heart.js
hand-heart.js.map
hand-helping.js
hand-helping.js.map
hand-metal.js
hand-metal.js.map
hand-platter.js
hand-platter.js.map
hand.js
hand.js.map
handshake.js
handshake.js.map
hard-drive-download.js
hard-drive-download.js.map
hard-drive-upload.js
hard-drive-upload.js.map
hard-drive.js
hard-drive.js.map
hard-hat.js
hard-hat.js.map
hash.js
hash.js.map
haze.js
haze.js.map
hdmi-port.js
hdmi-port.js.map
heading-1.js
heading-1.js.map
heading-2.js
heading-2.js.map
heading-3.js
heading-3.js.map
heading-4.js
heading-4.js.map
heading-5.js
heading-5.js.map
heading-6.js
heading-6.js.map
heading.js
heading.js.map
headphones.js
headphones.js.map
headset.js
headset.js.map
heart-crack.js
heart-crack.js.map
heart-handshake.js
heart-handshake.js.map
heart-off.js
heart-off.js.map
heart-pulse.js
heart-pulse.js.map
heart.js
heart.js.map
heater.js
heater.js.map
help-circle.js
help-circle.js.map
helping-hand.js
helping-hand.js.map
hexagon.js
hexagon.js.map
highlighter.js
highlighter.js.map
history.js
history.js.map
home.js
home.js.map
hop-off.js
hop-off.js.map
hop.js
hop.js.map
hotel.js
hotel.js.map
hourglass.js
hourglass.js.map
ice-cream-2.js
ice-cream-2.js.map
ice-cream.js
ice-cream.js.map
image-down.js
image-down.js.map
image-minus.js
image-minus.js.map
image-off.js
image-off.js.map
image-plus.js
image-plus.js.map
image-up.js
image-up.js.map
image.js
image.js.map
images.js
images.js.map
import.js
import.js.map
inbox.js
inbox.js.map
indent.js
indent.js.map
index.js
index.js.map
indian-rupee.js
indian-rupee.js.map
infinity.js
infinity.js.map
info.js
info.js.map
inspect.js
inspect.js.map
inspection-panel.js
inspection-panel.js.map
instagram.js
instagram.js.map
italic.js
italic.js.map
iteration-ccw.js
iteration-ccw.js.map
iteration-cw.js
iteration-cw.js.map
japanese-yen.js
japanese-yen.js.map
joystick.js
joystick.js.map
kanban-square-dashed.js
kanban-square-dashed.js.map
kanban-square.js
kanban-square.js.map
kanban.js
kanban.js.map
key-round.js
key-round.js.map
key-square.js
key-square.js.map
key.js
key.js.map
keyboard-music.js
keyboard-music.js.map
keyboard.js
keyboard.js.map
lamp-ceiling.js
lamp-ceiling.js.map
lamp-desk.js
lamp-desk.js.map
lamp-floor.js
lamp-floor.js.map
lamp-wall-down.js
lamp-wall-down.js.map
lamp-wall-up.js
lamp-wall-up.js.map
lamp.js
lamp.js.map
land-plot.js
land-plot.js.map
landmark.js
landmark.js.map
languages.js
languages.js.map
laptop-2.js
laptop-2.js.map
laptop.js
laptop.js.map
lasso-select.js
lasso-select.js.map
lasso.js
lasso.js.map
laugh.js
laugh.js.map
layers-2.js
layers-2.js.map
layers-3.js
layers-3.js.map
layers.js
layers.js.map
layout-dashboard.js
layout-dashboard.js.map
layout-grid.js
layout-grid.js.map
layout-list.js
layout-list.js.map
layout-panel-left.js
layout-panel-left.js.map
layout-panel-top.js
layout-panel-top.js.map
layout-template.js
layout-template.js.map
layout.js
layout.js.map
leaf.js
leaf.js.map
leafy-green.js
leafy-green.js.map
library-big.js
library-big.js.map
library-square.js
library-square.js.map
library.js
library.js.map
life-buoy.js
life-buoy.js.map
ligature.js
ligature.js.map
lightbulb-off.js
lightbulb-off.js.map
lightbulb.js
lightbulb.js.map
line-chart.js
line-chart.js.map
link-2-off.js
link-2-off.js.map
link-2.js
link-2.js.map
link.js
link.js.map
linkedin.js
linkedin.js.map
list-checks.js
list-checks.js.map
list-collapse.js
list-collapse.js.map
list-end.js
list-end.js.map
list-filter.js
list-filter.js.map
list-minus.js
list-minus.js.map
list-music.js
list-music.js.map
list-ordered.js
list-ordered.js.map
list-plus.js
list-plus.js.map
list-restart.js
list-restart.js.map
list-start.js
list-start.js.map
list-todo.js
list-todo.js.map
list-tree.js
list-tree.js.map
list-video.js
list-video.js.map
list-x.js
list-x.js.map
list.js
list.js.map
loader-2.js
loader-2.js.map
loader.js
loader.js.map
locate-fixed.js
locate-fixed.js.map
locate-off.js
locate-off.js.map
locate.js
locate.js.map
lock-keyhole.js
lock-keyhole.js.map
lock.js
lock.js.map
log-in.js
log-in.js.map
log-out.js
log-out.js.map
lollipop.js
lollipop.js.map
luggage.js
luggage.js.map
m-square.js
m-square.js.map
magnet.js
magnet.js.map
mail-check.js
mail-check.js.map
mail-minus.js
mail-minus.js.map
mail-open.js
mail-open.js.map
mail-plus.js
mail-plus.js.map
mail-question.js
mail-question.js.map
mail-search.js
mail-search.js.map
mail-warning.js
mail-warning.js.map
mail-x.js
mail-x.js.map
mail.js
mail.js.map
mailbox.js
mailbox.js.map
mails.js
mails.js.map
map-pin-off.js
map-pin-off.js.map
map-pin.js
map-pin.js.map
map-pinned.js
map-pinned.js.map
map.js
map.js.map
martini.js
martini.js.map
maximize-2.js
maximize-2.js.map
maximize.js
maximize.js.map
medal.js
medal.js.map
megaphone-off.js
megaphone-off.js.map
megaphone.js
megaphone.js.map
meh.js
meh.js.map
memory-stick.js
memory-stick.js.map
menu-square.js
menu-square.js.map
menu.js
menu.js.map
merge.js
merge.js.map
message-circle-code.js
message-circle-code.js.map
message-circle-dashed.js
message-circle-dashed.js.map
message-circle-heart.js
message-circle-heart.js.map
message-circle-more.js
message-circle-more.js.map
message-circle-off.js
message-circle-off.js.map
message-circle-plus.js
message-circle-plus.js.map
message-circle-question.js
message-circle-question.js.map
message-circle-reply.js
message-circle-reply.js.map
message-circle-warning.js
message-circle-warning.js.map
message-circle-x.js
message-circle-x.js.map
message-circle.js
message-circle.js.map
message-square-code.js
message-square-code.js.map
message-square-dashed.js
message-square-dashed.js.map
message-square-diff.js
message-square-diff.js.map
message-square-dot.js
message-square-dot.js.map
message-square-heart.js
message-square-heart.js.map
message-square-more.js
message-square-more.js.map
message-square-off.js
message-square-off.js.map
message-square-plus.js
message-square-plus.js.map
message-square-quote.js
message-square-quote.js.map
message-square-reply.js
message-square-reply.js.map
message-square-share.js
message-square-share.js.map
message-square-text.js
message-square-text.js.map
message-square-warning.js
message-square-warning.js.map
message-square-x.js
message-square-x.js.map
message-square.js
message-square.js.map
messages-square.js
messages-square.js.map
mic-2.js
mic-2.js.map
mic-off.js
mic-off.js.map
mic.js
mic.js.map
microscope.js
microscope.js.map
microwave.js
microwave.js.map
milestone.js
milestone.js.map
milk-off.js
milk-off.js.map
milk.js
milk.js.map
minimize-2.js
minimize-2.js.map
minimize.js
minimize.js.map
minus-circle.js
minus-circle.js.map
minus-square.js
minus-square.js.map
minus.js
minus.js.map
monitor-check.js
monitor-check.js.map
monitor-dot.js
monitor-dot.js.map
monitor-down.js
monitor-down.js.map
monitor-off.js
monitor-off.js.map
monitor-pause.js
monitor-pause.js.map
monitor-play.js
monitor-play.js.map
monitor-smartphone.js
monitor-smartphone.js.map
monitor-speaker.js
monitor-speaker.js.map
monitor-stop.js
monitor-stop.js.map
monitor-up.js
monitor-up.js.map
monitor-x.js
monitor-x.js.map
monitor.js
monitor.js.map
moon-star.js
moon-star.js.map
moon.js
moon.js.map
more-horizontal.js
more-horizontal.js.map
more-vertical.js
more-vertical.js.map
mountain-snow.js
mountain-snow.js.map
mountain.js
mountain.js.map
mouse-pointer-2.js
mouse-pointer-2.js.map
mouse-pointer-click.js
mouse-pointer-click.js.map
mouse-pointer-square-dashed.js
mouse-pointer-square-dashed.js.map
mouse-pointer-square.js
mouse-pointer-square.js.map
mouse-pointer.js
mouse-pointer.js.map
mouse.js
mouse.js.map
move-3-d.js
move-3-d.js.map
move-3d.js
move-3d.js.map
move-diagonal-2.js
move-diagonal-2.js.map
move-diagonal.js
move-diagonal.js.map
move-down-left.js
move-down-left.js.map
move-down-right.js
move-down-right.js.map
move-down.js
move-down.js.map
move-horizontal.js
move-horizontal.js.map
move-left.js
move-left.js.map
move-right.js
move-right.js.map
move-up-left.js
move-up-left.js.map
move-up-right.js
move-up-right.js.map
move-up.js
move-up.js.map
move-vertical.js
move-vertical.js.map
move.js
move.js.map
music-2.js
music-2.js.map
music-3.js
music-3.js.map
music-4.js
music-4.js.map
music.js
music.js.map
navigation-2-off.js
navigation-2-off.js.map
navigation-2.js
navigation-2.js.map
navigation-off.js
navigation-off.js.map
navigation.js
navigation.js.map
network.js
network.js.map
newspaper.js
newspaper.js.map
nfc.js
nfc.js.map
notebook-pen.js
notebook-pen.js.map
notebook-tabs.js
notebook-tabs.js.map
notebook-text.js
notebook-text.js.map
notebook.js
notebook.js.map
notepad-text-dashed.js
notepad-text-dashed.js.map
notepad-text.js
notepad-text.js.map
nut-off.js
nut-off.js.map
nut.js
nut.js.map
octagon.js
octagon.js.map
option.js
option.js.map
orbit.js
orbit.js.map
outdent.js
outdent.js.map
package-2.js
package-2.js.map
package-check.js
package-check.js.map
package-minus.js
package-minus.js.map
package-open.js
package-open.js.map
package-plus.js
package-plus.js.map
package-search.js
package-search.js.map
package-x.js
package-x.js.map
package.js
package.js.map
paint-bucket.js
paint-bucket.js.map
paint-roller.js
paint-roller.js.map
paintbrush-2.js
paintbrush-2.js.map
paintbrush.js
paintbrush.js.map
palette.js
palette.js.map
palmtree.js
palmtree.js.map
panel-bottom-close.js
panel-bottom-close.js.map
panel-bottom-dashed.js
panel-bottom-dashed.js.map
panel-bottom-inactive.js
panel-bottom-inactive.js.map
panel-bottom-open.js
panel-bottom-open.js.map
panel-bottom.js
panel-bottom.js.map
panel-left-close.js
panel-left-close.js.map
panel-left-dashed.js
panel-left-dashed.js.map
panel-left-inactive.js
panel-left-inactive.js.map
panel-left-open.js
panel-left-open.js.map
panel-left.js
panel-left.js.map
panel-right-close.js
panel-right-close.js.map
panel-right-dashed.js
panel-right-dashed.js.map
panel-right-inactive.js
panel-right-inactive.js.map
panel-right-open.js
panel-right-open.js.map
panel-right.js
panel-right.js.map
panel-top-close.js
panel-top-close.js.map
panel-top-dashed.js
panel-top-dashed.js.map
panel-top-inactive.js
panel-top-inactive.js.map
panel-top-open.js
panel-top-open.js.map
panel-top.js
panel-top.js.map
panels-left-bottom.js
panels-left-bottom.js.map
panels-left-right.js
panels-left-right.js.map
panels-right-bottom.js
panels-right-bottom.js.map
panels-top-bottom.js
panels-top-bottom.js.map
panels-top-left.js
panels-top-left.js.map
paperclip.js
paperclip.js.map
parentheses.js
parentheses.js.map
parking-circle-off.js
parking-circle-off.js.map
parking-circle.js
parking-circle.js.map
parking-meter.js
parking-meter.js.map
parking-square-off.js
parking-square-off.js.map
parking-square.js
parking-square.js.map
party-popper.js
party-popper.js.map
pause-circle.js
pause-circle.js.map
pause-octagon.js
pause-octagon.js.map
pause.js
pause.js.map
paw-print.js
paw-print.js.map
pc-case.js
pc-case.js.map
pen-box.js
pen-box.js.map
pen-line.js
pen-line.js.map
pen-square.js
pen-square.js.map
pen-tool.js
pen-tool.js.map
pen.js
pen.js.map
pencil-line.js
pencil-line.js.map
pencil-ruler.js
pencil-ruler.js.map
pencil.js
pencil.js.map
pentagon.js
pentagon.js.map
percent-circle.js
percent-circle.js.map
percent-diamond.js
percent-diamond.js.map
percent-square.js
percent-square.js.map
percent.js
percent.js.map
person-standing.js
person-standing.js.map
phone-call.js
phone-call.js.map
phone-forwarded.js
phone-forwarded.js.map
phone-incoming.js
phone-incoming.js.map
phone-missed.js
phone-missed.js.map
phone-off.js
phone-off.js.map
phone-outgoing.js
phone-outgoing.js.map
phone.js
phone.js.map
pi-square.js
pi-square.js.map
pi.js
pi.js.map
piano.js
piano.js.map
pickaxe.js
pickaxe.js.map
picture-in-picture-2.js
picture-in-picture-2.js.map
picture-in-picture.js
picture-in-picture.js.map
pie-chart.js
pie-chart.js.map
piggy-bank.js
piggy-bank.js.map
pilcrow-square.js
pilcrow-square.js.map
pilcrow.js
pilcrow.js.map
pill.js
pill.js.map
pin-off.js
pin-off.js.map
pin.js
pin.js.map
pipette.js
pipette.js.map
pizza.js
pizza.js.map
plane-landing.js
plane-landing.js.map
plane-takeoff.js
plane-takeoff.js.map
plane.js
plane.js.map
play-circle.js
play-circle.js.map
play-square.js
play-square.js.map
play.js
play.js.map
plug-2.js
plug-2.js.map
plug-zap-2.js
plug-zap-2.js.map
plug-zap.js
plug-zap.js.map
plug.js
plug.js.map
plus-circle.js
plus-circle.js.map
plus-square.js
plus-square.js.map
plus.js
plus.js.map
pocket-knife.js
pocket-knife.js.map
pocket.js
pocket.js.map
podcast.js
podcast.js.map
pointer-off.js
pointer-off.js.map
pointer.js
pointer.js.map
popcorn.js
popcorn.js.map
popsicle.js
popsicle.js.map
pound-sterling.js
pound-sterling.js.map
power-circle.js
power-circle.js.map
power-off.js
power-off.js.map
power-square.js
power-square.js.map
power.js
power.js.map
presentation.js
presentation.js.map
printer.js
printer.js.map
projector.js
projector.js.map
puzzle.js
puzzle.js.map
pyramid.js
pyramid.js.map
qr-code.js
qr-code.js.map
quote.js
quote.js.map
rabbit.js
rabbit.js.map
radar.js
radar.js.map
radiation.js
radiation.js.map
radical.js
radical.js.map
radio-receiver.js
radio-receiver.js.map
radio-tower.js
radio-tower.js.map
radio.js
radio.js.map
radius.js
radius.js.map
rail-symbol.js
rail-symbol.js.map
rainbow.js
rainbow.js.map
rat.js
rat.js.map
ratio.js
ratio.js.map
receipt-cent.js
receipt-cent.js.map
receipt-euro.js
receipt-euro.js.map
receipt-indian-rupee.js
receipt-indian-rupee.js.map
receipt-japanese-yen.js
receipt-japanese-yen.js.map
receipt-pound-sterling.js
receipt-pound-sterling.js.map
receipt-russian-ruble.js
receipt-russian-ruble.js.map
receipt-swiss-franc.js
receipt-swiss-franc.js.map
receipt-text.js
receipt-text.js.map
receipt.js
receipt.js.map
rectangle-horizontal.js
rectangle-horizontal.js.map
rectangle-vertical.js
rectangle-vertical.js.map
recycle.js
recycle.js.map
redo-2.js
redo-2.js.map
redo-dot.js
redo-dot.js.map
redo.js
redo.js.map
refresh-ccw-dot.js
refresh-ccw-dot.js.map
refresh-ccw.js
refresh-ccw.js.map
refresh-cw-off.js
refresh-cw-off.js.map
refresh-cw.js
refresh-cw.js.map
refrigerator.js
refrigerator.js.map
regex.js
regex.js.map
remove-formatting.js
remove-formatting.js.map
repeat-1.js
repeat-1.js.map
repeat-2.js
repeat-2.js.map
repeat.js
repeat.js.map
replace-all.js
replace-all.js.map
replace.js
replace.js.map
reply-all.js
reply-all.js.map
reply.js
reply.js.map
rewind.js
rewind.js.map
ribbon.js
ribbon.js.map
rocket.js
rocket.js.map
rocking-chair.js
rocking-chair.js.map
roller-coaster.js
roller-coaster.js.map
rotate-3-d.js
rotate-3-d.js.map
rotate-3d.js
rotate-3d.js.map
rotate-ccw.js
rotate-ccw.js.map
rotate-cw.js
rotate-cw.js.map
route-off.js
route-off.js.map
route.js
route.js.map
router.js
router.js.map
rows-2.js
rows-2.js.map
rows-3.js
rows-3.js.map
rows-4.js
rows-4.js.map
rows.js
rows.js.map
rss.js
rss.js.map
ruler.js
ruler.js.map
russian-ruble.js
russian-ruble.js.map
sailboat.js
sailboat.js.map
salad.js
salad.js.map
sandwich.js
sandwich.js.map
satellite-dish.js
satellite-dish.js.map
satellite.js
satellite.js.map
save-all.js
save-all.js.map
save.js
save.js.map
scale-3-d.js
scale-3-d.js.map
scale-3d.js
scale-3d.js.map
scale.js
scale.js.map
scaling.js
scaling.js.map
scan-barcode.js
scan-barcode.js.map
scan-eye.js
scan-eye.js.map
scan-face.js
scan-face.js.map
scan-line.js
scan-line.js.map
scan-search.js
scan-search.js.map
scan-text.js
scan-text.js.map
scan.js
scan.js.map
scatter-chart.js
scatter-chart.js.map
school-2.js
school-2.js.map
school.js
school.js.map
scissors-line-dashed.js
scissors-line-dashed.js.map
scissors-square-dashed-bottom.js
scissors-square-dashed-bottom.js.map
scissors-square.js
scissors-square.js.map
scissors.js
scissors.js.map
screen-share-off.js
screen-share-off.js.map
screen-share.js
screen-share.js.map
scroll-text.js
scroll-text.js.map
scroll.js
scroll.js.map
search-check.js
search-check.js.map
search-code.js
search-code.js.map
search-slash.js
search-slash.js.map
search-x.js
search-x.js.map
search.js
search.js.map
send-horizonal.js
send-horizonal.js.map
send-horizontal.js
send-horizontal.js.map
send-to-back.js
send-to-back.js.map
send.js
send.js.map
separator-horizontal.js
separator-horizontal.js.map
separator-vertical.js
separator-vertical.js.map
server-cog.js
server-cog.js.map
server-crash.js
server-crash.js.map
server-off.js
server-off.js.map
server.js
server.js.map
settings-2.js
settings-2.js.map
settings.js
settings.js.map
shapes.js
shapes.js.map
share-2.js
share-2.js.map
share.js
share.js.map
sheet.js
sheet.js.map
shell.js
shell.js.map
shield-alert.js
shield-alert.js.map
shield-ban.js
shield-ban.js.map
shield-check.js
shield-check.js.map
shield-close.js
shield-close.js.map
shield-ellipsis.js
shield-ellipsis.js.map
shield-half.js
shield-half.js.map
shield-minus.js
shield-minus.js.map
shield-off.js
shield-off.js.map
shield-plus.js
shield-plus.js.map
shield-question.js
shield-question.js.map
shield-x.js
shield-x.js.map
shield.js
shield.js.map
ship-wheel.js
ship-wheel.js.map
ship.js
ship.js.map
shirt.js
shirt.js.map
shopping-bag.js
shopping-bag.js.map
shopping-basket.js
shopping-basket.js.map
shopping-cart.js
shopping-cart.js.map
shovel.js
shovel.js.map
shower-head.js
shower-head.js.map
shrink.js
shrink.js.map
shrub.js
shrub.js.map
shuffle.js
shuffle.js.map
sidebar-close.js
sidebar-close.js.map
sidebar-open.js
sidebar-open.js.map
sidebar.js
sidebar.js.map
sigma-square.js
sigma-square.js.map
sigma.js
sigma.js.map
signal-high.js
signal-high.js.map
signal-low.js
signal-low.js.map
signal-medium.js
signal-medium.js.map
signal-zero.js
signal-zero.js.map
signal.js
signal.js.map
signpost-big.js
signpost-big.js.map
signpost.js
signpost.js.map
siren.js
siren.js.map
skip-back.js
skip-back.js.map
skip-forward.js
skip-forward.js.map
skull.js
skull.js.map
slack.js
slack.js.map
slash-square.js
slash-square.js.map
slash.js
slash.js.map
slice.js
slice.js.map
sliders-horizontal.js
sliders-horizontal.js.map
sliders.js
sliders.js.map
smartphone-charging.js
smartphone-charging.js.map
smartphone-nfc.js
smartphone-nfc.js.map
smartphone.js
smartphone.js.map
smile-plus.js
smile-plus.js.map
smile.js
smile.js.map
snail.js
snail.js.map
snowflake.js
snowflake.js.map
sofa.js
sofa.js.map
sort-asc.js
sort-asc.js.map
sort-desc.js
sort-desc.js.map
soup.js
soup.js.map
space.js
space.js.map
spade.js
spade.js.map
sparkle.js
sparkle.js.map
sparkles.js
sparkles.js.map
speaker.js
speaker.js.map
speech.js
speech.js.map
spell-check-2.js
spell-check-2.js.map
spell-check.js
spell-check.js.map
spline.js
spline.js.map
split-square-horizontal.js
split-square-horizontal.js.map
split-square-vertical.js
split-square-vertical.js.map
split.js
split.js.map
spray-can.js
spray-can.js.map
sprout.js
sprout.js.map
square-asterisk.js
square-asterisk.js.map
square-code.js
square-code.js.map
square-dashed-bottom-code.js
square-dashed-bottom-code.js.map
square-dashed-bottom.js
square-dashed-bottom.js.map
square-dot.js
square-dot.js.map
square-equal.js
square-equal.js.map
square-gantt.js
square-gantt.js.map
square-kanban-dashed.js
square-kanban-dashed.js.map
square-kanban.js
square-kanban.js.map
square-pen.js
square-pen.js.map
square-radical.js
square-radical.js.map
square-slash.js
square-slash.js.map
square-stack.js
square-stack.js.map
square-user-round.js
square-user-round.js.map
square-user.js
square-user.js.map
square.js
square.js.map
squircle.js
squircle.js.map
squirrel.js
squirrel.js.map
stamp.js
stamp.js.map
star-half.js
star-half.js.map
star-off.js
star-off.js.map
star.js
star.js.map
stars.js
stars.js.map
step-back.js
step-back.js.map
step-forward.js
step-forward.js.map
stethoscope.js
stethoscope.js.map
sticker.js
sticker.js.map
sticky-note.js
sticky-note.js.map
stop-circle.js
stop-circle.js.map
store.js
store.js.map
stretch-horizontal.js
stretch-horizontal.js.map
stretch-vertical.js
stretch-vertical.js.map
strikethrough.js
strikethrough.js.map
subscript.js
subscript.js.map
subtitles.js
subtitles.js.map
sun-dim.js
sun-dim.js.map
sun-medium.js
sun-medium.js.map
sun-moon.js
sun-moon.js.map
sun-snow.js
sun-snow.js.map
sun.js
sun.js.map
sunrise.js
sunrise.js.map
sunset.js
sunset.js.map
superscript.js
superscript.js.map
swatch-book.js
swatch-book.js.map
swiss-franc.js
swiss-franc.js.map
switch-camera.js
switch-camera.js.map
sword.js
sword.js.map
swords.js
swords.js.map
syringe.js
syringe.js.map
table-2.js
table-2.js.map
table-cells-merge.js
table-cells-merge.js.map
table-cells-split.js
table-cells-split.js.map
table-columns-split.js
table-columns-split.js.map
table-properties.js
table-properties.js.map
table-rows-split.js
table-rows-split.js.map
table.js
table.js.map
tablet-smartphone.js
tablet-smartphone.js.map
tablet.js
tablet.js.map
tablets.js
tablets.js.map
tag.js
tag.js.map
tags.js
tags.js.map
tally-1.js
tally-1.js.map
tally-2.js
tally-2.js.map
tally-3.js
tally-3.js.map
tally-4.js
tally-4.js.map
tally-5.js
tally-5.js.map
tangent.js
tangent.js.map
target.js
target.js.map
telescope.js
telescope.js.map
tent-tree.js
tent-tree.js.map
tent.js
tent.js.map
terminal-square.js
terminal-square.js.map
terminal.js
terminal.js.map
test-tube-2.js
test-tube-2.js.map
test-tube.js
test-tube.js.map
test-tubes.js
test-tubes.js.map
text-cursor-input.js
text-cursor-input.js.map
text-cursor.js
text-cursor.js.map
text-quote.js
text-quote.js.map
text-search.js
text-search.js.map
text-select.js
text-select.js.map
text-selection.js
text-selection.js.map
text.js
text.js.map
theater.js
theater.js.map
thermometer-snowflake.js
thermometer-snowflake.js.map
thermometer-sun.js
thermometer-sun.js.map
thermometer.js
thermometer.js.map
thumbs-down.js
thumbs-down.js.map
thumbs-up.js
thumbs-up.js.map
ticket-check.js
ticket-check.js.map
ticket-minus.js
ticket-minus.js.map
ticket-percent.js
ticket-percent.js.map
ticket-plus.js
ticket-plus.js.map
ticket-slash.js
ticket-slash.js.map
ticket-x.js
ticket-x.js.map
ticket.js
ticket.js.map
timer-off.js
timer-off.js.map
timer-reset.js
timer-reset.js.map
timer.js
timer.js.map
toggle-left.js
toggle-left.js.map
toggle-right.js
toggle-right.js.map
tornado.js
tornado.js.map
torus.js
torus.js.map
touchpad-off.js
touchpad-off.js.map
touchpad.js
touchpad.js.map
tower-control.js
tower-control.js.map
toy-brick.js
toy-brick.js.map
tractor.js
tractor.js.map
traffic-cone.js
traffic-cone.js.map
train-front-tunnel.js
train-front-tunnel.js.map
train-front.js
train-front.js.map
train-track.js
train-track.js.map
train.js
train.js.map
tram-front.js
tram-front.js.map
trash-2.js
trash-2.js.map
trash.js
trash.js.map
tree-deciduous.js
tree-deciduous.js.map
tree-pine.js
tree-pine.js.map
trees.js
trees.js.map
trello.js
trello.js.map
trending-down.js
trending-down.js.map
trending-up.js
trending-up.js.map
triangle-right.js
triangle-right.js.map
triangle.js
triangle.js.map
trophy.js
trophy.js.map
truck.js
truck.js.map
turtle.js
turtle.js.map
tv-2.js
tv-2.js.map
tv.js
tv.js.map
twitch.js
twitch.js.map
twitter.js
twitter.js.map
type.js
type.js.map
umbrella-off.js
umbrella-off.js.map
umbrella.js
umbrella.js.map
underline.js
underline.js.map
undo-2.js
undo-2.js.map
undo-dot.js
undo-dot.js.map
undo.js
undo.js.map
unfold-horizontal.js
unfold-horizontal.js.map
unfold-vertical.js
unfold-vertical.js.map
ungroup.js
ungroup.js.map
unlink-2.js
unlink-2.js.map
unlink.js
unlink.js.map
unlock-keyhole.js
unlock-keyhole.js.map
unlock.js
unlock.js.map
unplug.js
unplug.js.map
upload-cloud.js
upload-cloud.js.map
upload.js
upload.js.map
usb.js
usb.js.map
user-2.js
user-2.js.map
user-check-2.js
user-check-2.js.map
user-check.js
user-check.js.map
user-circle-2.js
user-circle-2.js.map
user-circle.js
user-circle.js.map
user-cog-2.js
user-cog-2.js.map
user-cog.js
user-cog.js.map
user-minus-2.js
user-minus-2.js.map
user-minus.js
user-minus.js.map
user-plus-2.js
user-plus-2.js.map
user-plus.js
user-plus.js.map
user-round-check.js
user-round-check.js.map
user-round-cog.js
user-round-cog.js.map
user-round-minus.js
user-round-minus.js.map
user-round-plus.js
user-round-plus.js.map
user-round-search.js
user-round-search.js.map
user-round-x.js
user-round-x.js.map
user-round.js
user-round.js.map
user-search.js
user-search.js.map
user-square-2.js
user-square-2.js.map
user-square.js
user-square.js.map
user-x-2.js
user-x-2.js.map
user-x.js
user-x.js.map
user.js
user.js.map
users-2.js
users-2.js.map
users-round.js
users-round.js.map
users.js
users.js.map
utensils-crossed.js
utensils-crossed.js.map
utensils.js
utensils.js.map
utility-pole.js
utility-pole.js.map
variable.js
variable.js.map
vault.js
vault.js.map
vegan.js
vegan.js.map
venetian-mask.js
venetian-mask.js.map
verified.js
verified.js.map
vibrate-off.js
vibrate-off.js.map
vibrate.js
vibrate.js.map
video-off.js
video-off.js.map
video.js
video.js.map
videotape.js
videotape.js.map
view.js
view.js.map
voicemail.js
voicemail.js.map
volume-1.js
volume-1.js.map
volume-2.js
volume-2.js.map
volume-x.js
volume-x.js.map
volume.js
volume.js.map
vote.js
vote.js.map
wallet-2.js
wallet-2.js.map
wallet-cards.js
wallet-cards.js.map
wallet.js
wallet.js.map
wallpaper.js
wallpaper.js.map
wand-2.js
wand-2.js.map
wand.js
wand.js.map
warehouse.js
warehouse.js.map
washing-machine.js
washing-machine.js.map
watch.js
watch.js.map
waves.js
waves.js.map
waypoints.js
waypoints.js.map
webcam.js
webcam.js.map
webhook-off.js
webhook-off.js.map
webhook.js
webhook.js.map
weight.js
weight.js.map
wheat-off.js
wheat-off.js.map
wheat.js
wheat.js.map
whole-word.js
whole-word.js.map
wifi-off.js
wifi-off.js.map
wifi.js
wifi.js.map
wind.js
wind.js.map
wine-off.js
wine-off.js.map
wine.js
wine.js.map
workflow.js
workflow.js.map
wrap-text.js
wrap-text.js.map
wrench.js
wrench.js.map
x-circle.js
x-circle.js.map
x-octagon.js
x-octagon.js.map
x-square.js
x-square.js.map
x.js
x.js.map
youtube.js
youtube.js.map
zap-off.js
zap-off.js.map
zap.js
zap.js.map
zoom-in.js
zoom-in.js.map
zoom-out.js
zoom-out.js.map

./node_modules/lucide-react/dist/umd:
lucide-react.js
lucide-react.js.map
lucide-react.min.js
lucide-react.min.js.map

./node_modules/merge2:
LICENSE
README.md
index.js
package.json

./node_modules/micromatch:
LICENSE*
README.md
index.js
package.json

./node_modules/minimatch:
LICENSE
README.md
minimatch.js
package.json

./node_modules/minipass:
LICENSE
README.md
dist/
package.json

./node_modules/minipass/dist:
commonjs/
esm/

./node_modules/minipass/dist/commonjs:
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json

./node_modules/minipass/dist/esm:
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json

./node_modules/ms:
index.js
license.md
package.json
readme.md

./node_modules/mz:
HISTORY.md
LICENSE
README.md
child_process.js
crypto.js
dns.js
fs.js
index.js
package.json
readline.js
zlib.js

./node_modules/nanoid:
LICENSE
README.md
async/
bin/
index.browser.cjs
index.browser.js
index.cjs
index.d.cts
index.d.ts
index.js
nanoid.js
non-secure/
package.json
url-alphabet/

./node_modules/nanoid/async:
index.browser.cjs
index.browser.js
index.cjs
index.d.ts
index.js
index.native.js
package.json

./node_modules/nanoid/bin:
nanoid.cjs*

./node_modules/nanoid/non-secure:
index.cjs
index.d.ts
index.js
package.json

./node_modules/nanoid/url-alphabet:
index.cjs
index.js
package.json

./node_modules/natural-compare:
README.md
index.js
package.json

./node_modules/node-releases:
LICENSE
README.md
data/
package.json

./node_modules/node-releases/data:
processed/
release-schedule/

./node_modules/node-releases/data/processed:
envs.json

./node_modules/node-releases/data/release-schedule:
release-schedule.json

./node_modules/normalize-path:
LICENSE
README.md
index.js
package.json

./node_modules/normalize-range:
index.js
license
package.json
readme.md

./node_modules/object-assign:
index.js
license
package.json
readme.md

./node_modules/object-hash:
LICENSE
dist/
index.js
package.json
readme.markdown

./node_modules/object-hash/dist:
object_hash.js

./node_modules/optionator:
CHANGELOG.md
LICENSE
README.md
lib/
package.json

./node_modules/optionator/lib:
help.js
index.js
util.js

./node_modules/p-limit:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/p-locate:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/package-json-from-dist:
LICENSE.md
README.md
dist/
package.json

./node_modules/package-json-from-dist/dist:
commonjs/
esm/

./node_modules/package-json-from-dist/dist/commonjs:
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json

./node_modules/package-json-from-dist/dist/esm:
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json

./node_modules/pako:
CHANGELOG.md
LICENSE
README.md
dist/
index.js
lib/
package.json

./node_modules/pako/dist:
pako.js
pako.min.js
pako_deflate.js
pako_deflate.min.js
pako_inflate.js
pako_inflate.min.js

./node_modules/pako/lib:
deflate.js
inflate.js
utils/
zlib/

./node_modules/pako/lib/utils:
common.js
strings.js

./node_modules/pako/lib/zlib:
README
adler32.js
constants.js
crc32.js
deflate.js
gzheader.js
inffast.js
inflate.js
inftrees.js
messages.js
trees.js
zstream.js

./node_modules/parent-module:
index.js
license
package.json
readme.md

./node_modules/path-exists:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/path-key:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/path-parse:
LICENSE
README.md
index.js
package.json

./node_modules/path-scurry:
LICENSE.md
README.md
dist/
node_modules/
package.json

./node_modules/path-scurry/dist:
commonjs/
esm/

./node_modules/path-scurry/dist/commonjs:
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json

./node_modules/path-scurry/dist/esm:
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json

./node_modules/path-scurry/node_modules:
lru-cache/

./node_modules/path-scurry/node_modules/lru-cache:
LICENSE
README.md
dist/
package.json

./node_modules/path-scurry/node_modules/lru-cache/dist:
commonjs/
esm/

./node_modules/path-scurry/node_modules/lru-cache/dist/commonjs:
index.d.ts
index.d.ts.map
index.js
index.js.map
index.min.js
index.min.js.map
package.json

./node_modules/path-scurry/node_modules/lru-cache/dist/esm:
index.d.ts
index.d.ts.map
index.js
index.js.map
index.min.js
index.min.js.map
package.json

./node_modules/performance-now:
README.md
lib/
license.txt
package.json
src/
test/

./node_modules/performance-now/lib:
performance-now.js
performance-now.js.map

./node_modules/performance-now/src:
index.d.ts
performance-now.coffee

./node_modules/performance-now/test:
mocha.opts
performance-now.coffee
scripts/
scripts.coffee

./node_modules/performance-now/test/scripts:
delayed-call.coffee*
delayed-require.coffee*
difference.coffee*
initial-value.coffee*

./node_modules/picocolors:
LICENSE
README.md
package.json
picocolors.browser.js
picocolors.d.ts
picocolors.js
types.ts

./node_modules/picomatch:
CHANGELOG.md
LICENSE
README.md
index.js
lib/
package.json

./node_modules/picomatch/lib:
constants.js
parse.js
picomatch.js
scan.js
utils.js

./node_modules/pify:
index.js
license
package.json
readme.md

./node_modules/pirates:
LICENSE
README.md
index.d.ts
lib/
package.json

./node_modules/pirates/lib:
index.js

./node_modules/postcss:
LICENSE
README.md
lib/
package.json*

./node_modules/postcss/lib:
at-rule.d.ts
at-rule.js
comment.d.ts
comment.js
container.d.ts
container.js
css-syntax-error.d.ts
css-syntax-error.js
declaration.d.ts
declaration.js
document.d.ts
document.js
fromJSON.d.ts
fromJSON.js
input.d.ts
input.js
lazy-result.d.ts
lazy-result.js
list.d.ts
list.js
map-generator.js
no-work-result.d.ts
no-work-result.js
node.d.ts
node.js
parse.d.ts
parse.js
parser.js
postcss.d.mts
postcss.d.ts
postcss.js
postcss.mjs
previous-map.d.ts
previous-map.js
processor.d.ts
processor.js
result.d.ts
result.js
root.d.ts
root.js
rule.d.ts
rule.js
stringifier.d.ts
stringifier.js
stringify.d.ts
stringify.js
symbols.js
terminal-highlight.js
tokenize.js
warn-once.js
warning.d.ts
warning.js

./node_modules/postcss-import:
LICENSE*
README.md
index.js*
lib/
package.json

./node_modules/postcss-import/lib:
assign-layer-names.js
data-url.js
join-layer.js
join-media.js
load-content.js
parse-statements.js
process-content.js
resolve-id.js

./node_modules/postcss-js:
LICENSE
README.md
async.js
index.js
index.mjs
objectifier.js
package.json
parser.js
process-result.js
sync.js

./node_modules/postcss-load-config:
LICENSE
README.md
node_modules/
package.json
src/

./node_modules/postcss-load-config/node_modules:
lilconfig/

./node_modules/postcss-load-config/node_modules/lilconfig:
LICENSE
package.json
readme.md
src/

./node_modules/postcss-load-config/node_modules/lilconfig/src:
index.d.ts
index.js

./node_modules/postcss-load-config/src:
index.d.ts
index.js
options.js
plugins.js
req.js

./node_modules/postcss-nested:
LICENSE
README.md
index.d.ts
index.js
package.json

./node_modules/postcss-selector-parser:
API.md
CHANGELOG.md
LICENSE-MIT
README.md
dist/
package.json
postcss-selector-parser.d.ts

./node_modules/postcss-selector-parser/dist:
index.js
parser.js
processor.js
selectors/
sortAscending.js
tokenTypes.js
tokenize.js
util/

./node_modules/postcss-selector-parser/dist/selectors:
attribute.js
className.js
combinator.js
comment.js
constructors.js
container.js
guards.js
id.js
index.js
namespace.js
nesting.js
node.js
pseudo.js
root.js
selector.js
string.js
tag.js
types.js
universal.js

./node_modules/postcss-selector-parser/dist/util:
ensureObject.js
getProp.js
index.js
stripComments.js
unesc.js

./node_modules/postcss-value-parser:
LICENSE
README.md
lib/
package.json

./node_modules/postcss-value-parser/lib:
index.d.ts
index.js
parse.js
stringify.js
unit.js
walk.js

./node_modules/prelude-ls:
CHANGELOG.md
LICENSE
README.md
lib/
package.json

./node_modules/prelude-ls/lib:
Func.js
List.js
Num.js
Obj.js
Str.js
index.js

./node_modules/process-nextick-args:
index.js
license.md
package.json
readme.md

./node_modules/punycode:
LICENSE-MIT.txt
README.md
package.json
punycode.es6.js
punycode.js

./node_modules/queue-microtask:
LICENSE*
README.md
index.d.ts
index.js
package.json

./node_modules/raf:
LICENSE
README.md
index.js
package.json
polyfill.js
test.js
window.js

./node_modules/react:
LICENSE
README.md
cjs/
index.js
jsx-dev-runtime.js
jsx-runtime.js
package.json
react.shared-subset.js
umd/

./node_modules/react/cjs:
react-jsx-dev-runtime.development.js
react-jsx-dev-runtime.production.min.js
react-jsx-dev-runtime.profiling.min.js
react-jsx-runtime.development.js
react-jsx-runtime.production.min.js
react-jsx-runtime.profiling.min.js
react.development.js
react.production.min.js
react.shared-subset.development.js
react.shared-subset.production.min.js

./node_modules/react/umd:
react.development.js
react.production.min.js
react.profiling.min.js

./node_modules/react-dom:
LICENSE
README.md
cjs/
client.js
index.js
package.json
profiling.js
server.browser.js
server.js
server.node.js
test-utils.js
umd/

./node_modules/react-dom/cjs:
react-dom-server-legacy.browser.development.js
react-dom-server-legacy.browser.production.min.js
react-dom-server-legacy.node.development.js
react-dom-server-legacy.node.production.min.js
react-dom-server.browser.development.js
react-dom-server.browser.production.min.js
react-dom-server.node.development.js
react-dom-server.node.production.min.js
react-dom-test-utils.development.js
react-dom-test-utils.production.min.js
react-dom.development.js
react-dom.production.min.js
react-dom.profiling.min.js

./node_modules/react-dom/umd:
react-dom-server-legacy.browser.development.js
react-dom-server-legacy.browser.production.min.js
react-dom-server.browser.development.js
react-dom-server.browser.production.min.js
react-dom-test-utils.development.js
react-dom-test-utils.production.min.js
react-dom.development.js
react-dom.production.min.js
react-dom.profiling.min.js

./node_modules/react-refresh:
LICENSE
README.md
babel.js
cjs/
package.json
runtime.js

./node_modules/react-refresh/cjs:
react-refresh-babel.development.js
react-refresh-babel.production.min.js
react-refresh-runtime.development.js
react-refresh-runtime.production.min.js

./node_modules/read-cache:
LICENSE
README.md
index.js
package.json

./node_modules/readable-stream:
CONTRIBUTING.md
GOVERNANCE.md
LICENSE
README.md
doc/
duplex-browser.js
duplex.js
lib/
package.json
passthrough.js
readable-browser.js
readable.js
transform.js
writable-browser.js
writable.js

./node_modules/readable-stream/doc:
wg-meetings/

./node_modules/readable-stream/doc/wg-meetings:
2015-01-30.md

./node_modules/readable-stream/lib:
_stream_duplex.js
_stream_passthrough.js
_stream_readable.js
_stream_transform.js
_stream_writable.js
internal/

./node_modules/readable-stream/lib/internal:
streams/

./node_modules/readable-stream/lib/internal/streams:
BufferList.js
destroy.js
stream-browser.js
stream.js

./node_modules/readdirp:
LICENSE
README.md
index.d.ts
index.js
package.json

./node_modules/regenerator-runtime:
LICENSE
README.md
package.json
path.js
runtime.js

./node_modules/resolve:
LICENSE
SECURITY.md
async.js
bin/
example/
index.js
lib/
package.json
readme.markdown
sync.js
test/

./node_modules/resolve/bin:
resolve*

./node_modules/resolve/example:
async.js
sync.js

./node_modules/resolve/lib:
async.js
caller.js
core.js
core.json
homedir.js
is-core.js
node-modules-paths.js
normalize-options.js
sync.js

./node_modules/resolve/test:
core.js
dotdot/
dotdot.js
faulty_basedir.js
filter.js
filter_sync.js
home_paths.js
home_paths_sync.js
mock.js
mock_sync.js
module_dir/
module_dir.js
node-modules-paths.js
node_path/
node_path.js
nonstring.js
pathfilter/
pathfilter.js
precedence/
precedence.js
resolver/
resolver.js
resolver_sync.js
shadowed_core/
shadowed_core.js
subdirs.js
symlinks.js

./node_modules/resolve/test/dotdot:
abc/
index.js

./node_modules/resolve/test/dotdot/abc:
index.js

./node_modules/resolve/test/module_dir:
xmodules/
ymodules/
zmodules/

./node_modules/resolve/test/module_dir/xmodules:
aaa/

./node_modules/resolve/test/module_dir/xmodules/aaa:
index.js

./node_modules/resolve/test/module_dir/ymodules:
aaa/

./node_modules/resolve/test/module_dir/ymodules/aaa:
index.js

./node_modules/resolve/test/module_dir/zmodules:
bbb/

./node_modules/resolve/test/module_dir/zmodules/bbb:
main.js
package.json

./node_modules/resolve/test/node_path:
x/
y/

./node_modules/resolve/test/node_path/x:
aaa/
ccc/

./node_modules/resolve/test/node_path/x/aaa:
index.js

./node_modules/resolve/test/node_path/x/ccc:
index.js

./node_modules/resolve/test/node_path/y:
bbb/
ccc/

./node_modules/resolve/test/node_path/y/bbb:
index.js

./node_modules/resolve/test/node_path/y/ccc:
index.js

./node_modules/resolve/test/pathfilter:
deep_ref/

./node_modules/resolve/test/pathfilter/deep_ref:
main.js

./node_modules/resolve/test/precedence:
aaa/
aaa.js
bbb/
bbb.js

./node_modules/resolve/test/precedence/aaa:
index.js
main.js

./node_modules/resolve/test/precedence/bbb:
main.js

./node_modules/resolve/test/resolver:
baz/
browser_field/
cup.coffee
dot_main/
dot_slash_main/
false_main/
foo.js
incorrect_main/
invalid_main/
mug.coffee
mug.js
multirepo/
nested_symlinks/
other_path/
quux/
same_names/
symlinked/
without_basedir/

./node_modules/resolve/test/resolver/baz:
doom.js
package.json
quux.js

./node_modules/resolve/test/resolver/browser_field:
a.js
b.js
package.json

./node_modules/resolve/test/resolver/dot_main:
index.js
package.json

./node_modules/resolve/test/resolver/dot_slash_main:
index.js
package.json

./node_modules/resolve/test/resolver/false_main:
index.js
package.json

./node_modules/resolve/test/resolver/incorrect_main:
index.js
package.json

./node_modules/resolve/test/resolver/invalid_main:
package.json

./node_modules/resolve/test/resolver/multirepo:
lerna.json
package.json
packages/

./node_modules/resolve/test/resolver/multirepo/packages:
package-a/
package-b/

./node_modules/resolve/test/resolver/multirepo/packages/package-a:
index.js
package.json

./node_modules/resolve/test/resolver/multirepo/packages/package-b:
index.js
package.json

./node_modules/resolve/test/resolver/nested_symlinks:
mylib/

./node_modules/resolve/test/resolver/nested_symlinks/mylib:
async.js
package.json
sync.js

./node_modules/resolve/test/resolver/other_path:
lib/
root.js

./node_modules/resolve/test/resolver/other_path/lib:
other-lib.js

./node_modules/resolve/test/resolver/quux:
foo/

./node_modules/resolve/test/resolver/quux/foo:
index.js

./node_modules/resolve/test/resolver/same_names:
foo/
foo.js

./node_modules/resolve/test/resolver/same_names/foo:
index.js

./node_modules/resolve/test/resolver/symlinked:
_/
package/

./node_modules/resolve/test/resolver/symlinked/_:
node_modules/
symlink_target/

./node_modules/resolve/test/resolver/symlinked/_/node_modules:
foo.js

./node_modules/resolve/test/resolver/symlinked/_/symlink_target:

./node_modules/resolve/test/resolver/symlinked/package:
bar.js
package.json

./node_modules/resolve/test/resolver/without_basedir:
main.js

./node_modules/resolve/test/shadowed_core:
node_modules/

./node_modules/resolve/test/shadowed_core/node_modules:
util/

./node_modules/resolve/test/shadowed_core/node_modules/util:
index.js

./node_modules/resolve-from:
index.js
license
package.json
readme.md

./node_modules/reusify:
LICENSE
README.md
benchmarks/
package.json
reusify.js
test.js

./node_modules/reusify/benchmarks:
createNoCodeFunction.js
fib.js
reuseNoCodeFunction.js

./node_modules/rgbcolor:
FEEL-FREE.md
LICENSE.md
README.md
index.js
package.json

./node_modules/rollup:
LICENSE.md
dist/
package.json

./node_modules/rollup/dist:
bin/
es/
getLogFilter.d.ts
getLogFilter.js
loadConfigFile.d.ts
loadConfigFile.js
native.js
parseAst.d.ts
parseAst.js
rollup.d.ts
rollup.js
shared/
wasm-node/

./node_modules/rollup/dist/bin:
rollup*

./node_modules/rollup/dist/es:
getLogFilter.js
package.json
parseAst.js
rollup.js
shared/

./node_modules/rollup/dist/es/shared:
node-entry.js
parseAst.js
watch.js

./node_modules/rollup/dist/shared:
fsevents-importer.js
index.js
loadConfigFile.js
parseAst.js
rollup.js
watch-cli.js
watch.js

./node_modules/rollup/dist/wasm-node:
bindings_wasm.js
bindings_wasm_bg.wasm

./node_modules/run-parallel:
LICENSE
README.md
index.js
package.json

./node_modules/safe-buffer:
LICENSE
README.md
index.d.ts
index.js
package.json

./node_modules/sax:
LICENSE
README.md
lib/
package.json

./node_modules/sax/lib:
sax.js

./node_modules/scheduler:
LICENSE
README.md
cjs/
index.js
package.json
umd/
unstable_mock.js
unstable_post_task.js

./node_modules/scheduler/cjs:
scheduler-unstable_mock.development.js
scheduler-unstable_mock.production.min.js
scheduler-unstable_post_task.development.js
scheduler-unstable_post_task.production.min.js
scheduler.development.js
scheduler.production.min.js

./node_modules/scheduler/umd:
scheduler-unstable_mock.development.js
scheduler-unstable_mock.production.min.js
scheduler.development.js
scheduler.production.min.js
scheduler.profiling.min.js

./node_modules/semver:
LICENSE
README.md
bin/
package.json
range.bnf
semver.js

./node_modules/semver/bin:
semver.js*

./node_modules/setimmediate:
LICENSE.txt
package.json
setImmediate.js

./node_modules/shebang-command:
index.js
license
package.json
readme.md

./node_modules/shebang-regex:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/signal-exit:
LICENSE.txt
README.md
dist/
package.json

./node_modules/signal-exit/dist:
cjs/
mjs/

./node_modules/signal-exit/dist/cjs:
browser.d.ts
browser.d.ts.map
browser.js
browser.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
signals.d.ts
signals.d.ts.map
signals.js
signals.js.map

./node_modules/signal-exit/dist/mjs:
browser.d.ts
browser.d.ts.map
browser.js
browser.js.map
index.d.ts
index.d.ts.map
index.js
index.js.map
package.json
signals.d.ts
signals.d.ts.map
signals.js
signals.js.map

./node_modules/sonner:
LICENSE.md
README.md
dist/
package.json

./node_modules/sonner/dist:
index.d.ts
index.js
index.js.map
index.mjs
index.mjs.map
styles.css

./node_modules/source-map-js:
LICENSE
README.md
lib/
package.json
source-map.d.ts
source-map.js

./node_modules/source-map-js/lib:
array-set.js
base64-vlq.js
base64.js
binary-search.js
mapping-list.js
quick-sort.js
source-map-consumer.d.ts
source-map-consumer.js
source-map-generator.d.ts
source-map-generator.js
source-node.d.ts
source-node.js
util.js

./node_modules/stackblur-canvas:
CHANGES.md
LICENSE-MIT.txt
README.md
dist/
index.d.ts
package.json
src/

./node_modules/stackblur-canvas/dist:
stackblur-es.js
stackblur-es.min.js
stackblur-es.min.js.map
stackblur.js
stackblur.min.js
stackblur.min.js.map

./node_modules/stackblur-canvas/src:
stackblur.js

./node_modules/string-width:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/string-width-cjs:
index.d.ts
index.js
license
node_modules/
package.json
readme.md

./node_modules/string-width-cjs/node_modules:
ansi-regex/
emoji-regex/
strip-ansi/

./node_modules/string-width-cjs/node_modules/ansi-regex:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/string-width-cjs/node_modules/emoji-regex:
LICENSE-MIT.txt
README.md
es2015/
index.d.ts
index.js
package.json
text.js

./node_modules/string-width-cjs/node_modules/emoji-regex/es2015:
index.js
text.js

./node_modules/string-width-cjs/node_modules/strip-ansi:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/string_decoder:
LICENSE
README.md
lib/
package.json

./node_modules/string_decoder/lib:
string_decoder.js

./node_modules/strip-ansi:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/strip-ansi-cjs:
index.d.ts
index.js
license
node_modules/
package.json
readme.md

./node_modules/strip-ansi-cjs/node_modules:
ansi-regex/

./node_modules/strip-ansi-cjs/node_modules/ansi-regex:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/strip-json-comments:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/sucrase:
LICENSE
README.md
bin/
dist/
package.json
register/
ts-node-plugin/

./node_modules/sucrase/bin:
sucrase*
sucrase-node*

./node_modules/sucrase/dist:
CJSImportProcessor.js
HelperManager.js
NameManager.js
Options-gen-types.js
Options.js
TokenProcessor.js
cli.js
computeSourceMap.js
esm/
identifyShadowedGlobals.js
index.js
parser/
register.js
transformers/
types/
util/

./node_modules/sucrase/dist/esm:
CJSImportProcessor.js
HelperManager.js
NameManager.js
Options-gen-types.js
Options.js
TokenProcessor.js
cli.js
computeSourceMap.js
identifyShadowedGlobals.js
index.js
parser/
register.js
transformers/
util/

./node_modules/sucrase/dist/esm/parser:
index.js
plugins/
tokenizer/
traverser/
util/

./node_modules/sucrase/dist/esm/parser/plugins:
flow.js
jsx/
types.js
typescript.js

./node_modules/sucrase/dist/esm/parser/plugins/jsx:
index.js
xhtml.js

./node_modules/sucrase/dist/esm/parser/tokenizer:
index.js
keywords.js
readWord.js
readWordTree.js
state.js
types.js

./node_modules/sucrase/dist/esm/parser/traverser:
base.js
expression.js
index.js
lval.js
statement.js
util.js

./node_modules/sucrase/dist/esm/parser/util:
charcodes.js
identifier.js
whitespace.js

./node_modules/sucrase/dist/esm/transformers:
CJSImportTransformer.js
ESMImportTransformer.js
FlowTransformer.js
JSXTransformer.js
JestHoistTransformer.js
NumericSeparatorTransformer.js
OptionalCatchBindingTransformer.js
OptionalChainingNullishTransformer.js
ReactDisplayNameTransformer.js
ReactHotLoaderTransformer.js
RootTransformer.js
Transformer.js
TypeScriptTransformer.js

./node_modules/sucrase/dist/esm/util:
elideImportEquals.js
formatTokens.js
getClassInfo.js
getDeclarationInfo.js
getIdentifierNames.js
getImportExportSpecifierInfo.js
getJSXPragmaInfo.js
getNonTypeIdentifiers.js
getTSImportedNames.js
isAsyncOperation.js
isExportFrom.js
isIdentifier.js
removeMaybeImportAttributes.js
shouldElideDefaultExport.js

./node_modules/sucrase/dist/parser:
index.js
plugins/
tokenizer/
traverser/
util/

./node_modules/sucrase/dist/parser/plugins:
flow.js
jsx/
types.js
typescript.js

./node_modules/sucrase/dist/parser/plugins/jsx:
index.js
xhtml.js

./node_modules/sucrase/dist/parser/tokenizer:
index.js
keywords.js
readWord.js
readWordTree.js
state.js
types.js

./node_modules/sucrase/dist/parser/traverser:
base.js
expression.js
index.js
lval.js
statement.js
util.js

./node_modules/sucrase/dist/parser/util:
charcodes.js
identifier.js
whitespace.js

./node_modules/sucrase/dist/transformers:
CJSImportTransformer.js
ESMImportTransformer.js
FlowTransformer.js
JSXTransformer.js
JestHoistTransformer.js
NumericSeparatorTransformer.js
OptionalCatchBindingTransformer.js
OptionalChainingNullishTransformer.js
ReactDisplayNameTransformer.js
ReactHotLoaderTransformer.js
RootTransformer.js
Transformer.js
TypeScriptTransformer.js

./node_modules/sucrase/dist/types:
CJSImportProcessor.d.ts
HelperManager.d.ts
NameManager.d.ts
Options-gen-types.d.ts
Options.d.ts
TokenProcessor.d.ts
cli.d.ts
computeSourceMap.d.ts
identifyShadowedGlobals.d.ts
index.d.ts
parser/
register.d.ts
transformers/
util/

./node_modules/sucrase/dist/types/parser:
index.d.ts
plugins/
tokenizer/
traverser/
util/

./node_modules/sucrase/dist/types/parser/plugins:
flow.d.ts
jsx/
types.d.ts
typescript.d.ts

./node_modules/sucrase/dist/types/parser/plugins/jsx:
index.d.ts
xhtml.d.ts

./node_modules/sucrase/dist/types/parser/tokenizer:
index.d.ts
keywords.d.ts
readWord.d.ts
readWordTree.d.ts
state.d.ts
types.d.ts

./node_modules/sucrase/dist/types/parser/traverser:
base.d.ts
expression.d.ts
index.d.ts
lval.d.ts
statement.d.ts
util.d.ts

./node_modules/sucrase/dist/types/parser/util:
charcodes.d.ts
identifier.d.ts
whitespace.d.ts

./node_modules/sucrase/dist/types/transformers:
CJSImportTransformer.d.ts
ESMImportTransformer.d.ts
FlowTransformer.d.ts
JSXTransformer.d.ts
JestHoistTransformer.d.ts
NumericSeparatorTransformer.d.ts
OptionalCatchBindingTransformer.d.ts
OptionalChainingNullishTransformer.d.ts
ReactDisplayNameTransformer.d.ts
ReactHotLoaderTransformer.d.ts
RootTransformer.d.ts
Transformer.d.ts
TypeScriptTransformer.d.ts

./node_modules/sucrase/dist/types/util:
elideImportEquals.d.ts
formatTokens.d.ts
getClassInfo.d.ts
getDeclarationInfo.d.ts
getIdentifierNames.d.ts
getImportExportSpecifierInfo.d.ts
getJSXPragmaInfo.d.ts
getNonTypeIdentifiers.d.ts
getTSImportedNames.d.ts
isAsyncOperation.d.ts
isExportFrom.d.ts
isIdentifier.d.ts
removeMaybeImportAttributes.d.ts
shouldElideDefaultExport.d.ts

./node_modules/sucrase/dist/util:
elideImportEquals.js
formatTokens.js
getClassInfo.js
getDeclarationInfo.js
getIdentifierNames.js
getImportExportSpecifierInfo.js
getJSXPragmaInfo.js
getNonTypeIdentifiers.js
getTSImportedNames.js
isAsyncOperation.js
isExportFrom.js
isIdentifier.js
removeMaybeImportAttributes.js
shouldElideDefaultExport.js

./node_modules/sucrase/register:
index.js
js.js
jsx.js
ts-legacy-module-interop.js
ts.js
tsx-legacy-module-interop.js
tsx.js

./node_modules/sucrase/ts-node-plugin:
index.js

./node_modules/supports-color:
browser.js
index.js
license
package.json
readme.md

./node_modules/supports-preserve-symlinks-flag:
CHANGELOG.md
LICENSE
README.md
browser.js
index.js
package.json
test/

./node_modules/supports-preserve-symlinks-flag/test:
index.js

./node_modules/svg-pathdata:
CHANGELOG.md
LICENSE
README.md*
index.d.ts
karma.conf.js*
lib/
package.json
src/
tsconfig.json
tslint.json

./node_modules/svg-pathdata/lib:
SVGPathData.cjs
SVGPathData.cjs.map
SVGPathData.d.ts
SVGPathData.module.js
SVGPathData.module.js.map
SVGPathDataEncoder.d.ts
SVGPathDataParser.d.ts
SVGPathDataTransformer.d.ts
TransformableSVG.d.ts
mathUtils.d.ts
types.d.ts

./node_modules/svg-pathdata/src:
SVGPathData.ts
SVGPathDataEncoder.ts
SVGPathDataParser.ts
SVGPathDataTransformer.ts
TransformableSVG.ts
mathUtils.ts
types.ts

./node_modules/tailwindcss:
CHANGELOG.md
LICENSE
README.md
base.css
colors.d.ts
colors.js
components.css
defaultConfig.d.ts
defaultConfig.js
defaultTheme.d.ts
defaultTheme.js
lib/
loadConfig.d.ts
loadConfig.js
nesting/
package.json
peers/
plugin.d.ts
plugin.js
prettier.config.js
resolveConfig.d.ts
resolveConfig.js
screens.css
scripts/
src/
stubs/
tailwind.css
types/
utilities.css
variants.css

./node_modules/tailwindcss/lib:
cli/
cli-peer-dependencies.js
cli.js*
corePluginList.js
corePlugins.js
css/
featureFlags.js
index.js
lib/
plugin.js
postcss-plugins/
processTailwindFeatures.js
public/
util/
value-parser/

./node_modules/tailwindcss/lib/cli:
build/
help/
index.js
init/

./node_modules/tailwindcss/lib/cli/build:
deps.js
index.js
plugin.js
utils.js
watching.js

./node_modules/tailwindcss/lib/cli/help:
index.js

./node_modules/tailwindcss/lib/cli/init:
index.js

./node_modules/tailwindcss/lib/css:
LICENSE
preflight.css

./node_modules/tailwindcss/lib/lib:
cacheInvalidation.js
collapseAdjacentRules.js
collapseDuplicateDeclarations.js
content.js
defaultExtractor.js
evaluateTailwindFunctions.js
expandApplyAtRules.js
expandTailwindAtRules.js
findAtConfigPath.js
generateRules.js
getModuleDependencies.js
load-config.js
normalizeTailwindDirectives.js
offsets.js
partitionApplyAtRules.js
regex.js
remap-bitfield.js
resolveDefaultsAtRules.js
setupContextUtils.js
setupTrackingContext.js
sharedState.js
substituteScreenAtRules.js

./node_modules/tailwindcss/lib/postcss-plugins:
nesting/

./node_modules/tailwindcss/lib/postcss-plugins/nesting:
README.md
index.js
plugin.js

./node_modules/tailwindcss/lib/public:
colors.js
create-plugin.js
default-config.js
default-theme.js
load-config.js
resolve-config.js

./node_modules/tailwindcss/lib/util:
applyImportantSelector.js
bigSign.js
buildMediaQuery.js
cloneDeep.js
cloneNodes.js
color.js
colorNames.js
configurePlugins.js
createPlugin.js
createUtilityPlugin.js
dataTypes.js
defaults.js
escapeClassName.js
escapeCommas.js
flattenColorPalette.js
formatVariantSelector.js
getAllConfigs.js
hashConfig.js
isKeyframeRule.js
isPlainObject.js
isSyntacticallyValidPropertyValue.js
log.js
nameClass.js
negateValue.js
normalizeConfig.js
normalizeScreens.js
parseAnimationValue.js
parseBoxShadowValue.js
parseDependency.js
parseGlob.js
parseObjectStyles.js
pluginUtils.js
prefixSelector.js
pseudoElements.js
removeAlphaVariables.js
resolveConfig.js
resolveConfigPath.js
responsive.js
splitAtTopLevelOnly.js
tap.js
toColorValue.js
toPath.js
transformThemeValue.js
validateConfig.js
validateFormalSyntax.js
withAlphaVariable.js

./node_modules/tailwindcss/lib/value-parser:
LICENSE
README.md
index.d.js
index.js
parse.js
stringify.js
unit.js
walk.js

./node_modules/tailwindcss/nesting:
index.d.ts
index.js

./node_modules/tailwindcss/peers:
index.js

./node_modules/tailwindcss/scripts:
create-plugin-list.js
generate-types.js
release-channel.js
release-notes.js
type-utils.js

./node_modules/tailwindcss/src:
cli/
cli-peer-dependencies.js
cli.js
corePluginList.js
corePlugins.js
css/
featureFlags.js
index.js
lib/
plugin.js
postcss-plugins/
processTailwindFeatures.js
public/
util/
value-parser/

./node_modules/tailwindcss/src/cli:
build/
help/
index.js
init/

./node_modules/tailwindcss/src/cli/build:
deps.js
index.js
plugin.js
utils.js
watching.js

./node_modules/tailwindcss/src/cli/help:
index.js

./node_modules/tailwindcss/src/cli/init:
index.js

./node_modules/tailwindcss/src/css:
LICENSE
preflight.css

./node_modules/tailwindcss/src/lib:
cacheInvalidation.js
collapseAdjacentRules.js
collapseDuplicateDeclarations.js
content.js
defaultExtractor.js
evaluateTailwindFunctions.js
expandApplyAtRules.js
expandTailwindAtRules.js
findAtConfigPath.js
generateRules.js
getModuleDependencies.js
load-config.ts
normalizeTailwindDirectives.js
offsets.js
partitionApplyAtRules.js
regex.js
remap-bitfield.js
resolveDefaultsAtRules.js
setupContextUtils.js
setupTrackingContext.js
sharedState.js
substituteScreenAtRules.js

./node_modules/tailwindcss/src/postcss-plugins:
nesting/

./node_modules/tailwindcss/src/postcss-plugins/nesting:
README.md
index.js
plugin.js

./node_modules/tailwindcss/src/public:
colors.js
create-plugin.js
default-config.js
default-theme.js
load-config.js
resolve-config.js

./node_modules/tailwindcss/src/util:
applyImportantSelector.js
bigSign.js
buildMediaQuery.js
cloneDeep.js
cloneNodes.js
color.js
colorNames.js
configurePlugins.js
createPlugin.js
createUtilityPlugin.js
dataTypes.js
defaults.js
escapeClassName.js
escapeCommas.js
flattenColorPalette.js
formatVariantSelector.js
getAllConfigs.js
hashConfig.js
isKeyframeRule.js
isPlainObject.js
isSyntacticallyValidPropertyValue.js
log.js
nameClass.js
negateValue.js
normalizeConfig.js
normalizeScreens.js
parseAnimationValue.js
parseBoxShadowValue.js
parseDependency.js
parseGlob.js
parseObjectStyles.js
pluginUtils.js
prefixSelector.js
pseudoElements.js
removeAlphaVariables.js
resolveConfig.js
resolveConfigPath.js
responsive.js
splitAtTopLevelOnly.js
tap.js
toColorValue.js
toPath.js
transformThemeValue.js
validateConfig.js
validateFormalSyntax.js
withAlphaVariable.js

./node_modules/tailwindcss/src/value-parser:
LICENSE
README.md
index.d.ts
index.js
parse.js
stringify.js
unit.js
walk.js

./node_modules/tailwindcss/stubs:
config.full.js
config.simple.js
postcss.config.cjs
postcss.config.js
tailwind.config.cjs
tailwind.config.js
tailwind.config.ts

./node_modules/tailwindcss/types:
config.d.ts
generated/
index.d.ts

./node_modules/tailwindcss/types/generated:
colors.d.ts
corePluginList.d.ts
default-theme.d.ts

./node_modules/text-segmentation:
CHANGELOG.md
LICENSE
README.md
dist/
package.json
rollup.config.ts

./node_modules/text-segmentation/dist:
lib/
text-segmentation.es5.js
text-segmentation.es5.js.map
text-segmentation.umd.js
text-segmentation.umd.js.map
types/

./node_modules/text-segmentation/dist/lib:
GraphemeBreak.js
GraphemeBreak.js.map
grapheme-break-trie.js
grapheme-break-trie.js.map
index.js
index.js.map

./node_modules/text-segmentation/dist/types:
GraphemeBreak.d.ts
grapheme-break-trie.d.ts
index.d.ts

./node_modules/text-table:
LICENSE
example/
index.js
package.json
readme.markdown
test/

./node_modules/text-table/example:
align.js
center.js
dotalign.js
doubledot.js
table.js

./node_modules/text-table/test:
align.js
ansi-colors.js
center.js
dotalign.js
doubledot.js
table.js

./node_modules/thenify:
History.md
LICENSE
README.md
index.js
package.json

./node_modules/thenify-all:
History.md
LICENSE
README.md
index.js
package.json

./node_modules/to-fast-properties:
index.js
license
package.json
readme.md

./node_modules/to-regex-range:
LICENSE
README.md
index.js
package.json

./node_modules/ts-api-utils:
LICENSE.md
README.md
lib/
package.json

./node_modules/ts-api-utils/lib:
index.cjs
index.cjs.map
index.d.cts
index.d.ts
index.js
index.js.map

./node_modules/ts-interface-checker:
LICENSE
README.md
dist/
package.json

./node_modules/ts-interface-checker/dist:
index.d.ts
index.js
types.d.ts
types.js
util.d.ts
util.js

./node_modules/type-check:
LICENSE
README.md
lib/
package.json

./node_modules/type-check/lib:
check.js
index.js
parse-type.js

./node_modules/typescript:
LICENSE.txt
README.md
SECURITY.md
ThirdPartyNoticeText.txt
bin/
lib/
package.json

./node_modules/typescript/bin:
tsc*
tsserver*

./node_modules/typescript/lib:
cancellationToken.js
cs/
de/
es/
fr/
it/
ja/
ko/
lib.d.ts
lib.decorators.d.ts
lib.decorators.legacy.d.ts
lib.dom.asynciterable.d.ts
lib.dom.d.ts
lib.dom.iterable.d.ts
lib.es2015.collection.d.ts
lib.es2015.core.d.ts
lib.es2015.d.ts
lib.es2015.generator.d.ts
lib.es2015.iterable.d.ts
lib.es2015.promise.d.ts
lib.es2015.proxy.d.ts
lib.es2015.reflect.d.ts
lib.es2015.symbol.d.ts
lib.es2015.symbol.wellknown.d.ts
lib.es2016.array.include.d.ts
lib.es2016.d.ts
lib.es2016.full.d.ts
lib.es2016.intl.d.ts
lib.es2017.d.ts
lib.es2017.date.d.ts
lib.es2017.full.d.ts
lib.es2017.intl.d.ts
lib.es2017.object.d.ts
lib.es2017.sharedmemory.d.ts
lib.es2017.string.d.ts
lib.es2017.typedarrays.d.ts
lib.es2018.asyncgenerator.d.ts
lib.es2018.asynciterable.d.ts
lib.es2018.d.ts
lib.es2018.full.d.ts
lib.es2018.intl.d.ts
lib.es2018.promise.d.ts
lib.es2018.regexp.d.ts
lib.es2019.array.d.ts
lib.es2019.d.ts
lib.es2019.full.d.ts
lib.es2019.intl.d.ts
lib.es2019.object.d.ts
lib.es2019.string.d.ts
lib.es2019.symbol.d.ts
lib.es2020.bigint.d.ts
lib.es2020.d.ts
lib.es2020.date.d.ts
lib.es2020.full.d.ts
lib.es2020.intl.d.ts
lib.es2020.number.d.ts
lib.es2020.promise.d.ts
lib.es2020.sharedmemory.d.ts
lib.es2020.string.d.ts
lib.es2020.symbol.wellknown.d.ts
lib.es2021.d.ts
lib.es2021.full.d.ts
lib.es2021.intl.d.ts
lib.es2021.promise.d.ts
lib.es2021.string.d.ts
lib.es2021.weakref.d.ts
lib.es2022.array.d.ts
lib.es2022.d.ts
lib.es2022.error.d.ts
lib.es2022.full.d.ts
lib.es2022.intl.d.ts
lib.es2022.object.d.ts
lib.es2022.regexp.d.ts
lib.es2022.sharedmemory.d.ts
lib.es2022.string.d.ts
lib.es2023.array.d.ts
lib.es2023.collection.d.ts
lib.es2023.d.ts
lib.es2023.full.d.ts
lib.es2023.intl.d.ts
lib.es5.d.ts
lib.es6.d.ts
lib.esnext.array.d.ts
lib.esnext.collection.d.ts
lib.esnext.d.ts
lib.esnext.decorators.d.ts
lib.esnext.disposable.d.ts
lib.esnext.full.d.ts
lib.esnext.intl.d.ts
lib.esnext.iterator.d.ts
lib.esnext.object.d.ts
lib.esnext.promise.d.ts
lib.esnext.regexp.d.ts
lib.esnext.string.d.ts
lib.scripthost.d.ts
lib.webworker.asynciterable.d.ts
lib.webworker.d.ts
lib.webworker.importscripts.d.ts
lib.webworker.iterable.d.ts
pl/
pt-br/
ru/
tr/
tsc.js
tsserver.js
tsserverlibrary.d.ts
tsserverlibrary.js
typesMap.json
typescript.d.ts
typescript.js
typingsInstaller.js
watchGuard.js
zh-cn/
zh-tw/

./node_modules/typescript/lib/cs:
diagnosticMessages.generated.json

./node_modules/typescript/lib/de:
diagnosticMessages.generated.json

./node_modules/typescript/lib/es:
diagnosticMessages.generated.json

./node_modules/typescript/lib/fr:
diagnosticMessages.generated.json

./node_modules/typescript/lib/it:
diagnosticMessages.generated.json

./node_modules/typescript/lib/ja:
diagnosticMessages.generated.json

./node_modules/typescript/lib/ko:
diagnosticMessages.generated.json

./node_modules/typescript/lib/pl:
diagnosticMessages.generated.json

./node_modules/typescript/lib/pt-br:
diagnosticMessages.generated.json

./node_modules/typescript/lib/ru:
diagnosticMessages.generated.json

./node_modules/typescript/lib/tr:
diagnosticMessages.generated.json

./node_modules/typescript/lib/zh-cn:
diagnosticMessages.generated.json

./node_modules/typescript/lib/zh-tw:
diagnosticMessages.generated.json

./node_modules/typescript-eslint:
LICENSE
README.md
dist/
package.json

./node_modules/typescript-eslint/dist:
config-helper.d.ts
config-helper.d.ts.map
config-helper.js
config-helper.js.map
configs/
index.d.ts
index.d.ts.map
index.js
index.js.map

./node_modules/typescript-eslint/dist/configs:
all.d.ts
all.d.ts.map
all.js
all.js.map
base.d.ts
base.d.ts.map
base.js
base.js.map
disable-type-checked.d.ts
disable-type-checked.d.ts.map
disable-type-checked.js
disable-type-checked.js.map
eslint-recommended.d.ts
eslint-recommended.d.ts.map
eslint-recommended.js
eslint-recommended.js.map
recommended-type-checked-only.d.ts
recommended-type-checked-only.d.ts.map
recommended-type-checked-only.js
recommended-type-checked-only.js.map
recommended-type-checked.d.ts
recommended-type-checked.d.ts.map
recommended-type-checked.js
recommended-type-checked.js.map
recommended.d.ts
recommended.d.ts.map
recommended.js
recommended.js.map
strict-type-checked-only.d.ts
strict-type-checked-only.d.ts.map
strict-type-checked-only.js
strict-type-checked-only.js.map
strict-type-checked.d.ts
strict-type-checked.d.ts.map
strict-type-checked.js
strict-type-checked.js.map
strict.d.ts
strict.d.ts.map
strict.js
strict.js.map
stylistic-type-checked-only.d.ts
stylistic-type-checked-only.d.ts.map
stylistic-type-checked-only.js
stylistic-type-checked-only.js.map
stylistic-type-checked.d.ts
stylistic-type-checked.d.ts.map
stylistic-type-checked.js
stylistic-type-checked.js.map
stylistic.d.ts
stylistic.d.ts.map
stylistic.js
stylistic.js.map

./node_modules/undici-types:
LICENSE
README.md
agent.d.ts
api.d.ts
balanced-pool.d.ts
cache.d.ts
client.d.ts
connector.d.ts
content-type.d.ts
cookies.d.ts
diagnostics-channel.d.ts
dispatcher.d.ts
env-http-proxy-agent.d.ts
errors.d.ts
eventsource.d.ts
fetch.d.ts
file.d.ts
filereader.d.ts
formdata.d.ts
global-dispatcher.d.ts
global-origin.d.ts
handlers.d.ts
header.d.ts
index.d.ts
interceptors.d.ts
mock-agent.d.ts
mock-client.d.ts
mock-errors.d.ts
mock-interceptor.d.ts
mock-pool.d.ts
package.json
patch.d.ts
pool-stats.d.ts
pool.d.ts
proxy-agent.d.ts
readable.d.ts
retry-agent.d.ts
retry-handler.d.ts
util.d.ts
webidl.d.ts
websocket.d.ts

./node_modules/update-browserslist-db:
LICENSE
README.md
check-npm-version.js
cli.js*
index.d.ts
index.js
package.json
utils.js

./node_modules/uri-js:
LICENSE*
README.md*
dist/
package.json*
yarn.lock*

./node_modules/uri-js/dist:
es5/
esnext/

./node_modules/uri-js/dist/es5:
uri.all.d.ts*
uri.all.js*
uri.all.js.map*
uri.all.min.d.ts*
uri.all.min.js*
uri.all.min.js.map*

./node_modules/uri-js/dist/esnext:
index.d.ts*
index.js*
index.js.map*
regexps-iri.d.ts*
regexps-iri.js*
regexps-iri.js.map*
regexps-uri.d.ts*
regexps-uri.js*
regexps-uri.js.map*
schemes/
uri.d.ts*
uri.js*
uri.js.map*
util.d.ts*
util.js*
util.js.map*

./node_modules/uri-js/dist/esnext/schemes:
http.d.ts*
http.js*
http.js.map*
https.d.ts*
https.js*
https.js.map*
mailto.d.ts*
mailto.js*
mailto.js.map*
urn-uuid.d.ts*
urn-uuid.js*
urn-uuid.js.map*
urn.d.ts*
urn.js*
urn.js.map*
ws.d.ts*
ws.js*
ws.js.map*
wss.d.ts*
wss.js*
wss.js.map*

./node_modules/use-sync-external-store:
LICENSE
README.md
cjs/
index.js
package.json
shim/
with-selector.js

./node_modules/use-sync-external-store/cjs:
use-sync-external-store-shim/
use-sync-external-store-shim.development.js
use-sync-external-store-shim.native.development.js
use-sync-external-store-shim.native.production.min.js
use-sync-external-store-shim.production.min.js
use-sync-external-store-with-selector.development.js
use-sync-external-store-with-selector.production.min.js
use-sync-external-store.development.js
use-sync-external-store.production.min.js

./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim:
with-selector.development.js
with-selector.production.min.js

./node_modules/use-sync-external-store/shim:
index.js
index.native.js
with-selector.js

./node_modules/util-deprecate:
History.md
LICENSE
README.md
browser.js
node.js
package.json

./node_modules/utrie:
CHANGELOG.md
LICENSE
dist/
package.json
rollup.config.ts

./node_modules/utrie/dist:
lib/
types/
utrie.es5.js
utrie.es5.js.map
utrie.umd.js
utrie.umd.js.map

./node_modules/utrie/dist/lib:
Trie.js
Trie.js.map
TrieBuilder.js
TrieBuilder.js.map
Util.js
Util.js.map
index.js
index.js.map

./node_modules/utrie/dist/types:
Trie.d.ts
TrieBuilder.d.ts
Util.d.ts
index.d.ts

./node_modules/vite:
LICENSE.md
README.md
bin/
client.d.ts
dist/
index.cjs
index.d.cts
package.json
types/

./node_modules/vite/bin:
openChrome.applescript
vite.js*

./node_modules/vite/dist:
client/
node/
node-cjs/

./node_modules/vite/dist/client:
client.mjs
env.mjs

./node_modules/vite/dist/node:
chunks/
cli.js
constants.js
index.d.ts
index.js
runtime.d.ts
runtime.js
types.d-aGj9QkWt.d.ts

./node_modules/vite/dist/node/chunks:
dep-B7_zXWZq.js
dep-BaJt-LTH.js
dep-CDnG8rE7.js
dep-D-7KCb9p.js
dep-IQS-Za7F.js

./node_modules/vite/dist/node-cjs:
publicUtils.cjs

./node_modules/vite/types:
customEvent.d.ts
hmrPayload.d.ts
hot.d.ts
import-meta.d.ts
importGlob.d.ts
importMeta.d.ts
metadata.d.ts
package.json

./node_modules/which:
CHANGELOG.md
LICENSE
README.md
bin/
package.json
which.js

./node_modules/which/bin:
node-which*

./node_modules/word-wrap:
LICENSE
README.md
index.d.ts
index.js
package.json

./node_modules/wrap-ansi:
index.d.ts
index.js*
license
node_modules/
package.json
readme.md

./node_modules/wrap-ansi/node_modules:
ansi-styles/

./node_modules/wrap-ansi/node_modules/ansi-styles:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/wrap-ansi-cjs:
index.js*
license
node_modules/
package.json
readme.md

./node_modules/wrap-ansi-cjs/node_modules:
ansi-regex/
ansi-styles/
color-convert/
color-name/
emoji-regex/
string-width/
strip-ansi/

./node_modules/wrap-ansi-cjs/node_modules/ansi-regex:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/wrap-ansi-cjs/node_modules/ansi-styles:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/wrap-ansi-cjs/node_modules/color-convert:
CHANGELOG.md
LICENSE
README.md
conversions.js
index.js
package.json
route.js

./node_modules/wrap-ansi-cjs/node_modules/color-name:
LICENSE
README.md
index.js
package.json

./node_modules/wrap-ansi-cjs/node_modules/emoji-regex:
LICENSE-MIT.txt
README.md
es2015/
index.d.ts
index.js
package.json
text.js

./node_modules/wrap-ansi-cjs/node_modules/emoji-regex/es2015:
index.js
text.js

./node_modules/wrap-ansi-cjs/node_modules/string-width:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/wrap-ansi-cjs/node_modules/strip-ansi:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/xml:
LICENSE
examples/
lib/
package.json
readme.md
test/

./node_modules/xml/examples:
examples.js
server.js

./node_modules/xml/lib:
escapeForXML.js
xml.js

./node_modules/xml/test:
xml.test.js

./node_modules/xml-js:
LICENSE
README.md
bin/
dist/
index.js
lib/
package.json
types/
webpack.config.js

./node_modules/xml-js/bin:
cli-helper.js
cli.js*
test.json
test.xml

./node_modules/xml-js/dist:
xml-js.js
xml-js.min.js

./node_modules/xml-js/lib:
array-helper.js
index.js
js2xml.js
json2xml.js
options-helper.js
xml2js.js
xml2json.js

./node_modules/xml-js/types:
index.d.ts
tsconfig.json
typings.json
xml-js-tests.ts

./node_modules/yallist:
LICENSE
README.md
iterator.js
package.json
yallist.js

./node_modules/yaml:
LICENSE
README.md
bin.mjs*
browser/
dist/
package.json
util.js

./node_modules/yaml/browser:
dist/
index.js
package.json

./node_modules/yaml/browser/dist:
compose/
doc/
errors.js
index.js
log.js
nodes/
parse/
public-api.js
schema/
stringify/
util.js
visit.js

./node_modules/yaml/browser/dist/compose:
compose-collection.js
compose-doc.js
compose-node.js
compose-scalar.js
composer.js
resolve-block-map.js
resolve-block-scalar.js
resolve-block-seq.js
resolve-end.js
resolve-flow-collection.js
resolve-flow-scalar.js
resolve-props.js
util-contains-newline.js
util-empty-scalar-position.js
util-flow-indent-check.js
util-map-includes.js

./node_modules/yaml/browser/dist/doc:
Document.js
anchors.js
applyReviver.js
createNode.js
directives.js

./node_modules/yaml/browser/dist/nodes:
Alias.js
Collection.js
Node.js
Pair.js
Scalar.js
YAMLMap.js
YAMLSeq.js
addPairToJSMap.js
identity.js
toJS.js

./node_modules/yaml/browser/dist/parse:
cst-scalar.js
cst-stringify.js
cst-visit.js
cst.js
lexer.js
line-counter.js
parser.js

./node_modules/yaml/browser/dist/schema:
Schema.js
common/
core/
json/
tags.js
yaml-1.1/

./node_modules/yaml/browser/dist/schema/common:
map.js
null.js
seq.js
string.js

./node_modules/yaml/browser/dist/schema/core:
bool.js
float.js
int.js
schema.js

./node_modules/yaml/browser/dist/schema/json:
schema.js

./node_modules/yaml/browser/dist/schema/yaml-1.1:
binary.js
bool.js
float.js
int.js
omap.js
pairs.js
schema.js
set.js
timestamp.js

./node_modules/yaml/browser/dist/stringify:
foldFlowLines.js
stringify.js
stringifyCollection.js
stringifyComment.js
stringifyDocument.js
stringifyNumber.js
stringifyPair.js
stringifyString.js

./node_modules/yaml/dist:
cli.d.ts
cli.mjs
compose/
doc/
errors.d.ts
errors.js
index.d.ts
index.js
log.d.ts
log.js
nodes/
options.d.ts
parse/
public-api.d.ts
public-api.js
schema/
stringify/
test-events.d.ts
test-events.js
util.d.ts
util.js
visit.d.ts
visit.js

./node_modules/yaml/dist/compose:
compose-collection.d.ts
compose-collection.js
compose-doc.d.ts
compose-doc.js
compose-node.d.ts
compose-node.js
compose-scalar.d.ts
compose-scalar.js
composer.d.ts
composer.js
resolve-block-map.d.ts
resolve-block-map.js
resolve-block-scalar.d.ts
resolve-block-scalar.js
resolve-block-seq.d.ts
resolve-block-seq.js
resolve-end.d.ts
resolve-end.js
resolve-flow-collection.d.ts
resolve-flow-collection.js
resolve-flow-scalar.d.ts
resolve-flow-scalar.js
resolve-props.d.ts
resolve-props.js
util-contains-newline.d.ts
util-contains-newline.js
util-empty-scalar-position.d.ts
util-empty-scalar-position.js
util-flow-indent-check.d.ts
util-flow-indent-check.js
util-map-includes.d.ts
util-map-includes.js

./node_modules/yaml/dist/doc:
Document.d.ts
Document.js
anchors.d.ts
anchors.js
applyReviver.d.ts
applyReviver.js
createNode.d.ts
createNode.js
directives.d.ts
directives.js

./node_modules/yaml/dist/nodes:
Alias.d.ts
Alias.js
Collection.d.ts
Collection.js
Node.d.ts
Node.js
Pair.d.ts
Pair.js
Scalar.d.ts
Scalar.js
YAMLMap.d.ts
YAMLMap.js
YAMLSeq.d.ts
YAMLSeq.js
addPairToJSMap.d.ts
addPairToJSMap.js
identity.d.ts
identity.js
toJS.d.ts
toJS.js

./node_modules/yaml/dist/parse:
cst-scalar.d.ts
cst-scalar.js
cst-stringify.d.ts
cst-stringify.js
cst-visit.d.ts
cst-visit.js
cst.d.ts
cst.js
lexer.d.ts
lexer.js
line-counter.d.ts
line-counter.js
parser.d.ts
parser.js

./node_modules/yaml/dist/schema:
Schema.d.ts
Schema.js
common/
core/
json/
json-schema.d.ts
tags.d.ts
tags.js
types.d.ts
yaml-1.1/

./node_modules/yaml/dist/schema/common:
map.d.ts
map.js
null.d.ts
null.js
seq.d.ts
seq.js
string.d.ts
string.js

./node_modules/yaml/dist/schema/core:
bool.d.ts
bool.js
float.d.ts
float.js
int.d.ts
int.js
schema.d.ts
schema.js

./node_modules/yaml/dist/schema/json:
schema.d.ts
schema.js

./node_modules/yaml/dist/schema/yaml-1.1:
binary.d.ts
binary.js
bool.d.ts
bool.js
float.d.ts
float.js
int.d.ts
int.js
omap.d.ts
omap.js
pairs.d.ts
pairs.js
schema.d.ts
schema.js
set.d.ts
set.js
timestamp.d.ts
timestamp.js

./node_modules/yaml/dist/stringify:
foldFlowLines.d.ts
foldFlowLines.js
stringify.d.ts
stringify.js
stringifyCollection.d.ts
stringifyCollection.js
stringifyComment.d.ts
stringifyComment.js
stringifyDocument.d.ts
stringifyDocument.js
stringifyNumber.d.ts
stringifyNumber.js
stringifyPair.d.ts
stringifyPair.js
stringifyString.d.ts
stringifyString.js

./node_modules/yocto-queue:
index.d.ts
index.js
license
package.json
readme.md

./node_modules/zustand:
LICENSE
context.d.ts
context.js
esm/
index.d.ts
index.js
middleware/
middleware.d.ts
middleware.js
package.json
react/
react.d.ts
readme.md
shallow.d.ts
shallow.js
system/
traditional.d.ts
traditional.js
ts3.4/
umd/
vanilla/
vanilla.d.ts
vanilla.js

./node_modules/zustand/esm:
context.d.mts
context.d.ts
context.js
context.mjs
index.d.mts
index.d.ts
index.js
index.mjs
middleware/
middleware.d.mts
middleware.d.ts
middleware.js
middleware.mjs
react/
react.d.mts
react.d.ts
shallow.d.mts
shallow.d.ts
shallow.js
shallow.mjs
traditional.d.mts
traditional.d.ts
traditional.js
traditional.mjs
vanilla/
vanilla.d.mts
vanilla.d.ts
vanilla.js
vanilla.mjs

./node_modules/zustand/esm/middleware:
combine.d.mts
combine.d.ts
devtools.d.mts
devtools.d.ts
immer.d.mts
immer.d.ts
immer.js
immer.mjs
persist.d.mts
persist.d.ts
redux.d.mts
redux.d.ts
subscribeWithSelector.d.mts
subscribeWithSelector.d.ts

./node_modules/zustand/esm/react:
shallow.d.mts
shallow.d.ts
shallow.js
shallow.mjs

./node_modules/zustand/esm/vanilla:
shallow.d.mts
shallow.d.ts
shallow.js
shallow.mjs

./node_modules/zustand/middleware:
combine.d.ts
devtools.d.ts
immer.d.ts
immer.js
persist.d.ts
redux.d.ts
subscribeWithSelector.d.ts

./node_modules/zustand/react:
shallow.d.ts
shallow.js

./node_modules/zustand/system:
context.development.js
context.production.js
index.development.js
index.production.js
middleware/
middleware.development.js
middleware.production.js
react/
shallow.development.js
shallow.production.js
traditional.development.js
traditional.production.js
vanilla/
vanilla.development.js
vanilla.production.js

./node_modules/zustand/system/middleware:
immer.development.js
immer.production.js

./node_modules/zustand/system/react:
shallow.development.js
shallow.production.js

./node_modules/zustand/system/vanilla:
shallow.development.js
shallow.production.js

./node_modules/zustand/ts3.4:
context.d.ts
esm/
index.d.ts
middleware/
middleware.d.ts
react/
react.d.ts
shallow.d.ts
traditional.d.ts
vanilla/
vanilla.d.ts

./node_modules/zustand/ts3.4/esm:
context.d.ts
index.d.ts
middleware/
middleware.d.ts
react/
react.d.ts
shallow.d.ts
traditional.d.ts
vanilla/
vanilla.d.ts

./node_modules/zustand/ts3.4/esm/middleware:
combine.d.ts
devtools.d.ts
immer.d.ts
persist.d.ts
redux.d.ts
subscribeWithSelector.d.ts

./node_modules/zustand/ts3.4/esm/react:
shallow.d.ts

./node_modules/zustand/ts3.4/esm/vanilla:
shallow.d.ts

./node_modules/zustand/ts3.4/middleware:
combine.d.ts
devtools.d.ts
immer.d.ts
persist.d.ts
redux.d.ts
subscribeWithSelector.d.ts

./node_modules/zustand/ts3.4/react:
shallow.d.ts

./node_modules/zustand/ts3.4/vanilla:
shallow.d.ts

./node_modules/zustand/umd:
context.development.js
context.production.js
index.development.js
index.production.js
middleware/
middleware.development.js
middleware.production.js
react/
shallow.development.js
shallow.production.js
traditional.development.js
traditional.production.js
vanilla/
vanilla.development.js
vanilla.production.js

./node_modules/zustand/umd/middleware:
immer.development.js
immer.production.js

./node_modules/zustand/umd/react:
shallow.development.js
shallow.production.js

./node_modules/zustand/umd/vanilla:
shallow.development.js
shallow.production.js

./node_modules/zustand/vanilla:
shallow.d.ts
shallow.js

./src:
App.tsx
components/
config/
hooks/
index.css
main.tsx
services/
store/
types/
utils/
vite-env.d.ts

./src/components:
FileUpload/
FileUpload.tsx
TranscriptionControls/
TranscriptionControls.tsx
TranscriptionViewer/
TranscriptionViewer.tsx

./src/components/FileUpload:
UploadProgress.tsx
index.tsx

./src/components/TranscriptionControls:
CopyButton.tsx
ExportButton.tsx
index.tsx

./src/components/TranscriptionViewer:
SpeakerEntry.tsx
TranscriptionHeader.tsx
index.tsx

./src/config:
api.ts
constants.ts
env.ts

./src/hooks:
useTranscriptionUpload.ts

./src/services:
api.ts

./src/store:
transcription.ts

./src/types:
index.ts

./src/utils:
audio/
audio.ts
export.ts
format.ts

./src/utils/audio:
constants.ts
error-handler.ts
index.ts
logger.ts
processing.ts
validation.ts

```

### repindex/dependency_graph_exports.json

```
{
    "nodes": [
        "vite.config.ts",
        "src/App.tsx",
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/types/graph.ts",
        "src/types/index.ts",
        "src/config/audio.ts",
        "src/config/api.ts",
        "src/config/constants.ts",
        "src/config/env.ts",
        "src/utils/colors.ts",
        "src/utils/audio.ts",
        "src/utils/entityColors.ts",
        "src/utils/export.ts",
        "src/utils/format.ts",
        "src/utils/processGraphData.ts",
        "src/utils/keywords.ts",
        "src/utils/logger/status.ts",
        "src/utils/logger/types.ts",
        "src/utils/logger/core.ts",
        "src/utils/logger/index.ts",
        "src/utils/logger/formatter.ts",
        "src/utils/audio/validation.ts",
        "src/utils/audio/error-handler.ts",
        "src/utils/audio/processing.ts",
        "src/utils/audio/logger.ts",
        "src/utils/audio/index.ts",
        "src/utils/text/processing.ts",
        "src/components/NodeConnections.tsx",
        "src/components/EntitySummaryModal.tsx",
        "src/components/ProcessStatus.tsx",
        "src/components/DebugPanel.tsx",
        "src/components/Graph.tsx",
        "src/components/InputSection.tsx",
        "src/components/MeetingCard.tsx",
        "src/components/Sidebar.tsx",
        "src/components/SummaryViewer.tsx",
        "src/components/NodeSidebar.tsx",
        "src/components/TranscriptionControls/index.tsx",
        "src/components/TranscriptionControls/ExportButton.tsx",
        "src/components/TranscriptionControls/CopyButton.tsx",
        "src/components/FileUpload/index.tsx",
        "src/components/FileUpload/DropZone.tsx",
        "src/components/FileUpload/UploadProgress.tsx",
        "src/components/calendar/WeekHeader.tsx",
        "src/components/calendar/FilterDropdown.tsx",
        "src/components/TranscriptionViewer/index.tsx",
        "src/components/TranscriptionViewer/TranscriptionHeader.tsx",
        "src/components/TranscriptionViewer/SpeakerEntry.tsx",
        "src/components/TranscriptionViewer/TranscriptionStats.tsx",
        "src/components/controls/FilterPanel.tsx",
        "src/components/controls/TopEntitiesPanel.tsx",
        "src/hooks/useProcessStatus.ts",
        "src/hooks/useTranscriptionUpload.ts",
        "src/pages/UploadPage.tsx",
        "src/pages/MeetingHistory.tsx",
        "src/pages/APITestPage.tsx",
        "src/pages/ChatPage.tsx",
        "src/services/transcription/validation.ts",
        "src/services/transcription/processing.ts",
        "src/services/api/errors.ts",
        "src/services/api/utils.ts",
        "src/services/api/types.ts",
        "src/services/api/knowledgeGraph.ts",
        "src/services/api/client.ts",
        "src/services/api/index.ts",
        "src/services/api/upload.ts",
        "src/services/api/transcription.ts",
        "src/store/transcription.ts"
    ],
    "edges": [
        {
            "from": "vite.config.ts",
            "to": null,
            "type": "export",
            "objects": [
                "defineConfig"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "App"
            ]
        },
        {
            "from": "src/types/graph.ts",
            "to": null,
            "type": "export",
            "objects": [
                "Entity",
                "Relationship",
                "GraphData",
                "ProcessedNode",
                "ProcessedLink"
            ]
        },
        {
            "from": "src/types/index.ts",
            "to": null,
            "type": "export",
            "objects": [
                "Speaker",
                "TranscriptionResponse",
                "KnowledgeGraphEntity",
                "KnowledgeGraphRelationship",
                "KnowledgeGraph",
                "ExportFormat",
                "ProcessStatus",
                "ProcessError",
                "TranscriptionState",
                "EntityMapResponse",
                "EntityMapRequest",
                "SummarizeRequest",
                "SummarizeResponse"
            ]
        },
        {
            "from": "src/config/audio.ts",
            "to": null,
            "type": "export",
            "objects": [
                "AUDIO_CONFIG"
            ]
        },
        {
            "from": "src/config/api.ts",
            "to": null,
            "type": "export",
            "objects": [
                "API_CONFIG"
            ]
        },
        {
            "from": "src/config/constants.ts",
            "to": null,
            "type": "export",
            "objects": [
                "RETRY_CONFIG",
                "LOG_CONFIG",
                "PROCESS_STEPS"
            ]
        },
        {
            "from": "src/config/env.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ENV"
            ]
        },
        {
            "from": "src/utils/colors.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ENTITY_COLORS",
                "DEFAULT_COLOR"
            ]
        },
        {
            "from": "src/utils/entityColors.ts",
            "to": null,
            "type": "export",
            "objects": [
                "getEntityColorMap"
            ]
        },
        {
            "from": "src/utils/export.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async"
            ]
        },
        {
            "from": "src/utils/format.ts",
            "to": null,
            "type": "export",
            "objects": [
                "formatTimestamp",
                "formatDuration",
                "formatFileSize"
            ]
        },
        {
            "from": "src/utils/processGraphData.ts",
            "to": null,
            "type": "export",
            "objects": [
                "processGraphData"
            ]
        },
        {
            "from": "src/utils/keywords.ts",
            "to": null,
            "type": "export",
            "objects": [
                "extractKeywords"
            ]
        },
        {
            "from": "src/utils/logger/status.ts",
            "to": null,
            "type": "export",
            "objects": [
                "logStatusChange",
                "logProcessStep"
            ]
        },
        {
            "from": "src/utils/logger/types.ts",
            "to": null,
            "type": "export",
            "objects": [
                "LogLevel",
                "LogEntry",
                "LoggerConfig"
            ]
        },
        {
            "from": "src/utils/logger/core.ts",
            "to": null,
            "type": "export",
            "objects": [
                "logger"
            ]
        },
        {
            "from": "src/utils/logger/index.ts",
            "to": null,
            "type": "export",
            "objects": [
                "LogLevel",
                "LogEntry",
                "LoggerConfig"
            ]
        },
        {
            "from": "src/utils/logger/formatter.ts",
            "to": null,
            "type": "export",
            "objects": [
                "formatLogEntry"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": null,
            "type": "export",
            "objects": [
                "AudioValidationResult",
                "validateAudioFile",
                "getAcceptedFileTypes",
                "async"
            ]
        },
        {
            "from": "src/utils/audio/error-handler.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ErrorLogData",
                "AudioProcessingError",
                "createErrorLog",
                "handleAudioError"
            ]
        },
        {
            "from": "src/utils/audio/processing.ts",
            "to": null,
            "type": "export",
            "objects": [
                "AudioProcessingResult",
                "async"
            ]
        },
        {
            "from": "src/utils/audio/logger.ts",
            "to": null,
            "type": "export",
            "objects": [
                "logger"
            ]
        },
        {
            "from": "src/utils/text/processing.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ProcessedBlock",
                "concatenateTextBlocks"
            ]
        },
        {
            "from": "src/components/NodeConnections.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "NodeConnections"
            ]
        },
        {
            "from": "src/components/EntitySummaryModal.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "EntitySummaryModal"
            ]
        },
        {
            "from": "src/components/ProcessStatus.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "ProcessStatus"
            ]
        },
        {
            "from": "src/components/DebugPanel.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "DebugPanel"
            ]
        },
        {
            "from": "src/components/Graph.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "Graph"
            ]
        },
        {
            "from": "src/components/InputSection.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "InputSection"
            ]
        },
        {
            "from": "src/components/MeetingCard.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "MeetingCard"
            ]
        },
        {
            "from": "src/components/Sidebar.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "Sidebar"
            ]
        },
        {
            "from": "src/components/SummaryViewer.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "SummaryViewer"
            ]
        },
        {
            "from": "src/components/NodeSidebar.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "NodeSidebar"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "TranscriptionControls",
                "as"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/ExportButton.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "ExportButton"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/CopyButton.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "CopyButton"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "FileUpload"
            ]
        },
        {
            "from": "src/components/FileUpload/DropZone.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "DropZone"
            ]
        },
        {
            "from": "src/components/FileUpload/UploadProgress.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "UploadProgress"
            ]
        },
        {
            "from": "src/components/calendar/WeekHeader.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "WeekHeader"
            ]
        },
        {
            "from": "src/components/calendar/FilterDropdown.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "FilterDropdown"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "TranscriptionViewer"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/TranscriptionHeader.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "TranscriptionHeader"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/SpeakerEntry.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "SpeakerEntry"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/TranscriptionStats.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "TranscriptionStats"
            ]
        },
        {
            "from": "src/components/controls/FilterPanel.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "FilterPanel"
            ]
        },
        {
            "from": "src/components/controls/TopEntitiesPanel.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "TopEntitiesPanel"
            ]
        },
        {
            "from": "src/hooks/useProcessStatus.ts",
            "to": null,
            "type": "export",
            "objects": [
                "useProcessStatus"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": null,
            "type": "export",
            "objects": [
                "useTranscriptionUpload"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "UploadPage"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "MeetingHistory"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "APITestPage"
            ]
        },
        {
            "from": "src/pages/ChatPage.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "ChatPage"
            ]
        },
        {
            "from": "src/services/transcription/validation.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ValidationResult",
                "validateTranscriptionResponse"
            ]
        },
        {
            "from": "src/services/transcription/processing.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ProcessedTranscription",
                "processTranscriptionResponse"
            ]
        },
        {
            "from": "src/services/api/errors.ts",
            "to": null,
            "type": "export",
            "objects": [
                "APIErrorOptions",
                "APIError"
            ]
        },
        {
            "from": "src/services/api/utils.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async"
            ]
        },
        {
            "from": "src/services/api/types.ts",
            "to": null,
            "type": "export",
            "objects": [
                "APIResponse",
                "SignedUrlResponse",
                "APIRequestContext",
                "UploadProgress",
                "UploadOptions"
            ]
        },
        {
            "from": "src/services/api/knowledgeGraph.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async",
                "async",
                "async"
            ]
        },
        {
            "from": "src/services/api/client.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async"
            ]
        },
        {
            "from": "src/services/api/upload.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async",
                "async"
            ]
        },
        {
            "from": "src/services/api/transcription.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async",
                "async"
            ]
        },
        {
            "from": "src/store/transcription.ts",
            "to": null,
            "type": "export",
            "objects": [
                "useTranscriptionStore"
            ]
        }
    ]
}
```

### repindex/tree_structure.txt

```
.
├── .DS_Store
├── .env
├── .gitignore
├── eslint.config.js
├── filelist.txt
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── repindex
├── src
│   ├── .DS_Store
│   ├── App.tsx
│   ├── asd.json
│   ├── components
│   │   ├── DebugPanel.tsx
│   │   ├── EntitySummaryModal.tsx
│   │   ├── FileUpload
│   │   │   ├── DropZone.tsx
│   │   │   ├── UploadProgress.tsx
│   │   │   └── index.tsx
│   │   ├── Graph.tsx
│   │   ├── InputSection.tsx
│   │   ├── MeetingCard.tsx
│   │   ├── NodeConnections.tsx
│   │   ├── NodeSidebar.tsx
│   │   ├── ProcessStatus.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SummaryViewer.tsx
│   │   ├── TranscriptionControls
│   │   │   ├── CopyButton.tsx
│   │   │   ├── ExportButton.tsx
│   │   │   └── index.tsx
│   │   ├── TranscriptionViewer
│   │   │   ├── SpeakerEntry.tsx
│   │   │   ├── TranscriptionHeader.tsx
│   │   │   ├── TranscriptionStats.tsx
│   │   │   └── index.tsx
│   │   ├── calendar
│   │   │   ├── FilterDropdown.tsx
│   │   │   └── WeekHeader.tsx
│   │   └── controls
│   │       ├── FilterPanel.tsx
│   │       └── TopEntitiesPanel.tsx
│   ├── config
│   │   ├── .env
│   │   ├── api.ts
│   │   ├── audio.ts
│   │   ├── constants.ts
│   │   └── env.ts
│   ├── hooks
│   │   ├── useProcessStatus.ts
│   │   └── useTranscriptionUpload.ts
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   ├── APITestPage.tsx
│   │   ├── ChatPage.tsx
│   │   ├── MeetingHistory.tsx
│   │   └── UploadPage.tsx
│   ├── services
│   │   ├── .DS_Store
│   │   ├── api
│   │   │   ├── client.ts
│   │   │   ├── errors.ts
│   │   │   ├── index.ts
│   │   │   ├── knowledgeGraph.ts
│   │   │   ├── transcription.ts
│   │   │   ├── types.ts
│   │   │   ├── upload.ts
│   │   │   └── utils.ts
│   │   └── transcription
│   │       ├── processing.ts
│   │       └── validation.ts
│   ├── store
│   │   └── transcription.ts
│   ├── types
│   │   ├── graph.ts
│   │   └── index.ts
│   ├── utils
│   │   ├── audio
│   │   │   ├── error-handler.ts
│   │   │   ├── index.ts
│   │   │   ├── logger.ts
│   │   │   ├── processing.ts
│   │   │   └── validation.ts
│   │   ├── audio.ts
│   │   ├── colors.ts
│   │   ├── entityColors.ts
│   │   ├── export.ts
│   │   ├── format.ts
│   │   ├── keywords.ts
│   │   ├── logger
│   │   │   ├── core.ts
│   │   │   ├── formatter.ts
│   │   │   ├── index.ts
│   │   │   ├── status.ts
│   │   │   └── types.ts
│   │   ├── processGraphData.ts
│   │   └── text
│   │       └── processing.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

### repindex/dependency_graph_full.json

```
{
    "nodes": [
        "vite.config.ts",
        "src/App.tsx",
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/types/graph.ts",
        "src/types/index.ts",
        "src/config/audio.ts",
        "src/config/api.ts",
        "src/config/constants.ts",
        "src/config/env.ts",
        "src/utils/colors.ts",
        "src/utils/audio.ts",
        "src/utils/entityColors.ts",
        "src/utils/export.ts",
        "src/utils/format.ts",
        "src/utils/processGraphData.ts",
        "src/utils/keywords.ts",
        "src/utils/logger/status.ts",
        "src/utils/logger/types.ts",
        "src/utils/logger/core.ts",
        "src/utils/logger/index.ts",
        "src/utils/logger/formatter.ts",
        "src/utils/audio/validation.ts",
        "src/utils/audio/error-handler.ts",
        "src/utils/audio/processing.ts",
        "src/utils/audio/logger.ts",
        "src/utils/audio/index.ts",
        "src/utils/text/processing.ts",
        "src/components/NodeConnections.tsx",
        "src/components/EntitySummaryModal.tsx",
        "src/components/ProcessStatus.tsx",
        "src/components/DebugPanel.tsx",
        "src/components/Graph.tsx",
        "src/components/InputSection.tsx",
        "src/components/MeetingCard.tsx",
        "src/components/Sidebar.tsx",
        "src/components/SummaryViewer.tsx",
        "src/components/NodeSidebar.tsx",
        "src/components/TranscriptionControls/index.tsx",
        "src/components/TranscriptionControls/ExportButton.tsx",
        "src/components/TranscriptionControls/CopyButton.tsx",
        "src/components/FileUpload/index.tsx",
        "src/components/FileUpload/DropZone.tsx",
        "src/components/FileUpload/UploadProgress.tsx",
        "src/components/calendar/WeekHeader.tsx",
        "src/components/calendar/FilterDropdown.tsx",
        "src/components/TranscriptionViewer/index.tsx",
        "src/components/TranscriptionViewer/TranscriptionHeader.tsx",
        "src/components/TranscriptionViewer/SpeakerEntry.tsx",
        "src/components/TranscriptionViewer/TranscriptionStats.tsx",
        "src/components/controls/FilterPanel.tsx",
        "src/components/controls/TopEntitiesPanel.tsx",
        "src/hooks/useProcessStatus.ts",
        "src/hooks/useTranscriptionUpload.ts",
        "src/pages/UploadPage.tsx",
        "src/pages/MeetingHistory.tsx",
        "src/pages/APITestPage.tsx",
        "src/pages/ChatPage.tsx",
        "src/services/transcription/validation.ts",
        "src/services/transcription/processing.ts",
        "src/services/api/errors.ts",
        "src/services/api/utils.ts",
        "src/services/api/types.ts",
        "src/services/api/knowledgeGraph.ts",
        "src/services/api/client.ts",
        "src/services/api/index.ts",
        "src/services/api/upload.ts",
        "src/services/api/transcription.ts",
        "src/store/transcription.ts"
    ],
    "edges": [
        {
            "from": "vite.config.ts",
            "to": null,
            "type": "export",
            "objects": [
                "defineConfig"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/pages/UploadPage.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/pages/MeetingHistory.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/pages/ChatPage.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/pages/APITestPage.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/components/Sidebar.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/components/DebugPanel.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "App"
            ]
        },
        {
            "from": "src/main.tsx",
            "to": "src/App.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-dom/client",
                "react-router-dom",
                "./App"
            ]
        },
        {
            "from": "src/types/graph.ts",
            "to": null,
            "type": "export",
            "objects": [
                "Entity",
                "Relationship",
                "GraphData",
                "ProcessedNode",
                "ProcessedLink"
            ]
        },
        {
            "from": "src/types/index.ts",
            "to": null,
            "type": "export",
            "objects": [
                "Speaker",
                "TranscriptionResponse",
                "KnowledgeGraphEntity",
                "KnowledgeGraphRelationship",
                "KnowledgeGraph",
                "ExportFormat",
                "ProcessStatus",
                "ProcessError",
                "TranscriptionState",
                "EntityMapResponse",
                "EntityMapRequest",
                "SummarizeRequest",
                "SummarizeResponse"
            ]
        },
        {
            "from": "src/config/audio.ts",
            "to": null,
            "type": "export",
            "objects": [
                "AUDIO_CONFIG"
            ]
        },
        {
            "from": "src/config/api.ts",
            "to": "src/config/env.ts",
            "type": "import",
            "objects": [
                "./env"
            ]
        },
        {
            "from": "src/config/api.ts",
            "to": null,
            "type": "export",
            "objects": [
                "API_CONFIG"
            ]
        },
        {
            "from": "src/config/constants.ts",
            "to": null,
            "type": "export",
            "objects": [
                "RETRY_CONFIG",
                "LOG_CONFIG",
                "PROCESS_STEPS"
            ]
        },
        {
            "from": "src/config/env.ts",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "../utils/logger/core"
            ]
        },
        {
            "from": "src/config/env.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ENV"
            ]
        },
        {
            "from": "src/utils/colors.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ENTITY_COLORS",
                "DEFAULT_COLOR"
            ]
        },
        {
            "from": "src/utils/audio.ts",
            "to": "src/utils/audio/validation.ts",
            "type": "import",
            "objects": [
                "./audio/constants",
                "./audio/validation",
                "./audio/logger"
            ]
        },
        {
            "from": "src/utils/audio.ts",
            "to": "src/utils/audio/logger.ts",
            "type": "import",
            "objects": [
                "./audio/constants",
                "./audio/validation",
                "./audio/logger"
            ]
        },
        {
            "from": "src/utils/entityColors.ts",
            "to": "src/utils/colors.ts",
            "type": "import",
            "objects": [
                "./colors",
                "../types/graph"
            ]
        },
        {
            "from": "src/utils/entityColors.ts",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "./colors",
                "../types/graph"
            ]
        },
        {
            "from": "src/utils/entityColors.ts",
            "to": null,
            "type": "export",
            "objects": [
                "getEntityColorMap"
            ]
        },
        {
            "from": "src/utils/export.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "docx",
                "file-saver",
                "jspdf",
                "../types"
            ]
        },
        {
            "from": "src/utils/export.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async"
            ]
        },
        {
            "from": "src/utils/format.ts",
            "to": null,
            "type": "export",
            "objects": [
                "formatTimestamp",
                "formatDuration",
                "formatFileSize"
            ]
        },
        {
            "from": "src/utils/processGraphData.ts",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "../types/graph"
            ]
        },
        {
            "from": "src/utils/processGraphData.ts",
            "to": null,
            "type": "export",
            "objects": [
                "processGraphData"
            ]
        },
        {
            "from": "src/utils/keywords.ts",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "../types/graph"
            ]
        },
        {
            "from": "src/utils/keywords.ts",
            "to": null,
            "type": "export",
            "objects": [
                "extractKeywords"
            ]
        },
        {
            "from": "src/utils/logger/status.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./core",
                "../../types"
            ]
        },
        {
            "from": "src/utils/logger/status.ts",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./core",
                "../../types"
            ]
        },
        {
            "from": "src/utils/logger/status.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./core",
                "../../types"
            ]
        },
        {
            "from": "src/utils/logger/status.ts",
            "to": null,
            "type": "export",
            "objects": [
                "logStatusChange",
                "logProcessStep"
            ]
        },
        {
            "from": "src/utils/logger/types.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "../../config/constants"
            ]
        },
        {
            "from": "src/utils/logger/types.ts",
            "to": null,
            "type": "export",
            "objects": [
                "LogLevel",
                "LogEntry",
                "LoggerConfig"
            ]
        },
        {
            "from": "src/utils/logger/core.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./formatter",
                "./types"
            ]
        },
        {
            "from": "src/utils/logger/core.ts",
            "to": "src/utils/logger/formatter.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./formatter",
                "./types"
            ]
        },
        {
            "from": "src/utils/logger/core.ts",
            "to": "src/utils/logger/types.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./formatter",
                "./types"
            ]
        },
        {
            "from": "src/utils/logger/core.ts",
            "to": null,
            "type": "export",
            "objects": [
                "logger"
            ]
        },
        {
            "from": "src/utils/logger/index.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./core"
            ]
        },
        {
            "from": "src/utils/logger/index.ts",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./core"
            ]
        },
        {
            "from": "src/utils/logger/index.ts",
            "to": null,
            "type": "export",
            "objects": [
                "LogLevel",
                "LogEntry",
                "LoggerConfig"
            ]
        },
        {
            "from": "src/utils/logger/formatter.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./types"
            ]
        },
        {
            "from": "src/utils/logger/formatter.ts",
            "to": "src/utils/logger/types.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./types"
            ]
        },
        {
            "from": "src/utils/logger/formatter.ts",
            "to": null,
            "type": "export",
            "objects": [
                "formatLogEntry"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": "src/config/audio.ts",
            "type": "import",
            "objects": [
                "../../config/audio",
                "./logger",
                "./error-handler",
                "./processing",
                "../format"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": "src/utils/audio/logger.ts",
            "type": "import",
            "objects": [
                "../../config/audio",
                "./logger",
                "./error-handler",
                "./processing",
                "../format"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": "src/utils/audio/error-handler.ts",
            "type": "import",
            "objects": [
                "../../config/audio",
                "./logger",
                "./error-handler",
                "./processing",
                "../format"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": "src/utils/audio/processing.ts",
            "type": "import",
            "objects": [
                "../../config/audio",
                "./logger",
                "./error-handler",
                "./processing",
                "../format"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": "src/utils/format.ts",
            "type": "import",
            "objects": [
                "../../config/audio",
                "./logger",
                "./error-handler",
                "./processing",
                "../format"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": null,
            "type": "export",
            "objects": [
                "AudioValidationResult",
                "validateAudioFile",
                "getAcceptedFileTypes",
                "async"
            ]
        },
        {
            "from": "src/utils/audio/error-handler.ts",
            "to": "src/utils/audio/logger.ts",
            "type": "import",
            "objects": [
                "./logger"
            ]
        },
        {
            "from": "src/utils/audio/error-handler.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ErrorLogData",
                "AudioProcessingError",
                "createErrorLog",
                "handleAudioError"
            ]
        },
        {
            "from": "src/utils/audio/processing.ts",
            "to": "src/utils/audio/logger.ts",
            "type": "import",
            "objects": [
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/audio/processing.ts",
            "to": "src/utils/audio/error-handler.ts",
            "type": "import",
            "objects": [
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/audio/processing.ts",
            "to": null,
            "type": "export",
            "objects": [
                "AudioProcessingResult",
                "async"
            ]
        },
        {
            "from": "src/utils/audio/logger.ts",
            "to": null,
            "type": "export",
            "objects": [
                "logger"
            ]
        },
        {
            "from": "src/utils/audio/index.ts",
            "to": "src/utils/audio/validation.ts",
            "type": "import",
            "objects": [
                "./constants",
                "./validation",
                "./processing",
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/audio/index.ts",
            "to": "src/utils/audio/processing.ts",
            "type": "import",
            "objects": [
                "./constants",
                "./validation",
                "./processing",
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/audio/index.ts",
            "to": "src/utils/audio/logger.ts",
            "type": "import",
            "objects": [
                "./constants",
                "./validation",
                "./processing",
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/audio/index.ts",
            "to": "src/utils/audio/error-handler.ts",
            "type": "import",
            "objects": [
                "./constants",
                "./validation",
                "./processing",
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/text/processing.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../logger",
                "../../types"
            ]
        },
        {
            "from": "src/utils/text/processing.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../logger",
                "../../types"
            ]
        },
        {
            "from": "src/utils/text/processing.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ProcessedBlock",
                "concatenateTextBlocks"
            ]
        },
        {
            "from": "src/components/NodeConnections.tsx",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "react",
                "../types/graph"
            ]
        },
        {
            "from": "src/components/NodeConnections.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "NodeConnections"
            ]
        },
        {
            "from": "src/components/EntitySummaryModal.tsx",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../types"
            ]
        },
        {
            "from": "src/components/EntitySummaryModal.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "EntitySummaryModal"
            ]
        },
        {
            "from": "src/components/ProcessStatus.tsx",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../types"
            ]
        },
        {
            "from": "src/components/ProcessStatus.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "ProcessStatus"
            ]
        },
        {
            "from": "src/components/DebugPanel.tsx",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../utils/logger/index",
                "../config/constants",
                "../utils/logger/types"
            ]
        },
        {
            "from": "src/components/DebugPanel.tsx",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../utils/logger/index",
                "../config/constants",
                "../utils/logger/types"
            ]
        },
        {
            "from": "src/components/DebugPanel.tsx",
            "to": "src/utils/logger/types.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../utils/logger/index",
                "../config/constants",
                "../utils/logger/types"
            ]
        },
        {
            "from": "src/components/DebugPanel.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "DebugPanel"
            ]
        },
        {
            "from": "src/components/Graph.tsx",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "react",
                "react-force-graph-2d",
                "../types/graph"
            ]
        },
        {
            "from": "src/components/Graph.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "Graph"
            ]
        },
        {
            "from": "src/components/InputSection.tsx",
            "to": "src/components/FileUpload/index.tsx",
            "type": "import",
            "objects": [
                "react",
                "./FileUpload"
            ]
        },
        {
            "from": "src/components/InputSection.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "InputSection"
            ]
        },
        {
            "from": "src/components/MeetingCard.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "MeetingCard"
            ]
        },
        {
            "from": "src/components/Sidebar.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "Sidebar"
            ]
        },
        {
            "from": "src/components/SummaryViewer.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "SummaryViewer"
            ]
        },
        {
            "from": "src/components/NodeSidebar.tsx",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../types/graph",
                "./NodeConnections"
            ]
        },
        {
            "from": "src/components/NodeSidebar.tsx",
            "to": "src/components/NodeConnections.tsx",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../types/graph",
                "./NodeConnections"
            ]
        },
        {
            "from": "src/components/NodeSidebar.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "NodeSidebar"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/utils/export.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/utils/text/processing.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/components/TranscriptionControls/CopyButton.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/components/TranscriptionControls/ExportButton.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "TranscriptionControls",
                "as"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/ExportButton.tsx",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/ExportButton.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "ExportButton"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/CopyButton.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "CopyButton"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/hooks/useTranscriptionUpload.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/config/audio.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/components/FileUpload/DropZone.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/components/FileUpload/UploadProgress.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "FileUpload"
            ]
        },
        {
            "from": "src/components/FileUpload/DropZone.tsx",
            "to": "src/utils/format.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../config/audio"
            ]
        },
        {
            "from": "src/components/FileUpload/DropZone.tsx",
            "to": "src/config/audio.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../config/audio"
            ]
        },
        {
            "from": "src/components/FileUpload/DropZone.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "DropZone"
            ]
        },
        {
            "from": "src/components/FileUpload/UploadProgress.tsx",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../types"
            ]
        },
        {
            "from": "src/components/FileUpload/UploadProgress.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "UploadProgress"
            ]
        },
        {
            "from": "src/components/calendar/WeekHeader.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "WeekHeader"
            ]
        },
        {
            "from": "src/components/calendar/FilterDropdown.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "FilterDropdown"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "../../store/transcription",
                "./TranscriptionHeader",
                "./SpeakerEntry",
                "../../utils/text/processing",
                "../../utils/logger/core"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": "src/components/TranscriptionViewer/TranscriptionHeader.tsx",
            "type": "import",
            "objects": [
                "react",
                "../../store/transcription",
                "./TranscriptionHeader",
                "./SpeakerEntry",
                "../../utils/text/processing",
                "../../utils/logger/core"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": "src/components/TranscriptionViewer/SpeakerEntry.tsx",
            "type": "import",
            "objects": [
                "react",
                "../../store/transcription",
                "./TranscriptionHeader",
                "./SpeakerEntry",
                "../../utils/text/processing",
                "../../utils/logger/core"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": "src/utils/text/processing.ts",
            "type": "import",
            "objects": [
                "react",
                "../../store/transcription",
                "./TranscriptionHeader",
                "./SpeakerEntry",
                "../../utils/text/processing",
                "../../utils/logger/core"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "react",
                "../../store/transcription",
                "./TranscriptionHeader",
                "./SpeakerEntry",
                "../../utils/text/processing",
                "../../utils/logger/core"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "TranscriptionViewer"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/TranscriptionHeader.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "TranscriptionHeader"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/SpeakerEntry.tsx",
            "to": "src/utils/format.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../utils/text/processing"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/SpeakerEntry.tsx",
            "to": "src/utils/text/processing.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../utils/text/processing"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/SpeakerEntry.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "SpeakerEntry"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/TranscriptionStats.tsx",
            "to": "src/utils/format.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../services/transcription/processing"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/TranscriptionStats.tsx",
            "to": "src/services/transcription/processing.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../services/transcription/processing"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/TranscriptionStats.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "TranscriptionStats"
            ]
        },
        {
            "from": "src/components/controls/FilterPanel.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "FilterPanel"
            ]
        },
        {
            "from": "src/components/controls/TopEntitiesPanel.tsx",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../types/graph"
            ]
        },
        {
            "from": "src/components/controls/TopEntitiesPanel.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "TopEntitiesPanel"
            ]
        },
        {
            "from": "src/hooks/useProcessStatus.ts",
            "to": "src/utils/logger/status.ts",
            "type": "import",
            "objects": [
                "react",
                "../utils/logger/status",
                "../config/constants",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useProcessStatus.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "react",
                "../utils/logger/status",
                "../config/constants",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useProcessStatus.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "../utils/logger/status",
                "../config/constants",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useProcessStatus.ts",
            "to": null,
            "type": "export",
            "objects": [
                "useProcessStatus"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/services/api/upload.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/services/api/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/config/env.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": null,
            "type": "export",
            "objects": [
                "useTranscriptionUpload"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/components/FileUpload/index.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/components/ProcessStatus.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/components/TranscriptionControls/index.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/components/TranscriptionViewer/index.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/components/DebugPanel.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "UploadPage"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/components/MeetingCard.tsx",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/components/calendar/WeekHeader.tsx",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/components/calendar/FilterDropdown.tsx",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/components/EntitySummaryModal.tsx",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "MeetingHistory"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/config/env.ts",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/components/SummaryViewer.tsx",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/utils/processGraphData.ts",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/utils/entityColors.ts",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/components/Graph.tsx",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/components/Sidebar.tsx",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "APITestPage"
            ]
        },
        {
            "from": "src/pages/ChatPage.tsx",
            "to": null,
            "type": "export",
            "objects": [
                "ChatPage"
            ]
        },
        {
            "from": "src/services/transcription/validation.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/transcription/validation.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/transcription/validation.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ValidationResult",
                "validateTranscriptionResponse"
            ]
        },
        {
            "from": "src/services/transcription/processing.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/transcription/processing.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/transcription/processing.ts",
            "to": null,
            "type": "export",
            "objects": [
                "ProcessedTranscription",
                "processTranscriptionResponse"
            ]
        },
        {
            "from": "src/services/api/errors.ts",
            "to": null,
            "type": "export",
            "objects": [
                "APIErrorOptions",
                "APIError"
            ]
        },
        {
            "from": "src/services/api/utils.ts",
            "to": "src/services/api/errors.ts",
            "type": "import",
            "objects": [
                "./errors"
            ]
        },
        {
            "from": "src/services/api/utils.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async"
            ]
        },
        {
            "from": "src/services/api/types.ts",
            "to": null,
            "type": "export",
            "objects": [
                "APIResponse",
                "SignedUrlResponse",
                "APIRequestContext",
                "UploadProgress",
                "UploadOptions"
            ]
        },
        {
            "from": "src/services/api/knowledgeGraph.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../../types",
                "../../config/env",
                "../../utils/logger",
                "./errors"
            ]
        },
        {
            "from": "src/services/api/knowledgeGraph.ts",
            "to": "src/config/env.ts",
            "type": "import",
            "objects": [
                "../../types",
                "../../config/env",
                "../../utils/logger",
                "./errors"
            ]
        },
        {
            "from": "src/services/api/knowledgeGraph.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../types",
                "../../config/env",
                "../../utils/logger",
                "./errors"
            ]
        },
        {
            "from": "src/services/api/knowledgeGraph.ts",
            "to": "src/services/api/errors.ts",
            "type": "import",
            "objects": [
                "../../types",
                "../../config/env",
                "../../utils/logger",
                "./errors"
            ]
        },
        {
            "from": "src/services/api/knowledgeGraph.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async",
                "async",
                "async"
            ]
        },
        {
            "from": "src/services/api/client.ts",
            "to": "src/config/api.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./errors",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/client.ts",
            "to": "src/services/api/errors.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./errors",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/client.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./errors",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/client.ts",
            "to": "src/services/api/types.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./errors",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/client.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async"
            ]
        },
        {
            "from": "src/services/api/upload.ts",
            "to": "src/config/api.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/upload.ts",
            "to": "src/services/api/utils.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/upload.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/upload.ts",
            "to": "src/services/api/types.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/upload.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async",
                "async"
            ]
        },
        {
            "from": "src/services/api/transcription.ts",
            "to": "src/config/api.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/api/transcription.ts",
            "to": "src/services/api/utils.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/api/transcription.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/api/transcription.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/api/transcription.ts",
            "to": null,
            "type": "export",
            "objects": [
                "async",
                "async"
            ]
        },
        {
            "from": "src/store/transcription.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "zustand",
                "../types",
                "../utils/logger/core"
            ]
        },
        {
            "from": "src/store/transcription.ts",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "zustand",
                "../types",
                "../utils/logger/core"
            ]
        },
        {
            "from": "src/store/transcription.ts",
            "to": null,
            "type": "export",
            "objects": [
                "useTranscriptionStore"
            ]
        }
    ]
}
```

### repindex/top_level_structure.json

```
{
    "vite.config.ts": {
        "imports": [
            "vite",
            "@vitejs/plugin-react"
        ],
        "exports": [
            "defineConfig"
        ]
    },
    "src/App.tsx": {
        "imports": [
            "react",
            "react-router-dom",
            "./pages/UploadPage",
            "./pages/MeetingHistory",
            "./pages/ChatPage",
            "./pages/APITestPage",
            "./components/Sidebar",
            "./components/DebugPanel"
        ],
        "exports": [
            "App"
        ]
    },
    "src/main.tsx": {
        "imports": [
            "react",
            "react-dom/client",
            "react-router-dom",
            "./App"
        ],
        "exports": []
    },
    "src/vite-env.d.ts": {
        "imports": [],
        "exports": []
    },
    "src/types/graph.ts": {
        "imports": [],
        "exports": [
            "Entity",
            "Relationship",
            "GraphData",
            "ProcessedNode",
            "ProcessedLink"
        ]
    },
    "src/types/index.ts": {
        "imports": [],
        "exports": [
            "Speaker",
            "TranscriptionResponse",
            "KnowledgeGraphEntity",
            "KnowledgeGraphRelationship",
            "KnowledgeGraph",
            "ExportFormat",
            "ProcessStatus",
            "ProcessError",
            "TranscriptionState",
            "EntityMapResponse",
            "EntityMapRequest",
            "SummarizeRequest",
            "SummarizeResponse"
        ]
    },
    "src/config/audio.ts": {
        "imports": [],
        "exports": [
            "AUDIO_CONFIG"
        ]
    },
    "src/config/api.ts": {
        "imports": [
            "./env"
        ],
        "exports": [
            "API_CONFIG"
        ]
    },
    "src/config/constants.ts": {
        "imports": [],
        "exports": [
            "RETRY_CONFIG",
            "LOG_CONFIG",
            "PROCESS_STEPS"
        ]
    },
    "src/config/env.ts": {
        "imports": [
            "../utils/logger/core"
        ],
        "exports": [
            "ENV"
        ]
    },
    "src/utils/colors.ts": {
        "imports": [],
        "exports": [
            "ENTITY_COLORS",
            "DEFAULT_COLOR"
        ]
    },
    "src/utils/audio.ts": {
        "imports": [
            "./audio/constants",
            "./audio/validation",
            "./audio/logger"
        ],
        "exports": []
    },
    "src/utils/entityColors.ts": {
        "imports": [
            "./colors",
            "../types/graph"
        ],
        "exports": [
            "getEntityColorMap"
        ]
    },
    "src/utils/export.ts": {
        "imports": [
            "docx",
            "file-saver",
            "jspdf",
            "../types"
        ],
        "exports": [
            "async"
        ]
    },
    "src/utils/format.ts": {
        "imports": [],
        "exports": [
            "formatTimestamp",
            "formatDuration",
            "formatFileSize"
        ]
    },
    "src/utils/processGraphData.ts": {
        "imports": [
            "../types/graph"
        ],
        "exports": [
            "processGraphData"
        ]
    },
    "src/utils/keywords.ts": {
        "imports": [
            "../types/graph"
        ],
        "exports": [
            "extractKeywords"
        ]
    },
    "src/utils/logger/status.ts": {
        "imports": [
            "../../config/constants",
            "./core",
            "../../types"
        ],
        "exports": [
            "logStatusChange",
            "logProcessStep"
        ]
    },
    "src/utils/logger/types.ts": {
        "imports": [
            "../../config/constants"
        ],
        "exports": [
            "LogLevel",
            "LogEntry",
            "LoggerConfig"
        ]
    },
    "src/utils/logger/core.ts": {
        "imports": [
            "../../config/constants",
            "./formatter",
            "./types"
        ],
        "exports": [
            "logger"
        ]
    },
    "src/utils/logger/index.ts": {
        "imports": [
            "../../config/constants",
            "./core"
        ],
        "exports": [
            "LogLevel",
            "LogEntry",
            "LoggerConfig"
        ]
    },
    "src/utils/logger/formatter.ts": {
        "imports": [
            "../../config/constants",
            "./types"
        ],
        "exports": [
            "formatLogEntry"
        ]
    },
    "src/utils/audio/validation.ts": {
        "imports": [
            "../../config/audio",
            "./logger",
            "./error-handler",
            "./processing",
            "../format"
        ],
        "exports": [
            "AudioValidationResult",
            "validateAudioFile",
            "getAcceptedFileTypes",
            "async"
        ]
    },
    "src/utils/audio/error-handler.ts": {
        "imports": [
            "./logger"
        ],
        "exports": [
            "ErrorLogData",
            "AudioProcessingError",
            "createErrorLog",
            "handleAudioError"
        ]
    },
    "src/utils/audio/processing.ts": {
        "imports": [
            "./logger",
            "./error-handler"
        ],
        "exports": [
            "AudioProcessingResult",
            "async"
        ]
    },
    "src/utils/audio/logger.ts": {
        "imports": [],
        "exports": [
            "logger"
        ]
    },
    "src/utils/audio/index.ts": {
        "imports": [
            "./constants",
            "./validation",
            "./processing",
            "./logger",
            "./error-handler"
        ],
        "exports": []
    },
    "src/utils/text/processing.ts": {
        "imports": [
            "../logger",
            "../../types"
        ],
        "exports": [
            "ProcessedBlock",
            "concatenateTextBlocks"
        ]
    },
    "src/components/NodeConnections.tsx": {
        "imports": [
            "react",
            "../types/graph"
        ],
        "exports": [
            "NodeConnections"
        ]
    },
    "src/components/EntitySummaryModal.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "../types"
        ],
        "exports": [
            "EntitySummaryModal"
        ]
    },
    "src/components/ProcessStatus.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "../types"
        ],
        "exports": [
            "ProcessStatus"
        ]
    },
    "src/components/DebugPanel.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "../utils/logger/index",
            "../config/constants",
            "../utils/logger/types"
        ],
        "exports": [
            "DebugPanel"
        ]
    },
    "src/components/Graph.tsx": {
        "imports": [
            "react",
            "react-force-graph-2d",
            "../types/graph"
        ],
        "exports": [
            "Graph"
        ]
    },
    "src/components/InputSection.tsx": {
        "imports": [
            "react",
            "./FileUpload"
        ],
        "exports": [
            "InputSection"
        ]
    },
    "src/components/MeetingCard.tsx": {
        "imports": [
            "react",
            "lucide-react"
        ],
        "exports": [
            "MeetingCard"
        ]
    },
    "src/components/Sidebar.tsx": {
        "imports": [
            "react",
            "react-router-dom",
            "lucide-react"
        ],
        "exports": [
            "Sidebar"
        ]
    },
    "src/components/SummaryViewer.tsx": {
        "imports": [
            "react"
        ],
        "exports": [
            "SummaryViewer"
        ]
    },
    "src/components/NodeSidebar.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "../types/graph",
            "./NodeConnections"
        ],
        "exports": [
            "NodeSidebar"
        ]
    },
    "src/components/TranscriptionControls/index.tsx": {
        "imports": [
            "react",
            "sonner",
            "../../store/transcription",
            "../../utils/export",
            "../../utils/text/processing",
            "./CopyButton",
            "./ExportButton",
            "../../types"
        ],
        "exports": [
            "TranscriptionControls",
            "as"
        ]
    },
    "src/components/TranscriptionControls/ExportButton.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "../../types"
        ],
        "exports": [
            "ExportButton"
        ]
    },
    "src/components/TranscriptionControls/CopyButton.tsx": {
        "imports": [
            "react",
            "lucide-react"
        ],
        "exports": [
            "CopyButton"
        ]
    },
    "src/components/FileUpload/index.tsx": {
        "imports": [
            "react",
            "sonner",
            "../../store/transcription",
            "../../hooks/useTranscriptionUpload",
            "../../config/audio",
            "./DropZone",
            "./UploadProgress",
            "../../utils/logger"
        ],
        "exports": [
            "FileUpload"
        ]
    },
    "src/components/FileUpload/DropZone.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "../../utils/format",
            "../../config/audio"
        ],
        "exports": [
            "DropZone"
        ]
    },
    "src/components/FileUpload/UploadProgress.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "../../types"
        ],
        "exports": [
            "UploadProgress"
        ]
    },
    "src/components/calendar/WeekHeader.tsx": {
        "imports": [
            "react",
            "date-fns",
            "lucide-react"
        ],
        "exports": [
            "WeekHeader"
        ]
    },
    "src/components/calendar/FilterDropdown.tsx": {
        "imports": [
            "react",
            "lucide-react"
        ],
        "exports": [
            "FilterDropdown"
        ]
    },
    "src/components/TranscriptionViewer/index.tsx": {
        "imports": [
            "react",
            "../../store/transcription",
            "./TranscriptionHeader",
            "./SpeakerEntry",
            "../../utils/text/processing",
            "../../utils/logger/core"
        ],
        "exports": [
            "TranscriptionViewer"
        ]
    },
    "src/components/TranscriptionViewer/TranscriptionHeader.tsx": {
        "imports": [
            "react"
        ],
        "exports": [
            "TranscriptionHeader"
        ]
    },
    "src/components/TranscriptionViewer/SpeakerEntry.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "../../utils/format",
            "../../utils/text/processing"
        ],
        "exports": [
            "SpeakerEntry"
        ]
    },
    "src/components/TranscriptionViewer/TranscriptionStats.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "../../utils/format",
            "../../services/transcription/processing"
        ],
        "exports": [
            "TranscriptionStats"
        ]
    },
    "src/components/controls/FilterPanel.tsx": {
        "imports": [
            "react",
            "lucide-react"
        ],
        "exports": [
            "FilterPanel"
        ]
    },
    "src/components/controls/TopEntitiesPanel.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "../../types/graph"
        ],
        "exports": [
            "TopEntitiesPanel"
        ]
    },
    "src/hooks/useProcessStatus.ts": {
        "imports": [
            "react",
            "../utils/logger/status",
            "../config/constants",
            "../types"
        ],
        "exports": [
            "useProcessStatus"
        ]
    },
    "src/hooks/useTranscriptionUpload.ts": {
        "imports": [
            "react",
            "../store/transcription",
            "../services/api/upload",
            "../services/api/transcription",
            "../utils/logger",
            "../config/env",
            "../types"
        ],
        "exports": [
            "useTranscriptionUpload"
        ]
    },
    "src/pages/UploadPage.tsx": {
        "imports": [
            "react",
            "sonner",
            "../components/FileUpload",
            "../components/ProcessStatus",
            "../components/TranscriptionControls",
            "../components/TranscriptionViewer",
            "../components/DebugPanel",
            "../store/transcription"
        ],
        "exports": [
            "UploadPage"
        ]
    },
    "src/pages/MeetingHistory.tsx": {
        "imports": [
            "react",
            "lucide-react",
            "date-fns",
            "../components/MeetingCard",
            "../components/calendar/WeekHeader",
            "../components/calendar/FilterDropdown",
            "../store/transcription",
            "../utils/logger/core",
            "../components/EntitySummaryModal"
        ],
        "exports": [
            "MeetingHistory"
        ]
    },
    "src/pages/APITestPage.tsx": {
        "imports": [
            "react",
            "../config/env",
            "../utils/logger/index",
            "sonner",
            "../components/SummaryViewer",
            "../utils/processGraphData",
            "../utils/entityColors",
            "../components/Graph",
            "../components/Sidebar",
            "../types/graph"
        ],
        "exports": [
            "APITestPage"
        ]
    },
    "src/pages/ChatPage.tsx": {
        "imports": [
            "react"
        ],
        "exports": [
            "ChatPage"
        ]
    },
    "src/services/transcription/validation.ts": {
        "imports": [
            "../../utils/logger",
            "../../types"
        ],
        "exports": [
            "ValidationResult",
            "validateTranscriptionResponse"
        ]
    },
    "src/services/transcription/processing.ts": {
        "imports": [
            "../../utils/logger",
            "../../types"
        ],
        "exports": [
            "ProcessedTranscription",
            "processTranscriptionResponse"
        ]
    },
    "src/services/api/errors.ts": {
        "imports": [],
        "exports": [
            "APIErrorOptions",
            "APIError"
        ]
    },
    "src/services/api/utils.ts": {
        "imports": [
            "./errors"
        ],
        "exports": [
            "async"
        ]
    },
    "src/services/api/types.ts": {
        "imports": [],
        "exports": [
            "APIResponse",
            "SignedUrlResponse",
            "APIRequestContext",
            "UploadProgress",
            "UploadOptions"
        ]
    },
    "src/services/api/knowledgeGraph.ts": {
        "imports": [
            "../../types",
            "../../config/env",
            "../../utils/logger",
            "./errors"
        ],
        "exports": [
            "async",
            "async",
            "async"
        ]
    },
    "src/services/api/client.ts": {
        "imports": [
            "../../config/api",
            "./errors",
            "../../utils/logger",
            "./types"
        ],
        "exports": [
            "async"
        ]
    },
    "src/services/api/index.ts": {
        "imports": [],
        "exports": []
    },
    "src/services/api/upload.ts": {
        "imports": [
            "../../config/api",
            "./utils",
            "../../utils/logger",
            "./types"
        ],
        "exports": [
            "async",
            "async"
        ]
    },
    "src/services/api/transcription.ts": {
        "imports": [
            "../../config/api",
            "./utils",
            "../../utils/logger",
            "../../types"
        ],
        "exports": [
            "async",
            "async"
        ]
    },
    "src/store/transcription.ts": {
        "imports": [
            "zustand",
            "../types",
            "../utils/logger/core"
        ],
        "exports": [
            "useTranscriptionStore"
        ]
    }
}
```

### repindex/dependency_graph_imports.json

```
{
    "nodes": [
        "vite.config.ts",
        "src/App.tsx",
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/types/graph.ts",
        "src/types/index.ts",
        "src/config/audio.ts",
        "src/config/api.ts",
        "src/config/constants.ts",
        "src/config/env.ts",
        "src/utils/colors.ts",
        "src/utils/audio.ts",
        "src/utils/entityColors.ts",
        "src/utils/export.ts",
        "src/utils/format.ts",
        "src/utils/processGraphData.ts",
        "src/utils/keywords.ts",
        "src/utils/logger/status.ts",
        "src/utils/logger/types.ts",
        "src/utils/logger/core.ts",
        "src/utils/logger/index.ts",
        "src/utils/logger/formatter.ts",
        "src/utils/audio/validation.ts",
        "src/utils/audio/error-handler.ts",
        "src/utils/audio/processing.ts",
        "src/utils/audio/logger.ts",
        "src/utils/audio/index.ts",
        "src/utils/text/processing.ts",
        "src/components/NodeConnections.tsx",
        "src/components/EntitySummaryModal.tsx",
        "src/components/ProcessStatus.tsx",
        "src/components/DebugPanel.tsx",
        "src/components/Graph.tsx",
        "src/components/InputSection.tsx",
        "src/components/MeetingCard.tsx",
        "src/components/Sidebar.tsx",
        "src/components/SummaryViewer.tsx",
        "src/components/NodeSidebar.tsx",
        "src/components/TranscriptionControls/index.tsx",
        "src/components/TranscriptionControls/ExportButton.tsx",
        "src/components/TranscriptionControls/CopyButton.tsx",
        "src/components/FileUpload/index.tsx",
        "src/components/FileUpload/DropZone.tsx",
        "src/components/FileUpload/UploadProgress.tsx",
        "src/components/calendar/WeekHeader.tsx",
        "src/components/calendar/FilterDropdown.tsx",
        "src/components/TranscriptionViewer/index.tsx",
        "src/components/TranscriptionViewer/TranscriptionHeader.tsx",
        "src/components/TranscriptionViewer/SpeakerEntry.tsx",
        "src/components/TranscriptionViewer/TranscriptionStats.tsx",
        "src/components/controls/FilterPanel.tsx",
        "src/components/controls/TopEntitiesPanel.tsx",
        "src/hooks/useProcessStatus.ts",
        "src/hooks/useTranscriptionUpload.ts",
        "src/pages/UploadPage.tsx",
        "src/pages/MeetingHistory.tsx",
        "src/pages/APITestPage.tsx",
        "src/pages/ChatPage.tsx",
        "src/services/transcription/validation.ts",
        "src/services/transcription/processing.ts",
        "src/services/api/errors.ts",
        "src/services/api/utils.ts",
        "src/services/api/types.ts",
        "src/services/api/knowledgeGraph.ts",
        "src/services/api/client.ts",
        "src/services/api/index.ts",
        "src/services/api/upload.ts",
        "src/services/api/transcription.ts",
        "src/store/transcription.ts"
    ],
    "edges": [
        {
            "from": "src/App.tsx",
            "to": "src/pages/UploadPage.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/pages/MeetingHistory.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/pages/ChatPage.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/pages/APITestPage.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/components/Sidebar.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/App.tsx",
            "to": "src/components/DebugPanel.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-router-dom",
                "./pages/UploadPage",
                "./pages/MeetingHistory",
                "./pages/ChatPage",
                "./pages/APITestPage",
                "./components/Sidebar",
                "./components/DebugPanel"
            ]
        },
        {
            "from": "src/main.tsx",
            "to": "src/App.tsx",
            "type": "import",
            "objects": [
                "react",
                "react-dom/client",
                "react-router-dom",
                "./App"
            ]
        },
        {
            "from": "src/config/api.ts",
            "to": "src/config/env.ts",
            "type": "import",
            "objects": [
                "./env"
            ]
        },
        {
            "from": "src/config/env.ts",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "../utils/logger/core"
            ]
        },
        {
            "from": "src/utils/audio.ts",
            "to": "src/utils/audio/validation.ts",
            "type": "import",
            "objects": [
                "./audio/constants",
                "./audio/validation",
                "./audio/logger"
            ]
        },
        {
            "from": "src/utils/audio.ts",
            "to": "src/utils/audio/logger.ts",
            "type": "import",
            "objects": [
                "./audio/constants",
                "./audio/validation",
                "./audio/logger"
            ]
        },
        {
            "from": "src/utils/entityColors.ts",
            "to": "src/utils/colors.ts",
            "type": "import",
            "objects": [
                "./colors",
                "../types/graph"
            ]
        },
        {
            "from": "src/utils/entityColors.ts",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "./colors",
                "../types/graph"
            ]
        },
        {
            "from": "src/utils/export.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "docx",
                "file-saver",
                "jspdf",
                "../types"
            ]
        },
        {
            "from": "src/utils/processGraphData.ts",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "../types/graph"
            ]
        },
        {
            "from": "src/utils/keywords.ts",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "../types/graph"
            ]
        },
        {
            "from": "src/utils/logger/status.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./core",
                "../../types"
            ]
        },
        {
            "from": "src/utils/logger/status.ts",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./core",
                "../../types"
            ]
        },
        {
            "from": "src/utils/logger/status.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./core",
                "../../types"
            ]
        },
        {
            "from": "src/utils/logger/types.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "../../config/constants"
            ]
        },
        {
            "from": "src/utils/logger/core.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./formatter",
                "./types"
            ]
        },
        {
            "from": "src/utils/logger/core.ts",
            "to": "src/utils/logger/formatter.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./formatter",
                "./types"
            ]
        },
        {
            "from": "src/utils/logger/core.ts",
            "to": "src/utils/logger/types.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./formatter",
                "./types"
            ]
        },
        {
            "from": "src/utils/logger/index.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./core"
            ]
        },
        {
            "from": "src/utils/logger/index.ts",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./core"
            ]
        },
        {
            "from": "src/utils/logger/formatter.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./types"
            ]
        },
        {
            "from": "src/utils/logger/formatter.ts",
            "to": "src/utils/logger/types.ts",
            "type": "import",
            "objects": [
                "../../config/constants",
                "./types"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": "src/config/audio.ts",
            "type": "import",
            "objects": [
                "../../config/audio",
                "./logger",
                "./error-handler",
                "./processing",
                "../format"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": "src/utils/audio/logger.ts",
            "type": "import",
            "objects": [
                "../../config/audio",
                "./logger",
                "./error-handler",
                "./processing",
                "../format"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": "src/utils/audio/error-handler.ts",
            "type": "import",
            "objects": [
                "../../config/audio",
                "./logger",
                "./error-handler",
                "./processing",
                "../format"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": "src/utils/audio/processing.ts",
            "type": "import",
            "objects": [
                "../../config/audio",
                "./logger",
                "./error-handler",
                "./processing",
                "../format"
            ]
        },
        {
            "from": "src/utils/audio/validation.ts",
            "to": "src/utils/format.ts",
            "type": "import",
            "objects": [
                "../../config/audio",
                "./logger",
                "./error-handler",
                "./processing",
                "../format"
            ]
        },
        {
            "from": "src/utils/audio/error-handler.ts",
            "to": "src/utils/audio/logger.ts",
            "type": "import",
            "objects": [
                "./logger"
            ]
        },
        {
            "from": "src/utils/audio/processing.ts",
            "to": "src/utils/audio/logger.ts",
            "type": "import",
            "objects": [
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/audio/processing.ts",
            "to": "src/utils/audio/error-handler.ts",
            "type": "import",
            "objects": [
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/audio/index.ts",
            "to": "src/utils/audio/validation.ts",
            "type": "import",
            "objects": [
                "./constants",
                "./validation",
                "./processing",
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/audio/index.ts",
            "to": "src/utils/audio/processing.ts",
            "type": "import",
            "objects": [
                "./constants",
                "./validation",
                "./processing",
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/audio/index.ts",
            "to": "src/utils/audio/logger.ts",
            "type": "import",
            "objects": [
                "./constants",
                "./validation",
                "./processing",
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/audio/index.ts",
            "to": "src/utils/audio/error-handler.ts",
            "type": "import",
            "objects": [
                "./constants",
                "./validation",
                "./processing",
                "./logger",
                "./error-handler"
            ]
        },
        {
            "from": "src/utils/text/processing.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../logger",
                "../../types"
            ]
        },
        {
            "from": "src/utils/text/processing.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../logger",
                "../../types"
            ]
        },
        {
            "from": "src/components/NodeConnections.tsx",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "react",
                "../types/graph"
            ]
        },
        {
            "from": "src/components/EntitySummaryModal.tsx",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../types"
            ]
        },
        {
            "from": "src/components/ProcessStatus.tsx",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../types"
            ]
        },
        {
            "from": "src/components/DebugPanel.tsx",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../utils/logger/index",
                "../config/constants",
                "../utils/logger/types"
            ]
        },
        {
            "from": "src/components/DebugPanel.tsx",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../utils/logger/index",
                "../config/constants",
                "../utils/logger/types"
            ]
        },
        {
            "from": "src/components/DebugPanel.tsx",
            "to": "src/utils/logger/types.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../utils/logger/index",
                "../config/constants",
                "../utils/logger/types"
            ]
        },
        {
            "from": "src/components/Graph.tsx",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "react",
                "react-force-graph-2d",
                "../types/graph"
            ]
        },
        {
            "from": "src/components/InputSection.tsx",
            "to": "src/components/FileUpload/index.tsx",
            "type": "import",
            "objects": [
                "react",
                "./FileUpload"
            ]
        },
        {
            "from": "src/components/NodeSidebar.tsx",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../types/graph",
                "./NodeConnections"
            ]
        },
        {
            "from": "src/components/NodeSidebar.tsx",
            "to": "src/components/NodeConnections.tsx",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../types/graph",
                "./NodeConnections"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/utils/export.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/utils/text/processing.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/components/TranscriptionControls/CopyButton.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/components/TranscriptionControls/ExportButton.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/index.tsx",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../utils/export",
                "../../utils/text/processing",
                "./CopyButton",
                "./ExportButton",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionControls/ExportButton.tsx",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../types"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/hooks/useTranscriptionUpload.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/config/audio.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/components/FileUpload/DropZone.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/components/FileUpload/UploadProgress.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/index.tsx",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../../store/transcription",
                "../../hooks/useTranscriptionUpload",
                "../../config/audio",
                "./DropZone",
                "./UploadProgress",
                "../../utils/logger"
            ]
        },
        {
            "from": "src/components/FileUpload/DropZone.tsx",
            "to": "src/utils/format.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../config/audio"
            ]
        },
        {
            "from": "src/components/FileUpload/DropZone.tsx",
            "to": "src/config/audio.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../config/audio"
            ]
        },
        {
            "from": "src/components/FileUpload/UploadProgress.tsx",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../types"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "../../store/transcription",
                "./TranscriptionHeader",
                "./SpeakerEntry",
                "../../utils/text/processing",
                "../../utils/logger/core"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": "src/components/TranscriptionViewer/TranscriptionHeader.tsx",
            "type": "import",
            "objects": [
                "react",
                "../../store/transcription",
                "./TranscriptionHeader",
                "./SpeakerEntry",
                "../../utils/text/processing",
                "../../utils/logger/core"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": "src/components/TranscriptionViewer/SpeakerEntry.tsx",
            "type": "import",
            "objects": [
                "react",
                "../../store/transcription",
                "./TranscriptionHeader",
                "./SpeakerEntry",
                "../../utils/text/processing",
                "../../utils/logger/core"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": "src/utils/text/processing.ts",
            "type": "import",
            "objects": [
                "react",
                "../../store/transcription",
                "./TranscriptionHeader",
                "./SpeakerEntry",
                "../../utils/text/processing",
                "../../utils/logger/core"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/index.tsx",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "react",
                "../../store/transcription",
                "./TranscriptionHeader",
                "./SpeakerEntry",
                "../../utils/text/processing",
                "../../utils/logger/core"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/SpeakerEntry.tsx",
            "to": "src/utils/format.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../utils/text/processing"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/SpeakerEntry.tsx",
            "to": "src/utils/text/processing.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../utils/text/processing"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/TranscriptionStats.tsx",
            "to": "src/utils/format.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../services/transcription/processing"
            ]
        },
        {
            "from": "src/components/TranscriptionViewer/TranscriptionStats.tsx",
            "to": "src/services/transcription/processing.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../utils/format",
                "../../services/transcription/processing"
            ]
        },
        {
            "from": "src/components/controls/TopEntitiesPanel.tsx",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "../../types/graph"
            ]
        },
        {
            "from": "src/hooks/useProcessStatus.ts",
            "to": "src/utils/logger/status.ts",
            "type": "import",
            "objects": [
                "react",
                "../utils/logger/status",
                "../config/constants",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useProcessStatus.ts",
            "to": "src/config/constants.ts",
            "type": "import",
            "objects": [
                "react",
                "../utils/logger/status",
                "../config/constants",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useProcessStatus.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "../utils/logger/status",
                "../config/constants",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/services/api/upload.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/services/api/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/config/env.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/hooks/useTranscriptionUpload.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "react",
                "../store/transcription",
                "../services/api/upload",
                "../services/api/transcription",
                "../utils/logger",
                "../config/env",
                "../types"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/components/FileUpload/index.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/components/ProcessStatus.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/components/TranscriptionControls/index.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/components/TranscriptionViewer/index.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/components/DebugPanel.tsx",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/UploadPage.tsx",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "sonner",
                "../components/FileUpload",
                "../components/ProcessStatus",
                "../components/TranscriptionControls",
                "../components/TranscriptionViewer",
                "../components/DebugPanel",
                "../store/transcription"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/components/MeetingCard.tsx",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/components/calendar/WeekHeader.tsx",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/components/calendar/FilterDropdown.tsx",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/store/transcription.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/MeetingHistory.tsx",
            "to": "src/components/EntitySummaryModal.tsx",
            "type": "import",
            "objects": [
                "react",
                "lucide-react",
                "date-fns",
                "../components/MeetingCard",
                "../components/calendar/WeekHeader",
                "../components/calendar/FilterDropdown",
                "../store/transcription",
                "../utils/logger/core",
                "../components/EntitySummaryModal"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/config/env.ts",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/components/SummaryViewer.tsx",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/utils/processGraphData.ts",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/utils/entityColors.ts",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/components/Graph.tsx",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/components/Sidebar.tsx",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/pages/APITestPage.tsx",
            "to": "src/types/graph.ts",
            "type": "import",
            "objects": [
                "react",
                "../config/env",
                "../utils/logger/index",
                "sonner",
                "../components/SummaryViewer",
                "../utils/processGraphData",
                "../utils/entityColors",
                "../components/Graph",
                "../components/Sidebar",
                "../types/graph"
            ]
        },
        {
            "from": "src/services/transcription/validation.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/transcription/validation.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/transcription/processing.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/transcription/processing.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/api/utils.ts",
            "to": "src/services/api/errors.ts",
            "type": "import",
            "objects": [
                "./errors"
            ]
        },
        {
            "from": "src/services/api/knowledgeGraph.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../../types",
                "../../config/env",
                "../../utils/logger",
                "./errors"
            ]
        },
        {
            "from": "src/services/api/knowledgeGraph.ts",
            "to": "src/config/env.ts",
            "type": "import",
            "objects": [
                "../../types",
                "../../config/env",
                "../../utils/logger",
                "./errors"
            ]
        },
        {
            "from": "src/services/api/knowledgeGraph.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../types",
                "../../config/env",
                "../../utils/logger",
                "./errors"
            ]
        },
        {
            "from": "src/services/api/knowledgeGraph.ts",
            "to": "src/services/api/errors.ts",
            "type": "import",
            "objects": [
                "../../types",
                "../../config/env",
                "../../utils/logger",
                "./errors"
            ]
        },
        {
            "from": "src/services/api/client.ts",
            "to": "src/config/api.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./errors",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/client.ts",
            "to": "src/services/api/errors.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./errors",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/client.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./errors",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/client.ts",
            "to": "src/services/api/types.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./errors",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/upload.ts",
            "to": "src/config/api.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/upload.ts",
            "to": "src/services/api/utils.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/upload.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/upload.ts",
            "to": "src/services/api/types.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "./types"
            ]
        },
        {
            "from": "src/services/api/transcription.ts",
            "to": "src/config/api.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/api/transcription.ts",
            "to": "src/services/api/utils.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/api/transcription.ts",
            "to": "src/utils/logger/index.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/services/api/transcription.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "../../config/api",
                "./utils",
                "../../utils/logger",
                "../../types"
            ]
        },
        {
            "from": "src/store/transcription.ts",
            "to": "src/types/index.ts",
            "type": "import",
            "objects": [
                "zustand",
                "../types",
                "../utils/logger/core"
            ]
        },
        {
            "from": "src/store/transcription.ts",
            "to": "src/utils/logger/core.ts",
            "type": "import",
            "objects": [
                "zustand",
                "../types",
                "../utils/logger/core"
            ]
        }
    ]
}
```

### repindex/dependency_graph_no_objects.json

```
{
    "nodes": [
        "vite.config.ts",
        "src/App.tsx",
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/types/graph.ts",
        "src/types/index.ts",
        "src/config/audio.ts",
        "src/config/api.ts",
        "src/config/constants.ts",
        "src/config/env.ts",
        "src/utils/colors.ts",
        "src/utils/audio.ts",
        "src/utils/entityColors.ts",
        "src/utils/export.ts",
        "src/utils/format.ts",
        "src/utils/processGraphData.ts",
        "src/utils/keywords.ts",
        "src/utils/logger/status.ts",
        "src/utils/logger/types.ts",
        "src/utils/logger/core.ts",
        "src/utils/logger/index.ts",
        "src/utils/logger/formatter.ts",
        "src/utils/audio/validation.ts",
        "src/utils/audio/error-handler.ts",
        "src/utils/audio/processing.ts",
        "src/utils/audio/logger.ts",
        "src/utils/audio/index.ts",
        "src/utils/text/processing.ts",
        "src/components/NodeConnections.tsx",
        "src/components/EntitySummaryModal.tsx",
        "src/components/ProcessStatus.tsx",
        "src/components/DebugPanel.tsx",
        "src/components/Graph.tsx",
        "src/components/InputSection.tsx",
        "src/components/MeetingCard.tsx",
        "src/components/Sidebar.tsx",
        "src/components/SummaryViewer.tsx",
        "src/components/NodeSidebar.tsx",
        "src/components/TranscriptionControls/index.tsx",
        "src/components/TranscriptionControls/ExportButton.tsx",
        "src/components/TranscriptionControls/CopyButton.tsx",
        "src/components/FileUpload/index.tsx",
        "src/components/FileUpload/DropZone.tsx",
        "src/components/FileUpload/UploadProgress.tsx",
        "src/components/calendar/WeekHeader.tsx",
        "src/components/calendar/FilterDropdown.tsx",
        "src/components/TranscriptionViewer/index.tsx",
        "src/components/TranscriptionViewer/TranscriptionHeader.tsx",
        "src/components/TranscriptionViewer/SpeakerEntry.tsx",
        "src/components/TranscriptionViewer/TranscriptionStats.tsx",
        "src/components/controls/FilterPanel.tsx",
        "src/components/controls/TopEntitiesPanel.tsx",
        "src/hooks/useProcessStatus.ts",
        "src/hooks/useTranscriptionUpload.ts",
        "src/pages/UploadPage.tsx",
        "src/pages/MeetingHistory.tsx",
        "src/pages/APITestPage.tsx",
        "src/pages/ChatPage.tsx",
        "src/services/transcription/validation.ts",
        "src/services/transcription/processing.ts",
        "src/services/api/errors.ts",
        "src/services/api/utils.ts",
        "src/services/api/types.ts",
        "src/services/api/knowledgeGraph.ts",
        "src/services/api/client.ts",
        "src/services/api/index.ts",
        "src/services/api/upload.ts",
        "src/services/api/transcription.ts",
        "src/store/transcription.ts"
    ],
    "edges": []
}
```

### repindex/detailed_structure.json

```
{
    "vite.config.ts": {
        "language": "typescript",
        "functions": [
            "defineConfig"
        ],
        "classes": []
    },
    "src/App.tsx": {
        "language": "typescript",
        "functions": [
            "App"
        ],
        "classes": []
    },
    "src/main.tsx": {
        "language": "typescript",
        "functions": [],
        "classes": []
    },
    "src/vite-env.d.ts": {
        "language": "typescript",
        "functions": [],
        "classes": []
    },
    "src/types/graph.ts": {
        "language": "typescript",
        "functions": [
            "Entity",
            "Relationship",
            "GraphData",
            "ProcessedNode",
            "ProcessedLink"
        ],
        "classes": []
    },
    "src/types/index.ts": {
        "language": "typescript",
        "functions": [
            "Speaker",
            "TranscriptionResponse",
            "KnowledgeGraphEntity",
            "KnowledgeGraphRelationship",
            "KnowledgeGraph",
            "ExportFormat",
            "ProcessStatus",
            "ProcessError",
            "TranscriptionState",
            "EntityMapResponse",
            "EntityMapRequest",
            "SummarizeRequest",
            "SummarizeResponse"
        ],
        "classes": []
    },
    "src/config/audio.ts": {
        "language": "typescript",
        "functions": [
            "AUDIO_CONFIG"
        ],
        "classes": []
    },
    "src/config/api.ts": {
        "language": "typescript",
        "functions": [
            "API_CONFIG"
        ],
        "classes": []
    },
    "src/config/constants.ts": {
        "language": "typescript",
        "functions": [
            "RETRY_CONFIG",
            "LOG_CONFIG",
            "PROCESS_STEPS"
        ],
        "classes": []
    },
    "src/config/env.ts": {
        "language": "typescript",
        "functions": [
            "ENV"
        ],
        "classes": []
    },
    "src/utils/colors.ts": {
        "language": "typescript",
        "functions": [
            "ENTITY_COLORS",
            "DEFAULT_COLOR"
        ],
        "classes": []
    },
    "src/utils/audio.ts": {
        "language": "typescript",
        "functions": [],
        "classes": []
    },
    "src/utils/entityColors.ts": {
        "language": "typescript",
        "functions": [
            "getEntityColorMap"
        ],
        "classes": []
    },
    "src/utils/export.ts": {
        "language": "typescript",
        "functions": [
            "async"
        ],
        "classes": []
    },
    "src/utils/format.ts": {
        "language": "typescript",
        "functions": [
            "formatTimestamp",
            "formatDuration",
            "formatFileSize"
        ],
        "classes": []
    },
    "src/utils/processGraphData.ts": {
        "language": "typescript",
        "functions": [
            "processGraphData"
        ],
        "classes": []
    },
    "src/utils/keywords.ts": {
        "language": "typescript",
        "functions": [
            "extractKeywords"
        ],
        "classes": []
    },
    "src/utils/logger/status.ts": {
        "language": "typescript",
        "functions": [
            "logStatusChange",
            "logProcessStep"
        ],
        "classes": []
    },
    "src/utils/logger/types.ts": {
        "language": "typescript",
        "functions": [
            "LogLevel",
            "LogEntry",
            "LoggerConfig"
        ],
        "classes": []
    },
    "src/utils/logger/core.ts": {
        "language": "typescript",
        "functions": [
            "logger"
        ],
        "classes": []
    },
    "src/utils/logger/index.ts": {
        "language": "typescript",
        "functions": [
            "LogLevel",
            "LogEntry",
            "LoggerConfig"
        ],
        "classes": []
    },
    "src/utils/logger/formatter.ts": {
        "language": "typescript",
        "functions": [
            "formatLogEntry"
        ],
        "classes": []
    },
    "src/utils/audio/validation.ts": {
        "language": "typescript",
        "functions": [
            "AudioValidationResult",
            "validateAudioFile",
            "getAcceptedFileTypes",
            "async"
        ],
        "classes": []
    },
    "src/utils/audio/error-handler.ts": {
        "language": "typescript",
        "functions": [
            "ErrorLogData",
            "AudioProcessingError",
            "createErrorLog",
            "handleAudioError"
        ],
        "classes": []
    },
    "src/utils/audio/processing.ts": {
        "language": "typescript",
        "functions": [
            "AudioProcessingResult",
            "async"
        ],
        "classes": []
    },
    "src/utils/audio/logger.ts": {
        "language": "typescript",
        "functions": [
            "logger"
        ],
        "classes": []
    },
    "src/utils/audio/index.ts": {
        "language": "typescript",
        "functions": [],
        "classes": []
    },
    "src/utils/text/processing.ts": {
        "language": "typescript",
        "functions": [
            "ProcessedBlock",
            "concatenateTextBlocks"
        ],
        "classes": []
    },
    "src/components/NodeConnections.tsx": {
        "language": "typescript",
        "functions": [
            "NodeConnections"
        ],
        "classes": []
    },
    "src/components/EntitySummaryModal.tsx": {
        "language": "typescript",
        "functions": [
            "EntitySummaryModal"
        ],
        "classes": []
    },
    "src/components/ProcessStatus.tsx": {
        "language": "typescript",
        "functions": [
            "ProcessStatus"
        ],
        "classes": []
    },
    "src/components/DebugPanel.tsx": {
        "language": "typescript",
        "functions": [
            "DebugPanel"
        ],
        "classes": []
    },
    "src/components/Graph.tsx": {
        "language": "typescript",
        "functions": [
            "Graph"
        ],
        "classes": []
    },
    "src/components/InputSection.tsx": {
        "language": "typescript",
        "functions": [
            "InputSection"
        ],
        "classes": []
    },
    "src/components/MeetingCard.tsx": {
        "language": "typescript",
        "functions": [
            "MeetingCard"
        ],
        "classes": []
    },
    "src/components/Sidebar.tsx": {
        "language": "typescript",
        "functions": [
            "Sidebar"
        ],
        "classes": []
    },
    "src/components/SummaryViewer.tsx": {
        "language": "typescript",
        "functions": [
            "SummaryViewer"
        ],
        "classes": []
    },
    "src/components/NodeSidebar.tsx": {
        "language": "typescript",
        "functions": [
            "NodeSidebar"
        ],
        "classes": []
    },
    "src/components/TranscriptionControls/index.tsx": {
        "language": "typescript",
        "functions": [
            "TranscriptionControls",
            "as"
        ],
        "classes": []
    },
    "src/components/TranscriptionControls/ExportButton.tsx": {
        "language": "typescript",
        "functions": [
            "ExportButton"
        ],
        "classes": []
    },
    "src/components/TranscriptionControls/CopyButton.tsx": {
        "language": "typescript",
        "functions": [
            "CopyButton"
        ],
        "classes": []
    },
    "src/components/FileUpload/index.tsx": {
        "language": "typescript",
        "functions": [
            "FileUpload"
        ],
        "classes": []
    },
    "src/components/FileUpload/DropZone.tsx": {
        "language": "typescript",
        "functions": [
            "DropZone"
        ],
        "classes": []
    },
    "src/components/FileUpload/UploadProgress.tsx": {
        "language": "typescript",
        "functions": [
            "UploadProgress"
        ],
        "classes": []
    },
    "src/components/calendar/WeekHeader.tsx": {
        "language": "typescript",
        "functions": [
            "WeekHeader"
        ],
        "classes": []
    },
    "src/components/calendar/FilterDropdown.tsx": {
        "language": "typescript",
        "functions": [
            "FilterDropdown"
        ],
        "classes": []
    },
    "src/components/TranscriptionViewer/index.tsx": {
        "language": "typescript",
        "functions": [
            "TranscriptionViewer"
        ],
        "classes": []
    },
    "src/components/TranscriptionViewer/TranscriptionHeader.tsx": {
        "language": "typescript",
        "functions": [
            "TranscriptionHeader"
        ],
        "classes": []
    },
    "src/components/TranscriptionViewer/SpeakerEntry.tsx": {
        "language": "typescript",
        "functions": [
            "SpeakerEntry"
        ],
        "classes": []
    },
    "src/components/TranscriptionViewer/TranscriptionStats.tsx": {
        "language": "typescript",
        "functions": [
            "TranscriptionStats"
        ],
        "classes": []
    },
    "src/components/controls/FilterPanel.tsx": {
        "language": "typescript",
        "functions": [
            "FilterPanel"
        ],
        "classes": []
    },
    "src/components/controls/TopEntitiesPanel.tsx": {
        "language": "typescript",
        "functions": [
            "TopEntitiesPanel"
        ],
        "classes": []
    },
    "src/hooks/useProcessStatus.ts": {
        "language": "typescript",
        "functions": [
            "useProcessStatus"
        ],
        "classes": []
    },
    "src/hooks/useTranscriptionUpload.ts": {
        "language": "typescript",
        "functions": [
            "useTranscriptionUpload"
        ],
        "classes": []
    },
    "src/pages/UploadPage.tsx": {
        "language": "typescript",
        "functions": [
            "UploadPage"
        ],
        "classes": []
    },
    "src/pages/MeetingHistory.tsx": {
        "language": "typescript",
        "functions": [
            "MeetingHistory"
        ],
        "classes": []
    },
    "src/pages/APITestPage.tsx": {
        "language": "typescript",
        "functions": [
            "APITestPage"
        ],
        "classes": []
    },
    "src/pages/ChatPage.tsx": {
        "language": "typescript",
        "functions": [
            "ChatPage"
        ],
        "classes": []
    },
    "src/services/transcription/validation.ts": {
        "language": "typescript",
        "functions": [
            "ValidationResult",
            "validateTranscriptionResponse"
        ],
        "classes": []
    },
    "src/services/transcription/processing.ts": {
        "language": "typescript",
        "functions": [
            "ProcessedTranscription",
            "processTranscriptionResponse"
        ],
        "classes": []
    },
    "src/services/api/errors.ts": {
        "language": "typescript",
        "functions": [
            "APIErrorOptions",
            "APIError"
        ],
        "classes": []
    },
    "src/services/api/utils.ts": {
        "language": "typescript",
        "functions": [
            "async"
        ],
        "classes": []
    },
    "src/services/api/types.ts": {
        "language": "typescript",
        "functions": [
            "APIResponse",
            "SignedUrlResponse",
            "APIRequestContext",
            "UploadProgress",
            "UploadOptions"
        ],
        "classes": []
    },
    "src/services/api/knowledgeGraph.ts": {
        "language": "typescript",
        "functions": [
            "async",
            "async",
            "async"
        ],
        "classes": []
    },
    "src/services/api/client.ts": {
        "language": "typescript",
        "functions": [
            "async"
        ],
        "classes": []
    },
    "src/services/api/index.ts": {
        "language": "typescript",
        "functions": [],
        "classes": []
    },
    "src/services/api/upload.ts": {
        "language": "typescript",
        "functions": [
            "async",
            "async"
        ],
        "classes": []
    },
    "src/services/api/transcription.ts": {
        "language": "typescript",
        "functions": [
            "async",
            "async"
        ],
        "classes": []
    },
    "src/store/transcription.ts": {
        "language": "typescript",
        "functions": [
            "useTranscriptionStore"
        ],
        "classes": []
    }
}
```

### src/App.tsx

```typescript
// src/App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UploadPage } from './pages/UploadPage';
import { MeetingHistory } from './pages/MeetingHistory';
import { ChatPage } from './pages/ChatPage';
import { APITestPage } from './pages/APITestPage';
import { Sidebar } from './components/Sidebar'; // Navigation Sidebar
import { DebugPanel } from './components/DebugPanel';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex">
      {/* Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 relative">
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/history" element={<MeetingHistory />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/api-test" element={<APITestPage />} />
          <Route path="*" element={<Navigate to="/upload" replace />} />
        </Routes>
        <DebugPanel />
      </div>
    </div>
  );
}

export default App;
```

### src/main.tsx

```typescript
// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

### src/.DS_Store

Error reading file.

### src/asd.json

```

```

### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  color-scheme: dark;
}
body {
  @apply bg-gray-900 text-gray-100;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}
```

### src/vite-env.d.ts

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  AudioContext: typeof AudioContext
  webkitAudioContext: typeof AudioContext
}
```

### src/types/graph.ts

```typescript
export interface Entity {
    name: string;
    type: string;
    description: string;
    meeting_id: string;
    created_at: number;
  }
  
  export interface Relationship {
    source: string;
    target: string;
    description: string;
    keywords: string[];
    strength: number;
    meeting_id: string;
    created_at: number;
  }
  
  export interface GraphData {
    graph: {
      entities: Entity[];
      relationships: Relationship[];
    };
  }
  
  export interface ProcessedNode extends Entity {
    id: string;
    connections: number;
  }
  
  export interface ProcessedLink extends Omit<Relationship, 'source' | 'target'> {
    id: string;
    source: ProcessedNode;
    target: ProcessedNode;
  }
```

### src/types/index.ts

```typescript
// src/types/index.ts
export interface Speaker {
  speaker: string;
  timestamp: [number, number];
  text: string;
}

export interface TranscriptionResponse {
  transcription: {
    speakers: Speaker[];
    chunks: {
      timestamp: [number, number];
      text: string;
    }[];
    text: string;
  };
}

export interface KnowledgeGraphEntity {
  name: string;
  type: string;
  description: string;
}

export interface KnowledgeGraphRelationship {
  source: string;
  target: string;
  description: string;
  keywords: string[];
  strength: number;
}

export interface KnowledgeGraph {
  entities: KnowledgeGraphEntity[];
  relationships: KnowledgeGraphRelationship[];
}

export type ExportFormat = 'txt' | 'md' | 'pdf' | 'docx' | 'rtf';

export type ProcessStatus = 
  | 'idle'
  | 'validating'
  | 'generating-url'
  | 'uploading'
  | 'upload-complete'
  | 'requesting-transcription'
  | 'processing'
  | 'completed'
  | 'error';

export interface ProcessError {
  code: string;
  message: string;
  details?: unknown;
}

export interface TranscriptionState {
  file: File | null;
  fileId: string | null;
  status: ProcessStatus;
  error: ProcessError | null;
  transcription: TranscriptionResponse | null;
  speakerMap: Record<string, string>;
  knowledgeGraph: KnowledgeGraph | null;
  summary: string | null;

  setSpeakerName: (speaker: string, name: string) => void;
  setFile: (file: File) => void;
  setFileId: (id: string) => void;
  setStatus: (status: ProcessStatus) => void;
  setError: (error: ProcessError | null) => void;
  setTranscription: (transcription: TranscriptionResponse) => void;
  setKnowledgeGraph: (kg: KnowledgeGraph | null) => void;
  setSummary: (summary: string | null) => void;
  reset: () => void;
}

export interface EntityMapResponse {
  graph: KnowledgeGraph;
}

export interface EntityMapRequest {
  text: string;
}

export interface SummarizeRequest {
  text: string;
  knowledge_graph: KnowledgeGraph;
  system_prompt: string;
}

export interface SummarizeResponse {
  summary: string;
}

```

### src/config/audio.ts

```typescript
export const AUDIO_CONFIG = {
  FORMATS: {
    'audio/mpeg': ['.mp3'],
    'audio/wav': ['.wav'],
    'audio/wave': ['.wav'],
    'audio/x-wav': ['.wav'],
    'audio/mp4': ['.m4a', '.mp4a'],
    'audio/x-m4a': ['.m4a'],
    'audio/aac': ['.aac'],
    'audio/ogg': ['.ogg', '.oga'],
    'audio/webm': ['.weba'],
    'audio/x-aiff': ['.aif', '.aiff'],
    'audio/flac': ['.flac'],
    'audio/x-flac': ['.flac']
  },
  MAX_FILE_SIZE: 500 * 1024 * 1024,
  MIN_FILE_SIZE: 1024,
  PREVIEW_CHUNK_SIZE: 256 * 1024,
} as const;
```

### src/config/api.ts

```typescript
import { ENV } from './env';

export const API_CONFIG = {
  baseUrl: ENV.API_URL,
  endpoints: {
    generateUploadUrl: (filename: string) =>
      `${ENV.API_URL}/generate_upload_url/?filename=${encodeURIComponent(filename)}`,
    processFile: `${ENV.API_URL}/process_file/`,
    getTranscriptionResult: (fileId: string) =>
      `${ENV.API_URL}/get_transcription_result/${fileId}`,
    ready: `${ENV.API_URL}/ready`,
  },
  headers: {
    base: {
      'X-API-Key': ENV.API_KEY,
      'Accept': 'application/json',
      'Origin': window.location.origin,
    },
    json: {
      'Content-Type': 'application/json',
    },
    upload: {
      'Content-Type': 'application/octet-stream',
    },
  },
  timeout: 600000,
  polling: {
    interval: 5000,
    maxAttempts: 60,
  },
  retries: {
    max: 3,
    delay: 1000,
    backoff: 2,
  },
  cors: {
    credentials: 'omit' as RequestCredentials,
    mode: 'cors' as RequestMode,
  }
} as const;
```

### src/config/constants.ts

```typescript
// src/config/constants.ts
export const RETRY_CONFIG = {
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000,
  POLLING_INTERVAL: 2000,
} as const;

export const LOG_CONFIG = {
  MAX_LOGS: 1000,
  UPDATE_INTERVAL: 1000,
  LEVELS: {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error'
  } as const,
  COLORS: {
    debug: '#6B7280', 
    info: '#2563EB',
    warn: '#D97706',
    error: '#DC2626'
  } as const,
  STYLES: {
    debug: 'color: #6B7280; font-weight: bold',
    info: 'color: #2563EB; font-weight: bold',
    warn: 'color: #D97706; font-weight: bold',
    error: 'color: #DC2626; font-weight: bold'
  } as const,
  STATUS_MESSAGES: {
    idle: 'Ready to start',
    validating: 'Validating file...',
    'generating-url': 'Preparing upload...',
    uploading: 'Uploading file...',
    'upload-complete': 'Upload complete',
    'requesting-transcription': 'Initiating transcription...',
    processing: 'Processing transcription...',
    completed: 'Transcription complete',
    error: 'An error occurred'
  } as const
} as const;

export const PROCESS_STEPS = {
  VALIDATION: {
    start: 'Starting file validation',
    progress: 'Validation in progress', // Added this line
    success: 'File validation successful',
    error: 'File validation failed'
  },
  UPLOAD: {
    start: 'Starting file upload',
    progress: 'Upload in progress',
    success: 'Upload completed successfully',
    error: 'Upload failed'
  },
  TRANSCRIPTION: {
    start: 'Starting transcription process',
    progress: 'Transcription in progress',
    success: 'Transcription completed successfully',
    error: 'Transcription failed'
  }
} as const;
```

### src/config/.env

```
VITE_API_KEY=FySHbrXGZ_xVV53LJgTdrl__Iko-Hh7QS2r7uia3kro
VITE_API_URL=https://api-service-1040094048579.us-central1.run.app
VITE_API_KEY_SECONDARY=FySHbrXGZ_xVV53LJgTdrl__Iko-Hh7QS2r7uia3kro
VITE_API_URL_SECONDARY=https://meeting-minutes-service-1040094048579.us-central1.run.app
```

### src/config/env.ts

```typescript
// src/config/env.ts
import { logger } from '../utils/logger/core';

const getEnvVar = (key: string): string => {
  const value = import.meta.env[key];
  if (value === undefined) {
    logger.warn(`Environment variable ${key} is not set`);
    return '';
  }
  return value;
};

export const ENV = {
  API_URL: import.meta.env.VITE_API_URL || 'https://api-service-1040094048579.us-central1.run.app',
  API_URL_SECONDARY: import.meta.env.VITE_API_URL_SECONDARY || 'https://meeting-minutes-service-1040094048579.us-central1.run.app',
  API_KEY: getEnvVar('VITE_API_KEY'),
  API_KEY_SECONDARY: getEnvVar('VITE_API_KEY_SECONDARY'),
  IS_DEV: import.meta.env.DEV,
} as const;

logger.info('Environment configuration loaded', {
  API_URL: ENV.API_URL,
  API_URL_SECONDARY: ENV.API_URL_SECONDARY,
  IS_DEV: ENV.IS_DEV,
  HAS_API_KEY: !!ENV.API_KEY,
  HAS_API_KEY_SECONDARY: !!ENV.API_KEY_SECONDARY
});

```

### src/utils/colors.ts

```typescript
export const ENTITY_COLORS = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEEAD',
    '#D4A5A5',
    '#9ED2C6',
    '#FFD93D',
    '#FF9A8B',
    '#98DDCA',
    '#D4A5FF',
    '#FF8B94',
    '#91A6FF',
    '#88D8B0',
    '#FFAAA5',
    '#B5EAD7',
    '#C7CEEA',
    '#E2F0CB',
    '#FFDAC1',
    '#E0BBE4',
  ];
  
  export const DEFAULT_COLOR = '#607D8B';
```

### src/utils/audio.ts

```typescript
// Correct imports
import { AUDIO_CONFIG } from './audio/constants';
import { validateAudioFile, validateAudioContent, getAcceptedFileTypes } from './audio/validation';
import { logger } from './audio/logger';

// Destructure constants from AUDIO_CONFIG for easier access
const { FORMATS: AUDIO_FORMATS, MAX_FILE_SIZE, MIN_FILE_SIZE, PREVIEW_CHUNK_SIZE } = AUDIO_CONFIG;

export {
  // Constants
  AUDIO_FORMATS,
  AUDIO_CONFIG,
  MAX_FILE_SIZE,
  MIN_FILE_SIZE,
  PREVIEW_CHUNK_SIZE,
  // Validation functions
  validateAudioFile,
  validateAudioContent,
  getAcceptedFileTypes,
  // Logger
  logger as audioLogger,
};
```

### src/utils/entityColors.ts

```typescript
import { ENTITY_COLORS, DEFAULT_COLOR } from './colors';
import { ProcessedNode } from '../types/graph';

export const getEntityColorMap = (nodes: ProcessedNode[]) => {
  const typeCounts = nodes.reduce((acc, node) => {
    acc[node.type] = (acc[node.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedTypes = Object.entries(typeCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([type]) => type);

  const colorMap = new Map<string, string>();
  sortedTypes.forEach((type, index) => {
    colorMap.set(type, index < ENTITY_COLORS.length ? ENTITY_COLORS[index] : DEFAULT_COLOR);
  });

  return colorMap;
};
```

### src/utils/export.ts

```typescript
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import type { Speaker } from '../types';

interface ExportOptions {
  speakers: Speaker[];
  speakerMap: Record<string, string>;
  text: string;
}

export async function exportTranscription(
  format: string,
  options: ExportOptions,
  filename = 'transcription'
) {
  const { speakers, speakerMap, text } = options;

  switch (format.toLowerCase()) {
    case 'txt': {
      const content = speakers
        .map((s) => `${speakerMap[s.speaker] || s.speaker}: ${s.text}`)
        .join('\n\n');
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, `${filename}.txt`);
      break;
    }

    case 'md': {
      const content = speakers
        .map((s) => `**${speakerMap[s.speaker] || s.speaker}**: ${s.text}`)
        .join('\n\n');
      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
      saveAs(blob, `${filename}.md`);
      break;
    }

    case 'pdf': {
      const doc = new jsPDF();
      let y = 20;
      const lineHeight = 10;
      const pageHeight = doc.internal.pageSize.height - 20;

      speakers.forEach((s) => {
        const speaker = speakerMap[s.speaker] || s.speaker;
        const lines = doc.splitTextToSize(
          `${speaker}: ${s.text}`,
          doc.internal.pageSize.width - 20
        );

        if (y + lines.length * lineHeight > pageHeight) {
          doc.addPage();
          y = 20;
        }

        doc.setFont('helvetica', 'bold');
        doc.text(`${speaker}:`, 10, y);
        doc.setFont('helvetica', 'normal');
        doc.text(s.text, 10, y + lineHeight);
        y += (lines.length + 1) * lineHeight;
      });

      doc.save(`${filename}.pdf`);
      break;
    }

    case 'docx': {
      const doc = new Document({
        sections: [
          {
            children: speakers.map(
              (s) =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${speakerMap[s.speaker] || s.speaker}: `,
                      bold: true,
                    }),
                    new TextRun(s.text),
                  ],
                  spacing: {
                    after: 200,
                  },
                })
            ),
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, `${filename}.docx`);
      break;
    }

    case 'rtf': {
      const content = speakers
        .map(
          (s) =>
            `{\\b ${speakerMap[s.speaker] || s.speaker}:} ${s.text.replace(
              /[\\{}]/g,
              '\\$&'
            )}`
        )
        .join('\\par\\par ');
      const rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Times New Roman;}}\n${content}}`;
      const blob = new Blob([rtf], { type: 'text/rtf' });
      saveAs(blob, `${filename}.rtf`);
      break;
    }

    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}
```

### src/utils/format.ts

```typescript
export function formatTimestamp(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}
```

### src/utils/processGraphData.ts

```typescript
import { GraphData, ProcessedNode, ProcessedLink } from '../types/graph';

export const processGraphData = (data: GraphData) => {
  const nodes = new Map<string, ProcessedNode>();
  const links: ProcessedLink[] = [];

  data.graph.entities.forEach((entity) => {
    nodes.set(entity.name, {
      ...entity,
      id: entity.name,
      connections: 0,
    });
  });

  data.graph.relationships.forEach((rel) => {
    const sourceNode = nodes.get(rel.source);
    const targetNode = nodes.get(rel.target);

    if (sourceNode && targetNode) {
      sourceNode.connections++;
      targetNode.connections++;

      links.push({
        ...rel,
        id: `${rel.source}-${rel.target}`,
        source: sourceNode,
        target: targetNode,
      });
    }
  });

  return {
    nodes: Array.from(nodes.values()),
    links,
  };
};
```

### src/utils/keywords.ts

```typescript
import { ProcessedLink } from '../types/graph';

interface KeywordCount {
  keyword: string;
  count: number;
}

export const extractKeywords = (links: ProcessedLink[]): KeywordCount[] => {
  const keywordCounts = new Map<string, number>();
  
  links.forEach(link => {
    link.keywords.forEach(keyword => {
      keywordCounts.set(keyword, (keywordCounts.get(keyword) || 0) + 1);
    });
  });
  
  return Array.from(keywordCounts.entries())
    .map(([keyword, count]) => ({ keyword, count }))
    .sort((a, b) => b.count - a.count);
};
```

### src/utils/logger/status.ts

```typescript
// src/utils/logger/status.ts
import { LOG_CONFIG, PROCESS_STEPS } from '../../config/constants';
import { logger } from './core';
import type { ProcessStatus } from '../../types';

export function logStatusChange(from: ProcessStatus, to: ProcessStatus): void {
  logger.info('Status change', {
    from,
    to,
    fromMessage: LOG_CONFIG.STATUS_MESSAGES[from],
    toMessage: LOG_CONFIG.STATUS_MESSAGES[to]
  });
}

export function logProcessStep(
  step: keyof typeof PROCESS_STEPS,
  status: 'start' | 'progress' | 'success' | 'error',
  details?: Record<string, unknown>
): void {
  // After updating PROCESS_STEPS so all steps have all keys (start, progress, success, error):
  const message = PROCESS_STEPS[step][status]; // Now safe, as all keys exist

  switch (status) {
    case 'start':
      logger.info(message, details);
      break;
    case 'progress':
      logger.debug(message, details);
      break;
    case 'success':
      logger.info(message, details);
      break;
    case 'error':
      logger.error(message, new Error(message), details);
      break;
  }
}
```

### src/utils/logger/types.ts

```typescript
import type { LOG_CONFIG } from '../../config/constants';

export type LogLevel = typeof LOG_CONFIG.LEVELS[keyof typeof LOG_CONFIG.LEVELS];

export interface LogEntry {
  id: string;
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown;
  error?: Error;
  context?: Record<string, unknown>;
}

export interface LoggerConfig {
  maxLogs: number;
  isDevelopment: boolean;
}
```

### src/utils/logger/core.ts

```typescript
import { LOG_CONFIG } from '../../config/constants';
import { formatLogEntry } from './formatter';
import type { LogEntry, LogLevel, LoggerConfig } from './types';

class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private config: LoggerConfig;

  private constructor() {
    this.config = {
      maxLogs: LOG_CONFIG.MAX_LOGS,
      isDevelopment: true // For consistent logging in dev
    };
    this.info('Logger initialized', { forcedLogging: true });
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  private createEntry(
    level: LogLevel,
    message: string,
    error?: Error,
    data?: unknown,
    context?: Record<string, unknown>
  ): LogEntry {
    const entry: LogEntry = {
      id: this.generateId(),
      timestamp: new Date().toISOString(),
      level,
      message
    };

    if (error) entry.error = error;
    if (data !== undefined) entry.data = data;
    if (context !== undefined) entry.context = context;

    return entry;
  }

  private addLog(entry: LogEntry): void {
    try {
      this.logs.unshift(entry);
      if (this.logs.length > this.config.maxLogs) {
        this.logs.pop();
      }
      formatLogEntry(entry);
    } catch (err) {
      console.error('Failed to add log entry:', err);
      console.error('Problematic entry:', {
        ...entry,
        error: entry.error ? {
          message: entry.error.message,
          stack: entry.error.stack
        } : undefined
      });
    }
  }

  debug(message: string, data?: unknown, context?: Record<string, unknown>): void {
    console.log(`[DEBUG STDOUT] ${message}`, data, context);
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.DEBUG, message, undefined, data, context));
  }

  info(message: string, data?: unknown, context?: Record<string, unknown>): void {
    console.log(`[INFO STDOUT] ${message}`, data, context);
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.INFO, message, undefined, data, context));
  }

  warn(message: string, data?: unknown, context?: Record<string, unknown>): void {
    console.warn(`[WARN STDOUT] ${message}`, data, context);
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.WARN, message, undefined, data, context));
  }

  error(message: string, error: unknown, context?: Record<string, unknown>): void {
    const normalizedError = error instanceof Error ? error : new Error(String(error));
    console.error(`[ERROR STDOUT] ${message}`, normalizedError, context);
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.ERROR, message, normalizedError, undefined, context));
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  getErrorLogs(): LogEntry[] {
    return this.getLogsByLevel(LOG_CONFIG.LEVELS.ERROR);
  }

  clearLogs(): void {
    this.logs = [];
    this.info('Logs cleared');
  }
}

export const logger = Logger.getInstance();
```

### src/utils/logger/index.ts

```typescript
import type { LOG_CONFIG } from '../../config/constants';
import { logger } from './core';
export { logger };
export type LogLevel = typeof LOG_CONFIG.LEVELS[keyof typeof LOG_CONFIG.LEVELS];


export interface LogEntry {
  id: string;
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown;
  error?: Error;
  context?: Record<string, unknown>;
}

export interface LoggerConfig {
  maxLogs: number;
  isDevelopment: boolean;
}
```

### src/utils/logger/formatter.ts

```typescript
import { LOG_CONFIG } from '../../config/constants';
import type { LogEntry } from './types';

function stringifyValue(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

export function formatLogEntry(entry: LogEntry): void {
  const timestamp = new Date(entry.timestamp).toLocaleTimeString();
  const prefix = `[${timestamp}] [${entry.level.toUpperCase()}]`;
  const style = LOG_CONFIG.STYLES[entry.level];

  console.groupCollapsed(
    `%c${prefix}%c ${entry.message}`,
    style,
    'color: inherit'
  );

  if (entry.data !== undefined) {
    console.log('%cData:%c\n', 'color: #4B5563; font-weight: bold', 'color: inherit', stringifyValue(entry.data));
  }

  if (entry.context) {
    console.log('%cContext:%c\n', 'color: #4B5563; font-weight: bold', 'color: inherit', stringifyValue(entry.context));
  }

  if (entry.error) {
    console.group('%cError Details:', 'color: #DC2626; font-weight: bold');
    console.error(entry.error);
    if (entry.error.cause) {
      console.log('Cause:', entry.error.cause);
    }
    if (entry.error.stack) {
      console.log('Stack Trace:', entry.error.stack);
    }
    console.groupEnd();
  }

  console.groupEnd();
}
```

### src/utils/audio/validation.ts

```typescript
// src/utils/audio/validation.ts
import { AUDIO_CONFIG } from '../../config/audio';
import { logger } from './logger';
import { handleAudioError } from './error-handler';
import { processAudioChunk } from './processing';
import { formatFileSize } from '../format';

export interface AudioValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateAudioFile(file: File): AudioValidationResult {
  logger.debug('Validating audio file:', { name: file.name, size: file.size, type: file.type });

  try {
    if (!file) {
      return { isValid: false, error: 'No file selected' };
    }

    if (file.size > AUDIO_CONFIG.MAX_FILE_SIZE) {
      return {
        isValid: false,
        error: `File size exceeds maximum limit of ${formatFileSize(AUDIO_CONFIG.MAX_FILE_SIZE)}`,
      };
    }

    if (file.size < AUDIO_CONFIG.MIN_FILE_SIZE) {
      return {
        isValid: false,
        error: `File size is below minimum of ${formatFileSize(AUDIO_CONFIG.MIN_FILE_SIZE)}`,
      };
    }

    const isValidType = Object.keys(AUDIO_CONFIG.FORMATS).includes(file.type);
    if (!isValidType) {
      return {
        isValid: false,
        error: 'Invalid audio format. Please upload a supported audio file.',
      };
    }

    logger.debug('Audio file validation successful');
    return { isValid: true };
  } catch (error) {
    handleAudioError(error as Error, file, { validationType: 'file' });
    return { isValid: false, error: 'Error validating file' };
  }
}

export function getAcceptedFileTypes(): string {
  try {
    const acceptedTypes = Object.entries(AUDIO_CONFIG.FORMATS)
      .flatMap(([mimeType, extensions]) => [
        mimeType,
        ...extensions.map((ext) => ext),
      ])
      .join(',');

    logger.debug('Generated accepted file types:', acceptedTypes);
    return acceptedTypes;
  } catch (error) {
    handleAudioError(error as Error, undefined, { operation: 'getAcceptedFileTypes' });
    return '*'; // Fallback to accept all files if there's an error
  }
}

export async function validateAudioContent(file: File): Promise<AudioValidationResult> {
  logger.debug('Starting audio content validation', { fileName: file.name });

  try {
    const reader = new FileReader();
    
    const result = await new Promise<AudioValidationResult>((resolve, reject) => {
      reader.onload = async () => {
        try {
          const arrayBuffer = reader.result as ArrayBuffer;
          const processResult = await processAudioChunk(arrayBuffer);

          if (processResult.duration < 0.1) {
            resolve({
              isValid: false,
              error: 'Audio file appears to be empty or corrupted',
            });
            return;
          }

          if (processResult.channels === 0) {
            resolve({
              isValid: false,
              error: 'Audio file contains no audio channels',
            });
            return;
          }

          resolve({ isValid: true });
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = () => reject(reader.error);

      const slice = file.slice(0, AUDIO_CONFIG.PREVIEW_CHUNK_SIZE);
      reader.readAsArrayBuffer(slice);
    });

    return result;
  } catch (error) {
    handleAudioError(error as Error, file, { validationType: 'content' });
    return { isValid: false, error: 'Error validating audio content' };
  }
}
```

### src/utils/audio/error-handler.ts

```typescript
import { logger } from './logger';

export interface ErrorLogData {
  message: string;
  stack?: string;
  timestamp: string;
  fileInfo?: {
    name?: string;
    type?: string;
    size?: number;
  };
  context?: Record<string, unknown>;
}

export class AudioProcessingError extends Error {
  constructor(
    message: string,
    public readonly logData: ErrorLogData
  ) {
    super(message);
    this.name = 'AudioProcessingError';
  }
}

export function createErrorLog(error: Error, file?: File, context?: Record<string, unknown>): ErrorLogData {
  const logData: ErrorLogData = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    context
  };

  if (file) {
    logData.fileInfo = {
      name: file.name,
      type: file.type,
      size: file.size
    };
  }

  return logData;
}

export function handleAudioError(error: Error, file?: File, context?: Record<string, unknown>): never {
  const logData = createErrorLog(error, file, context);
  
  logger.error('Audio processing error occurred', error, {
    fileInfo: logData.fileInfo,
    context: logData.context
  });

  throw new AudioProcessingError(
    'An error occurred while processing your audio file. Please try again.',
    logData
  );
}
```

### src/utils/audio/processing.ts

```typescript
// src/utils/audio/processing.ts
import { logger } from './logger';
import { handleAudioError } from './error-handler';

export interface AudioProcessingResult {
  duration: number;
  channels: number;
  sampleRate: number;
  isValid: boolean;
}

export async function processAudioChunk(chunk: ArrayBuffer): Promise<AudioProcessingResult> {
  logger.debug('Processing audio chunk', { size: chunk.byteLength });

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  try {
    const audioBuffer = await audioContext.decodeAudioData(chunk);

    logger.debug('Audio chunk processed', {
      duration: audioBuffer.duration,
      channels: audioBuffer.numberOfChannels,
      sampleRate: audioBuffer.sampleRate
    });

    return {
      duration: audioBuffer.duration,
      channels: audioBuffer.numberOfChannels,
      sampleRate: audioBuffer.sampleRate,
      isValid: true
    };
  } catch (error) {
    handleAudioError(error as Error, undefined, { chunkSize: chunk.byteLength });
    return {
      duration: 0,
      channels: 0,
      sampleRate: 0,
      isValid: false
    };
  } finally {
    await audioContext.close();
  }
}
```

### src/utils/audio/logger.ts

```typescript
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private static instance: Logger;
  private readonly isDevelopment = import.meta.env.DEV;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    if (!this.isDevelopment) return;

    const timestamp = new Date().toISOString();
    const prefix = `[Audio Utils ${level.toUpperCase()}] ${timestamp}:`;

    switch (level) {
      case 'debug':
        console.debug(prefix, message, ...args);
        break;
      case 'info':
        console.info(prefix, message, ...args);
        break;
      case 'warn':
        console.warn(prefix, message, ...args);
        break;
      case 'error':
        console.error(prefix, message, ...args);
        break;
    }
  }

  debug(message: string, ...args: unknown[]): void {
    this.log('debug', message, ...args);
  }

  info(message: string, ...args: unknown[]): void {
    this.log('info', message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.log('warn', message, ...args);
  }

  error(message: string, error?: Error, ...args: unknown[]): void {
    this.log('error', message, ...(error ? [error.stack, ...args] : args));
  }
}

export const logger = Logger.getInstance();
```

### src/utils/audio/index.ts

```typescript
import { AUDIO_CONFIG } from './constants';
import { validateAudioFile, validateAudioContent, getAcceptedFileTypes } from './validation';
import { processAudioChunk } from './processing';
import { logger } from './logger';
import { handleAudioError } from './error-handler';

export {
  // Constants
  AUDIO_CONFIG,
  // Validation functions
  validateAudioFile,
  validateAudioContent,
  getAcceptedFileTypes,
  // Processing functions
  processAudioChunk,
  // Error handling
  handleAudioError,
  // Logger
  logger as audioLogger,
};
```

### src/utils/text/processing.ts

```typescript
import { logger } from '../logger';
import type { Speaker } from '../../types';

export interface ProcessedBlock extends Speaker {
  originalIndexes: number[];
}

export function concatenateTextBlocks(speakers: Speaker[]): ProcessedBlock[] {
  if (!speakers?.length) {
    logger.warn('No speakers provided for text concatenation');
    return [];
  }

  logger.debug('Starting text block concatenation', { 
    blockCount: speakers.length 
  });

  const processedBlocks: ProcessedBlock[] = [];
  let currentBlock: ProcessedBlock | null = null;

  speakers.forEach((speaker, index) => {
    // Clean up text by removing extra whitespace
    const cleanText = speaker.text.trim();
    if (!cleanText) return;

    if (!currentBlock) {
      currentBlock = {
        ...speaker,
        text: cleanText,
        originalIndexes: [index]
      };
      return;
    }

    const timeDiff = speaker.timestamp[0] - currentBlock.timestamp[1];
    const shouldConcatenate = currentBlock.speaker === speaker.speaker && timeDiff < 2.0;

    if (shouldConcatenate) {
      // Add proper spacing between concatenated text
      const separator = currentBlock.text.endsWith('.') ? ' ' : 
                       currentBlock.text.endsWith(',') ? ' ' : 
                       ' ';
      
      currentBlock.text = `${currentBlock.text}${separator}${cleanText}`;
      currentBlock.timestamp[1] = speaker.timestamp[1];
      currentBlock.originalIndexes.push(index);
    } else {
      // Different speaker or too large time gap, create new block
      processedBlocks.push(currentBlock);
      currentBlock = {
        ...speaker,
        text: cleanText,
        originalIndexes: [index]
      };
    }
  });

  // Add the last block if exists
  if (currentBlock) {
    processedBlocks.push(currentBlock);
  }

  logger.debug('Text block concatenation completed', {
    originalBlocks: speakers.length,
    concatenatedBlocks: processedBlocks.length
  });

  return processedBlocks;
}
```

### src/components/NodeConnections.tsx

```typescript
import React from 'react';
import { ProcessedLink, ProcessedNode } from '../types/graph';

interface NodeConnectionsProps {
  node: ProcessedNode;
  links: ProcessedLink[];
  nodes: ProcessedNode[];
  colorMap: Map<string, string>;
}

export const NodeConnections: React.FC<NodeConnectionsProps> = ({
  node,
  links,
  nodes,
  colorMap,
}) => {
  const nodeConnections = links.filter(
    (link) => link.source.id === node.id || link.target.id === node.id
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
        Connections ({nodeConnections.length})
      </h3>
      <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto pr-2">
        {nodeConnections.map((connection) => {
          const isSource = connection.source.id === node.id;
          const connectedNode = isSource ? connection.target : connection.source;
          const connectionKey = `${connection.id}-${isSource ? 'source' : 'target'}`;

          return (
            <div
              key={connectionKey}
              className="bg-gray-800 rounded-lg p-4 space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorMap.get(connectedNode.type) }}
                  />
                  <span className="font-medium">{connectedNode.name}</span>
                </div>
                <span className="text-sm text-gray-400 capitalize">
                  {connectedNode.type}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-gray-400 mt-1">
                <span className="flex-1 text-center">
                  {isSource ? 'Connects to' : 'Connected from'}
                </span>
              </div>
              
              <p className="text-sm text-gray-300">{connection.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {connection.keywords.map((keyword) => (
                  <span
                    key={`${connectionKey}-${keyword}`}
                    className="px-2 py-1 text-xs bg-gray-700 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Strength: {connection.strength}</span>
                <span>{new Date(connection.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
```

### src/components/EntitySummaryModal.tsx

```typescript
// src/components/EntitySummaryModal.tsx
import React from 'react';
import { X } from 'lucide-react';
import type { KnowledgeGraph } from '../types';

interface EntitySummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  summary?: string | null;
  knowledgeGraph?: KnowledgeGraph | null;
}

export function EntitySummaryModal({ isOpen, onClose, summary, knowledgeGraph }: EntitySummaryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 w-full max-w-2xl rounded-lg shadow-lg p-6 relative text-gray-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:bg-gray-700 rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">Extracted Summary & Entities</h2>
        
        {summary && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Summary</h3>
            <p className="text-gray-300 whitespace-pre-line">
              {summary}
            </p>
          </div>
        )}
        
        {knowledgeGraph?.entities && knowledgeGraph.entities.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Entities</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {knowledgeGraph.entities.map((e, i) => (
                <li key={i}>
                  <span className="font-semibold text-gray-200">{e.name}</span> ({e.type}): {e.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {knowledgeGraph?.relationships && knowledgeGraph.relationships.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Relationships</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {knowledgeGraph.relationships.map((r, i) => (
                <li key={i}>
                  <span className="font-semibold text-gray-200">{r.source}</span> → <span className="font-semibold text-gray-200">{r.target}</span>: {r.description} (Keywords: {r.keywords.join(', ')}, Strength: {r.strength})
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

```

### src/components/ProcessStatus.tsx

```typescript
// src/components/ProcessStatus.tsx
import React from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import type { ProcessStatus } from '../types';

const statusMessages: Record<ProcessStatus, string> = {
  idle: 'Ready to start',
  validating: 'Validating file...',
  'generating-url': 'Preparing upload...',
  uploading: 'Uploading file...',
  'upload-complete': 'Upload complete',
  'requesting-transcription': 'Initiating transcription...',
  processing: 'Processing transcription...',
  completed: 'Transcription complete',
  error: 'An error occurred'
};

export function ProcessStatus({ status }: { status: ProcessStatus }) {
  const message = statusMessages[status];
  const isProcessing = !['completed', 'error', 'idle'].includes(status);

  return (
    <div className="flex items-center gap-2 text-gray-200">
      {isProcessing && (
        <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
      )}
      {status === 'completed' && (
        <CheckCircle className="w-4 h-4 text-green-400" />
      )}
      {status === 'error' && (
        <AlertCircle className="w-4 h-4 text-red-400" />
      )}
      <span className="text-sm font-medium">
        {message}
      </span>
    </div>
  );
}
```

### src/components/DebugPanel.tsx

```typescript
// src/components/DebugPanel.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, X, ChevronUp, ChevronDown, RefreshCw } from 'lucide-react';
import { logger } from '../utils/logger/index';
import { LOG_CONFIG } from '../config/constants';
import type { LogEntry } from '../utils/logger/types';

function LogDisplay({ id, timestamp, level, message, data, error, context }: LogEntry) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = data !== undefined || error !== undefined || context !== undefined;

  const colorClass = {
    [LOG_CONFIG.LEVELS.ERROR]: 'text-red-500',
    [LOG_CONFIG.LEVELS.WARN]: 'text-yellow-400',
    [LOG_CONFIG.LEVELS.INFO]: 'text-blue-400',
    [LOG_CONFIG.LEVELS.DEBUG]: 'text-gray-400'
  }[level] || 'text-gray-400';

  return (
    <div className="border-b border-gray-700 py-2">
      <div className="flex items-start gap-2">
        <span className="text-xs text-gray-500 whitespace-nowrap">
          {new Date(timestamp).toLocaleTimeString()}
        </span>
        <span className={`text-xs font-medium ${colorClass}`}>
          {level.toUpperCase()}
        </span>
        <span className="text-xs text-gray-200 break-all flex-1">{message}</span>
        {hasDetails && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto p-1 hover:bg-gray-600 rounded shrink-0"
            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
          >
            {isExpanded ? (
              <ChevronUp className="w-3 h-3 text-gray-300" />
            ) : (
              <ChevronDown className="w-3 h-3 text-gray-300" />
            )}
          </button>
        )}
      </div>
      {isExpanded && hasDetails && (
        <div className="mt-2 space-y-2 text-xs text-gray-200">
          {context && (
            <details className="bg-gray-700 rounded p-2" open>
              <summary className="font-medium text-gray-300 cursor-pointer">Context</summary>
              <pre className="mt-1 overflow-x-auto whitespace-pre-wrap text-gray-200">
                {JSON.stringify(context, null, 2)}
              </pre>
            </details>
          )}
          {data !== undefined && (
            <details className="bg-gray-700 rounded p-2" open>
              <summary className="font-medium text-gray-300 cursor-pointer">Data</summary>
              <pre className="mt-1 overflow-x-auto whitespace-pre-wrap text-gray-200">
                {JSON.stringify(data, null, 2)}
              </pre>
            </details>
          )}
          {error && (
            <details className="bg-red-900 rounded p-2" open>
              <summary className="font-medium text-red-400 cursor-pointer">Error</summary>
              <div className="mt-1 text-gray-200">
                <div className="font-medium">Message:</div>
                <pre className="text-red-300 overflow-x-auto whitespace-pre-wrap">
                  {error.message}
                </pre>
                {error.stack && (
                  <>
                    <div className="font-medium mt-2">Stack:</div>
                    <pre className="text-red-300 overflow-x-auto whitespace-pre-wrap">
                      {error.stack}
                    </pre>
                  </>
                )}
              </div>
            </details>
          )}
        </div>
      )}
    </div>
  );
}

export const DebugPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const refreshLogs = useCallback(() => {
    setLogs(logger.getLogs());
  }, []);

  useEffect(() => {
    logger.debug('Debug panel initialized', { timestamp: new Date().toISOString() });
    refreshLogs();
  }, [refreshLogs]);

  useEffect(() => {
    if (!isOpen) return;

    refreshLogs();
    if (autoRefresh) {
      const interval = setInterval(refreshLogs, LOG_CONFIG.UPDATE_INTERVAL || 1000);
      return () => clearInterval(interval);
    }
  }, [isOpen, autoRefresh, refreshLogs]);

  if (!import.meta.env.DEV) {
    logger.warn('Debug panel disabled in production');
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 w-[32rem] max-h-[600px] flex flex-col text-gray-200">
          <div className="p-2 border-b border-gray-700 flex items-center justify-between bg-gray-700 sticky top-0">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium">Debug Logs</span>
              <span className="text-xs text-gray-400">({logs.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  refreshLogs();
                  setAutoRefresh(!autoRefresh);
                }}
                className={`p-1 rounded hover:bg-gray-600 ${
                  autoRefresh ? 'text-blue-400' : 'text-gray-500'
                }`}
                title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  logger.clearLogs();
                  refreshLogs();
                }}
                className="text-xs text-gray-400 hover:text-gray-200 px-2 py-1 hover:bg-gray-600 rounded"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-600 rounded"
                aria-label="Close debug panel"
              >
                <X className="w-4 h-4 text-gray-300" />
              </button>
            </div>
          </div>
          <div className="overflow-y-auto flex-1 p-2 text-gray-200">
            {logs.length === 0 ? (
              <div className="text-center py-4 text-sm text-gray-400">
                No logs yet
              </div>
            ) : (
              logs.map((log) => <LogDisplay key={log.id} {...log} />)
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsOpen(true);
            refreshLogs();
          }}
          className="bg-gray-800 text-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-700"
          title="Open Debug Panel"
        >
          <Terminal className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
```

### src/components/Graph.tsx

```typescript
import React, { useCallback, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { ProcessedNode, ProcessedLink } from '../types/graph';

interface GraphProps {
  nodes: ProcessedNode[];
  links: ProcessedLink[];
  onNodeClick: (node: ProcessedNode) => void;
  colorMap: Map<string, string>;
  selectedNode: ProcessedNode | null;
  filteredNodeIds?: Set<string>;
}

export const Graph: React.FC<GraphProps> = ({
  nodes,
  links,
  onNodeClick,
  colorMap,
  selectedNode,
  filteredNodeIds,
}) => {
  const fgRef = useRef<any>();
  const [hoveredNode, setHoveredNode] = useState<ProcessedNode | null>(null);

  const getNodeColor = useCallback((node: ProcessedNode) => {
    const baseColor = colorMap.get(node.type) || '#607D8B';
    if (filteredNodeIds && !filteredNodeIds.has(node.id)) {
      return `${baseColor}33`;
    }
    
    const isSelected = selectedNode?.id === node.id;
    const isConnected = selectedNode && links.some(
      link => 
        (link.source.id === selectedNode.id && link.target.id === node.id) ||
        (link.target.id === selectedNode.id && link.source.id === node.id)
    );
    
    if (isSelected) return `${baseColor}FF`;
    if (isConnected) return `${baseColor}EE`;
    return selectedNode ? `${baseColor}44` : `${baseColor}CC`;
  }, [colorMap, selectedNode, links, filteredNodeIds]);

  const getLinkColor = useCallback((link: ProcessedLink) => {
    if (filteredNodeIds && (!filteredNodeIds.has(link.source.id) || !filteredNodeIds.has(link.target.id))) {
      return '#88ccff22';
    }
    
    if (selectedNode) {
      const isConnected = link.source.id === selectedNode.id || link.target.id === selectedNode.id;
      return isConnected ? '#88ccffFF' : '#88ccff22';
    }
    return '#88ccffAA';
  }, [selectedNode, filteredNodeIds]);

  const paintNode = useCallback((node: any, ctx: CanvasRenderingContext2D) => {
    const size = 6 + (node.connections * 2);
    const finalSize = Math.min(size, 20);
    const nodeColor = getNodeColor(node);
    
    if (selectedNode && (node.id === selectedNode.id || links.some(
      link => 
        (link.source.id === selectedNode.id && link.target.id === node.id) ||
        (link.target.id === selectedNode.id && link.source.id === node.id)
    ))) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, finalSize * 1.4, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff22';
      ctx.fill();
    }
    
    ctx.beginPath();
    ctx.arc(node.x, node.y, finalSize * 1.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff33';
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(node.x, node.y, finalSize, 0, 2 * Math.PI);
    ctx.fillStyle = nodeColor;
    ctx.fill();
    
    ctx.strokeStyle = '#ffffff44';
    ctx.lineWidth = 1;
    ctx.stroke();
  }, [getNodeColor, selectedNode, links]);

  return (
<ForceGraph2D
  ref={fgRef}
  graphData={{ nodes, links }}
  nodeId="id"
  nodeCanvasObject={paintNode}
  nodeRelSize={6}
  linkWidth={(link) => {
    const strength = (link as ProcessedLink).strength;
    return 0.5 + (strength * 2.5);
  }}
  linkColor={getLinkColor}
  linkDirectionalParticles={2}
  linkDirectionalParticleWidth={2}
  // REMOVE linkOpacity={0.6}
  backgroundColor="#1A1A1A"
  linkDirectionalArrowLength={4}
  linkDirectionalArrowRelPos={1}
  linkDirectionalArrowColor={getLinkColor}
  d3VelocityDecay={0.3}
  cooldownTicks={100}
  onNodeClick={(node) => onNodeClick(node as ProcessedNode)}
  onNodeHover={setHoveredNode}
  onEngineStop={() => {
    if (fgRef.current) {
      fgRef.current.zoomToFit(400, 50);
    }
  }}
/>
  );
};
```

### src/components/InputSection.tsx

```typescript
import React, { useState } from 'react';
import { FileUpload } from './FileUpload';

interface InputSectionProps {
  onDataLoad: (data: any) => void;
}

export const InputSection: React.FC<InputSectionProps> = ({ onDataLoad }) => {
  const [jsonInput, setJsonInput] = useState('');

  const handleJsonSubmit = () => {
    try {
      const data = JSON.parse(jsonInput);
      onDataLoad(data);
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gray-900 rounded-lg">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Upload Graph Data</h2>
        {/* Pass onDataLoad here if you want FileUpload to handle JSON uploads */}
        <FileUpload onDataLoad={onDataLoad} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Or Paste JSON</h2>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="w-full h-40 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Paste your JSON here..."
        />
        <button
          onClick={handleJsonSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Load Graph
        </button>
      </div>
    </div>
  );
};
```

### src/components/MeetingCard.tsx

```typescript
// src/components/MeetingCard.tsx
import React from 'react';
import { Calendar, Clock, Users, Tag, BarChart, Link as LinkIcon } from 'lucide-react';

interface MeetingProps {
  title: string;
  date: string;
  time?: string;
  duration: string;
  participants: string[];
  summary: string;
  tags?: string[];
  relationships?: {
    source: string;
    target: string;
    description: string;
    keywords: string[];
    strength: number;
  }[];
  isWeeklySummary?: boolean;
  onClick?: () => void;
}

export function MeetingCard({
  title,
  date,
  time,
  duration,
  participants,
  summary,
  tags = [],
  relationships = [],
  isWeeklySummary = false,
  onClick
}: MeetingProps) {
  return (
    <div 
      className={`p-6 hover:bg-gray-700/50 transition-colors cursor-pointer ${
        isWeeklySummary ? 'bg-purple-900/20' : 'bg-gray-800/30'
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {isWeeklySummary ? (
            <BarChart className="w-5 h-5 text-purple-400" />
          ) : (
            <Calendar className="w-5 h-5 text-blue-400" />
          )}
          <div>
            <h4 className="text-lg font-semibold text-gray-200">{title}</h4>
            {time && (
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                <Clock className="w-4 h-4" />
                <span>{time}</span>
                <span className="mx-1">•</span>
                <span>{duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {summary && summary.trim().length > 0 && (
        <p className="text-gray-300 mb-4 whitespace-pre-line">{summary}</p>
      )}

      {relationships.length > 0 && (
        <div className="mb-4">
          <h5 className="text-sm font-semibold text-gray-300 flex items-center gap-1 mb-2">
            <LinkIcon className="w-4 h-4" /> Relationships
          </h5>
          <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
            {relationships.map((r, idx) => (
              <li key={idx}>
                <span className="text-gray-200 font-medium">{r.source}</span> → <span className="text-gray-200 font-medium">{r.target}</span>: {r.description} (strength: {r.strength})
              </li>
            ))}
          </ul>
        </div>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full text-sm font-medium flex items-center bg-gray-700 text-gray-300"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center"
              title={participant}
            >
              <span className="text-xs font-medium text-gray-300">
                {participant.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <Users className="w-4 h-4 mr-1" />
          {participants.length} participants
        </div>
      </div>
    </div>
  );
}
```

### src/components/Sidebar.tsx

```typescript
// src/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Upload, List, MessageSquare, Server } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 flex flex-col text-gray-100 border-r border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">Transcribio</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          <Upload className="w-4 h-4" />
          Upload
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          <List className="w-4 h-4" />
          History
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          <MessageSquare className="w-4 h-4" />
          Chat
        </NavLink>
        <NavLink
          to="/api-test"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          <Server className="w-4 h-4" />
          API Test
        </NavLink>
      </nav>
    </div>
  );
}
```

### src/components/SummaryViewer.tsx

```typescript
// src/components/SummaryViewer.tsx
import React from 'react';

interface SummaryViewerProps {
  summary: string;
}

export function SummaryViewer({ summary }: SummaryViewerProps) {
  const lines = summary.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  const recognizedSections = ["Action Items:", "Decisions:", "Timeline:", "Summary:", "Key Points:"];

  return (
    <div className="bg-gray-800 text-gray-200 rounded p-4 shadow space-y-2">
      <h2 className="text-lg font-semibold mb-2">Meeting Summary</h2>
      {lines.map((line, i) => {
        const isSectionTitle = recognizedSections.some(sec => line.toLowerCase().startsWith(sec.toLowerCase()));
        return (
          <div key={i}>
            {isSectionTitle ? (
              <h3 className="font-bold text-blue-400 mt-2">{line}</h3>
            ) : (
              <p className="text-sm text-gray-300 leading-relaxed">{line}</p>
            )}
          </div>
        );
      })}
      {lines.length === 0 && (
        <p className="text-sm text-gray-400 italic">No summary returned or summary is empty.</p>
      )}
    </div>
  );
}
```

### src/components/NodeSidebar.tsx

```typescript
// src/components/NodeSidebar.tsx
import React from 'react';
import { X } from 'lucide-react';
import { ProcessedNode, ProcessedLink } from '../types/graph';
import { NodeConnections } from './NodeConnections';

interface NodeSidebarProps {
  selectedNode: ProcessedNode | null;
  onClose: () => void;
  links: ProcessedLink[];
  nodes: ProcessedNode[];
  colorMap: Map<string, string>;
}

export const NodeSidebar: React.FC<NodeSidebarProps> = ({
  selectedNode,
  onClose,
  links,
  nodes,
  colorMap,
}) => {
  if (!selectedNode) {
    return (
      <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 text-white p-4 shadow-lg overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Node Sidebar</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-400">No node selected. Select a node from the graph.</p>
      </div>
    );
  }

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-gray-900 text-white p-6 shadow-lg transform transition-transform overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: colorMap.get(selectedNode.type) }}
          />
          <h2 className="text-xl font-bold">Node Details</h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm text-gray-400">Name</h3>
            <p className="text-lg">{selectedNode.name}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">Type</h3>
            <p className="text-lg capitalize">{selectedNode.type}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">Description</h3>
            <p className="text-lg">{selectedNode.description}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">Created</h3>
            <p className="text-lg">
              {new Date(selectedNode.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <NodeConnections
          node={selectedNode}
          links={links}
          nodes={nodes}
          colorMap={colorMap}
        />
      </div>
    </div>
  );
};
```

### src/components/TranscriptionControls/index.tsx

```typescript
// src/components/TranscriptionControls/index.tsx
import React from 'react';
import { toast } from 'sonner';
import { useTranscriptionStore } from '../../store/transcription';
import { exportTranscription } from '../../utils/export';
import { concatenateTextBlocks } from '../../utils/text/processing';
import { CopyButton } from './CopyButton';
import { ExportButton } from './ExportButton';
import type { ExportFormat } from '../../types';

const EXPORT_FORMATS = ['txt', 'md', 'pdf', 'docx', 'rtf'] as const;

export function TranscriptionControls() {
  const { transcription, status, speakerMap } = useTranscriptionStore();

  const handleCopy = async () => {
    if (!transcription) return;
    try {
      const processedBlocks = concatenateTextBlocks(transcription.transcription.speakers);
      const text = processedBlocks
        .map(block => `${speakerMap[block.speaker] || block.speaker}: ${block.text}`)
        .join('\n\n');

      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleExport = async (format: ExportFormat) => {
    if (!transcription) return;

    try {
      const processedBlocks = concatenateTextBlocks(transcription.transcription.speakers);
      await exportTranscription(
        format,
        {
          speakers: processedBlocks,
          speakerMap,
          text: transcription.transcription.text,
        },
        `transcription-${Date.now()}`
      );
      toast.success(`Exported as ${format.toUpperCase()}`);
    } catch (error) {
      toast.error(`Failed to export as ${format.toUpperCase()}`);
    }
  };

  if (status !== 'completed') return null;

  return (
    <div className="flex gap-4">
      <CopyButton onCopy={handleCopy} />
      <ExportButton onExport={handleExport} formats={EXPORT_FORMATS} />
    </div>
  );
}
```

### src/components/TranscriptionControls/ExportButton.tsx

```typescript
// src/components/TranscriptionControls/ExportButton.tsx
import React from 'react';
import { Download } from 'lucide-react';
import type { ExportFormat } from '../../types';

interface ExportButtonProps {
  onExport: (format: ExportFormat) => Promise<void>;
  formats: readonly ExportFormat[];
}

export function ExportButton({ onExport, formats }: ExportButtonProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 rounded-md hover:bg-gray-600">
        <Download className="w-4 h-4" />
        Export
      </button>
      <div className="absolute right-0 z-10 hidden w-48 mt-2 origin-top-right bg-gray-800 rounded-md shadow-lg border border-gray-700 group-hover:block">
        <div className="py-1">
          {formats.map((format) => (
            <button
              key={format}
              onClick={() => onExport(format)}
              className="block w-full px-4 py-2 text-sm text-left text-gray-200 hover:bg-gray-700"
            >
              Export as {format.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### src/components/TranscriptionControls/CopyButton.tsx

```typescript
// src/components/TranscriptionControls/CopyButton.tsx
import React from 'react';
import { Copy } from 'lucide-react';

interface CopyButtonProps {
  onCopy: () => Promise<void>;
}

export function CopyButton({ onCopy }: CopyButtonProps) {
  return (
    <button
      onClick={onCopy}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-600"
    >
      <Copy className="w-4 h-4" />
      Copy
    </button>
  );
}
```

### src/components/FileUpload/index.tsx

```typescript
import React, { useCallback } from 'react';
import { toast } from 'sonner';
import { useTranscriptionStore } from '../../store/transcription';
import { useTranscriptionUpload } from '../../hooks/useTranscriptionUpload';
import { AUDIO_CONFIG } from '../../config/audio';
import { DropZone } from './DropZone';
import { UploadProgress } from './UploadProgress';
import { logger } from '../../utils/logger';

interface FileUploadProps {
  onDataLoad?: (data: any) => void; // Make this optional if not always needed
}

export function FileUpload({ onDataLoad }: FileUploadProps) {
  const { setFile, status } = useTranscriptionStore();
  const { upload, uploadProgress, cancel } = useTranscriptionUpload();

  const handleFile = useCallback(async (selectedFile: File) => {
    if (!selectedFile) return;

    const fileName = selectedFile.name.toLowerCase();
    if (fileName.endsWith('.json') && onDataLoad) {
      // Handle JSON file scenario
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result;
          if (typeof result === 'string') {
            const data = JSON.parse(result);
            onDataLoad(data);
          } else {
            toast.error('Invalid file content.');
          }
        } catch (err) {
          toast.error('Failed to parse JSON file.');
        }
      };
      reader.readAsText(selectedFile);
      return;
    }

    // Otherwise, handle audio upload
    logger.debug('File selected', {
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type
    });

    setFile(selectedFile);
    try {
      await upload(selectedFile);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Upload failed';
      logger.error('File upload failed', error instanceof Error ? error : new Error(message));
      toast.error(message);
    }
  }, [setFile, upload, onDataLoad]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  }, [handleFile]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  }, [handleFile]);

  const acceptedTypes = Object.entries(AUDIO_CONFIG.FORMATS)
    .flatMap(([mime, exts]) => [mime, ...exts])
    .concat('.json') // Add json if you want to allow json uploads
    .join(',');

  const showProgress = ['uploading', 'requesting-transcription', 'generating-url'].includes(status);

  return (
    <div className="space-y-4">
      <DropZone
        onDrop={handleDrop}
        onFileSelect={handleFileSelect}
        acceptedTypes={acceptedTypes}
        isUploading={showProgress}
      />
      
      {showProgress && (
        <UploadProgress
          progress={uploadProgress}
          status={status}
          onCancel={cancel}
        />
      )}
    </div>
  );
}
```

### src/components/FileUpload/DropZone.tsx

```typescript
// src/components/FileUpload/DropZone.tsx
import React from 'react';
import { Upload } from 'lucide-react';
import { formatFileSize } from '../../utils/format';
import { AUDIO_CONFIG } from '../../config/audio';

interface DropZoneProps {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  acceptedTypes: string;
  isUploading: boolean;
}

export function DropZone({ onDrop, onFileSelect, acceptedTypes, isUploading }: DropZoneProps) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      className="p-8 border-2 border-dashed rounded-lg text-center bg-gray-800 border-gray-700 text-gray-200"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <div className="mt-4">
        <label htmlFor="file-upload" className="cursor-pointer">
          <span className="text-blue-400 hover:text-blue-300">Upload a file</span>
          <input
            id="file-upload"
            type="file"
            className="sr-only"
            accept={acceptedTypes}
            onChange={onFileSelect}
            disabled={isUploading}
          />
        </label>
        <p className="mt-1 text-sm text-gray-400">or drag and drop</p>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        Maximum file size: {formatFileSize(AUDIO_CONFIG.MAX_FILE_SIZE)}
      </p>
    </div>
  );
}
```

### src/components/FileUpload/UploadProgress.tsx

```typescript
// src/components/FileUpload/UploadProgress.tsx
import React from 'react';
import { X, Loader2 } from 'lucide-react';
import type { ProcessStatus } from '../../types';

interface UploadProgressProps {
  progress: number;
  status: ProcessStatus;
  onCancel: () => void;
}

export function UploadProgress({ 
  progress, 
  status,
  onCancel 
}: UploadProgressProps) {
  const showProgress = status === 'uploading';
  const progressValue = Math.min(100, Math.max(0, progress));

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 text-gray-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
          {showProgress && (
            <span className="text-sm font-medium">
              Uploading... {Math.round(progressValue)}%
            </span>
          )}
          {!showProgress && (
            <span className="text-sm font-medium">
              Processing...
            </span>
          )}
        </div>
        <button
          onClick={onCancel}
          className="p-1 hover:bg-gray-600 rounded-full transition-colors"
          aria-label="Cancel upload"
        >
          <X className="w-4 h-4 text-gray-300" />
        </button>
      </div>
      {showProgress && (
        <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progressValue}%` }}
          />
        </div>
      )}
    </div>
  );
}
```

### src/components/calendar/WeekHeader.tsx

```typescript
// src/components/calendar/WeekHeader.tsx
import React from 'react';
import { format, eachDayOfInterval } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WeekHeaderProps {
  week: {
    start: Date;
    end: Date;
  };
}

export function WeekHeader({ week }: WeekHeaderProps) {
  const days = eachDayOfInterval({ start: week.start, end: week.end });

  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">
          {format(week.start, 'MMMM d')} - {format(week.end, 'MMMM d, yyyy')}
        </h3>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {days.map((day: Date) => (
          <div key={day.toString()} className="text-center">
            <div className="text-sm font-medium text-gray-400 mb-1">
              {format(day, 'EEE')}
            </div>
            <div className={`text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mx-auto ${
              format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
                ? 'bg-blue-500 text-white'
                : 'text-white'
            }`}>
              {format(day, 'd')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### src/components/calendar/FilterDropdown.tsx

```typescript
// src/components/calendar/FilterDropdown.tsx
import React, { useState } from 'react';
import { Filter, Tag, Clock, Users } from 'lucide-react';

interface FilterDropdownProps {
  onToggle: () => void;
  isOpen: boolean;
}

const ALL_TAGS = ["Planning", "Q1", "Budget", "Design", "Product", "UI", "Team", "Sync", "Weekly Summary"];

export function FilterDropdown({ onToggle, isOpen }: FilterDropdownProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [duration, setDuration] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>([]);

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
      >
        <Filter size={20} />
        <span>Filters</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-white mb-3">
                <Tag size={16} />
                <h4 className="font-medium">Tags</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTags(prev => 
                      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                    )}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white mb-3">
                <Clock size={16} />
                <h4 className="font-medium">Duration</h4>
              </div>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Any duration</option>
                <option value="short">Under 30 minutes</option>
                <option value="medium">30-60 minutes</option>
                <option value="long">Over 60 minutes</option>
              </select>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white mb-3">
                <Users size={16} />
                <h4 className="font-medium">Participants</h4>
              </div>
              <input
                type="text"
                placeholder="Search participants..."
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```

### src/components/TranscriptionViewer/index.tsx

```typescript
// src/components/TranscriptionViewer/index.tsx
import React, { useState, useMemo } from 'react';
import { useTranscriptionStore } from '../../store/transcription';
import { TranscriptionHeader } from './TranscriptionHeader';
import { SpeakerEntry } from './SpeakerEntry';
import { concatenateTextBlocks } from '../../utils/text/processing';
import { logger } from '../../utils/logger/core';

export function TranscriptionViewer() {
  const { transcription, speakerMap, setSpeakerName } = useTranscriptionStore();
  const [showTimestamps, setShowTimestamps] = useState(true);
  const [editingSpeaker, setEditingSpeaker] = useState<string | null>(null);

  const processedBlocks = useMemo(() => {
    if (!transcription?.transcription.speakers) {
      return [];
    }

    logger.debug('Processing transcription blocks');
    return concatenateTextBlocks(transcription.transcription.speakers);
  }, [transcription]);

  if (!transcription) return null;

  const handleSpeakerEdit = (speaker: string, newName: string) => {
    if (newName.trim()) {
      setSpeakerName(speaker, newName.trim());
    }
    setEditingSpeaker(null);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow text-gray-200">
      <TranscriptionHeader
        showTimestamps={showTimestamps}
        onToggleTimestamps={setShowTimestamps}
      />
      <div className="p-4 space-y-4">
        {processedBlocks.map((block) => (
          <SpeakerEntry
            key={block.originalIndexes[0]}
            entry={block}
            speakerName={speakerMap[block.speaker] || block.speaker}
            showTimestamps={showTimestamps}
            isEditing={editingSpeaker === block.speaker}
            onEdit={() => setEditingSpeaker(block.speaker)}
            onSave={(name) => handleSpeakerEdit(block.speaker, name)}
          />
        ))}
      </div>
    </div>
  );
}
```

### src/components/TranscriptionViewer/TranscriptionHeader.tsx

```typescript
// src/components/TranscriptionViewer/TranscriptionHeader.tsx
import React from 'react';

interface TranscriptionHeaderProps {
  showTimestamps: boolean;
  onToggleTimestamps: (show: boolean) => void;
}

export function TranscriptionHeader({ 
  showTimestamps, 
  onToggleTimestamps 
}: TranscriptionHeaderProps) {
  return (
    <div className="p-4 border-b border-gray-700">
      <div className="flex items-center justify-between text-gray-200">
        <h2 className="text-lg font-semibold">Transcription</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showTimestamps}
            onChange={(e) => onToggleTimestamps(e.target.checked)}
            className="rounded border-gray-600 bg-gray-800 text-blue-400 focus:ring-1 focus:ring-blue-400"
          />
          <span className="text-sm text-gray-300">Show timestamps</span>
        </label>
      </div>
    </div>
  );
}
```

### src/components/TranscriptionViewer/SpeakerEntry.tsx

```typescript
// src/components/TranscriptionViewer/SpeakerEntry.tsx
import React from 'react';
import { User, Edit2, Clock } from 'lucide-react';
import { formatTimestamp } from '../../utils/format';
import type { ProcessedBlock } from '../../utils/text/processing';

interface SpeakerEntryProps {
  entry: ProcessedBlock;
  speakerName: string;
  showTimestamps: boolean;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (name: string) => void;
}

export function SpeakerEntry({
  entry,
  speakerName,
  showTimestamps,
  isEditing,
  onEdit,
  onSave,
}: SpeakerEntryProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-32">
        <div className="flex items-center gap-2 text-gray-200">
          <User className="w-4 h-4 text-gray-400" />
          {isEditing ? (
            <input
              type="text"
              defaultValue={speakerName}
              className="w-full px-2 py-1 text-sm border border-gray-600 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
              onBlur={(e) => onSave(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSave(e.currentTarget.value);
                }
              }}
              autoFocus
            />
          ) : (
            <button
              onClick={onEdit}
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-blue-400"
            >
              <span>{speakerName}</span>
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        {showTimestamps && (
          <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            <span>
              {formatTimestamp(entry.timestamp[0])} - {formatTimestamp(entry.timestamp[1])}
            </span>
          </div>
        )}
      </div>
      <p className="flex-1 text-gray-200">{entry.text}</p>
    </div>
  );
}
```

### src/components/TranscriptionViewer/TranscriptionStats.tsx

```typescript
import React from 'react';
import { Clock, Users, MessageSquare } from 'lucide-react';
import { formatDuration } from '../../utils/format';
import type { ProcessedTranscription } from '../../services/transcription/processing';

interface TranscriptionStatsProps {
  stats: ProcessedTranscription;
}

export function TranscriptionStats({ stats }: TranscriptionStatsProps) {
  const totalWords = Object.values(stats.speakerStats).reduce(
    (sum, speaker) => sum + speaker.wordCount,
    0
  );

  const speakerCount = Object.keys(stats.speakerStats).length;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="flex items-center gap-2 text-gray-600">
        <Clock className="w-4 h-4" />
        <span className="text-sm">Duration: {formatDuration(stats.duration)}</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-600">
        <Users className="w-4 h-4" />
        <span className="text-sm">Speakers: {speakerCount}</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-600">
        <MessageSquare className="w-4 h-4" />
        <span className="text-sm">Words: {totalWords}</span>
      </div>
    </div>
  );
}
```

### src/components/controls/FilterPanel.tsx

```typescript
import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface KeywordCount {
  keyword: string;
  count: number;
}

interface FilterPanelProps {
  categories: string[];
  keywords: KeywordCount[];
  selectedCategories: string[];
  selectedKeywords: string[];
  onCategoryChange: (category: string) => void;
  onKeywordChange: (keyword: string) => void;
  colorMap: Map<string, string>;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  categories,
  keywords,
  selectedCategories,
  selectedKeywords,
  onCategoryChange,
  onKeywordChange,
  colorMap,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllKeywords, setShowAllKeywords] = useState(false);

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 8);
  const visibleKeywords = showAllKeywords ? keywords : keywords.slice(0, 8);

  return (
    <div className="absolute left-4 top-4 bg-gray-900 rounded-lg p-4 w-64 shadow-lg max-h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-4 h-4" />
        <h3 className="font-semibold">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-gray-400 mb-2">Categories</h4>
          <div className="space-y-2">
            {visibleCategories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryChange(category)}
                  className="rounded border-gray-600"
                />
                <span className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorMap.get(category) }}
                  />
                  <span className="text-sm capitalize">{category}</span>
                </span>
              </label>
            ))}
          </div>
          {categories.length > 8 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="flex items-center space-x-1 text-sm text-gray-400 mt-2 hover:text-gray-300"
            >
              <span>{showAllCategories ? 'Show Less' : `Show ${categories.length - 8} More`}</span>
              {showAllCategories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>

        <div>
          <h4 className="text-sm text-gray-400 mb-2">Keywords</h4>
          <div className="space-y-2">
            {visibleKeywords.map(({ keyword, count }) => (
              <label key={keyword} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedKeywords.includes(keyword)}
                    onChange={() => onKeywordChange(keyword)}
                    className="rounded border-gray-600"
                  />
                  <span className="text-sm">{keyword}</span>
                </div>
                <span className="text-xs text-gray-400">{count}</span>
              </label>
            ))}
          </div>
          {keywords.length > 8 && (
            <button
              onClick={() => setShowAllKeywords(!showAllKeywords)}
              className="flex items-center space-x-1 text-sm text-gray-400 mt-2 hover:text-gray-300"
            >
              <span>{showAllKeywords ? 'Show Less' : `Show ${keywords.length - 8} More`}</span>
              {showAllKeywords ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
```

### src/components/controls/TopEntitiesPanel.tsx

```typescript
import React, { useMemo } from 'react';
import { BarChart2 } from 'lucide-react';
import { ProcessedNode } from '../../types/graph';

interface TopEntitiesPanelProps {
  nodes: ProcessedNode[];
  colorMap: Map<string, string>;
  onNodeSelect: (node: ProcessedNode) => void;
}

export const TopEntitiesPanel: React.FC<TopEntitiesPanelProps> = ({
  nodes,
  colorMap,
  onNodeSelect,
}) => {
  const { topNodes, topCategories } = useMemo(() => {
    const sortedNodes = [...nodes]
      .sort((a, b) => b.connections - a.connections)
      .slice(0, 10);

    const categoryStats = nodes.reduce((acc, node) => {
      acc[node.type] = (acc[node.type] || 0) + node.connections;
      return acc;
    }, {} as Record<string, number>);

    const sortedCategories = Object.entries(categoryStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([category, connections]) => ({ category, connections }));

    return {
      topNodes: sortedNodes,
      topCategories: sortedCategories,
    };
  }, [nodes]);

  return (
    <div className="absolute left-4 bottom-4 bg-gray-900 rounded-lg p-4 w-[400px] shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <BarChart2 className="w-4 h-4" />
        <h3 className="font-semibold">Top Entities & Categories</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm text-gray-400 mb-2">Most Connected Entities</h4>
          <div className="space-y-2">
            {topNodes.map((node) => (
              <button
                key={node.id}
                onClick={() => onNodeSelect(node)}
                className="w-full text-left p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: colorMap.get(node.type) }}
                    />
                    <span className="text-sm truncate max-w-[120px]">{node.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{node.connections}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm text-gray-400 mb-2">Top Categories</h4>
          <div className="space-y-2">
            {topCategories.map(({ category, connections }) => (
              <div
                key={category}
                className="flex items-center justify-between p-2"
              >
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorMap.get(category) }}
                  />
                  <span className="text-sm capitalize truncate max-w-[120px]">{category}</span>
                </div>
                <span className="text-sm text-gray-400">{connections}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
```

### src/hooks/useProcessStatus.ts

```typescript
import React, { useState, useCallback } from 'react';
import { logStatusChange, logProcessStep } from '../utils/logger/status';
import { PROCESS_STEPS } from '../config/constants';
import type { ProcessStatus, ProcessError } from '../types';

interface ProcessState {
  status: ProcessStatus;
  error: ProcessError | null;
  progress: number;
}

export function useProcessStatus(initialStatus: ProcessStatus = 'idle') {
  const [state, setState] = useState<ProcessState>({
    status: initialStatus,
    error: null,
    progress: 0
  });

  const setStatus = useCallback((newStatus: ProcessStatus) => {
    setState((prev: ProcessState) => {
      logStatusChange(prev.status, newStatus);
      return { ...prev, status: newStatus };
    });
  }, []);

  const setError = useCallback((error: ProcessError | null) => {
    setState((prev: ProcessState) => ({ ...prev, error }));
  }, []);

  const setProgress = useCallback((progress: number) => {
    setState((prev: ProcessState) => ({ ...prev, progress }));
  }, []);

  const reset = useCallback(() => {
    setState({
      status: 'idle',
      error: null,
      progress: 0
    });
  }, []);

  const startProcess = useCallback((step: keyof typeof PROCESS_STEPS) => {
    logProcessStep(step, 'start');
    setStatus('processing');
  }, [setStatus]);

  const completeProcess = useCallback((step: keyof typeof PROCESS_STEPS) => {
    logProcessStep(step, 'success');
    setStatus('completed');
  }, [setStatus]);

  const failProcess = useCallback((step: keyof typeof PROCESS_STEPS, error: Error | string) => {
    const processError: ProcessError = {
      code: `${step}_ERROR`,
      message: error instanceof Error ? error.message : error
    };
    logProcessStep(step, 'error', { error: processError });
    setError(processError);
    setStatus('error');
  }, [setError, setStatus]);

  return {
    ...state,
    setStatus,
    setError,
    setProgress,
    reset,
    startProcess,
    completeProcess,
    failProcess
  };
}

```

### src/hooks/useTranscriptionUpload.ts

```typescript
// src/hooks/useTranscriptionUpload.ts
import { useState, useCallback, useRef, useEffect } from 'react';
import { useTranscriptionStore } from '../store/transcription';
import { generateUploadUrl, uploadFile } from '../services/api/upload';
import { requestTranscription } from '../services/api/transcription';
import { logger } from '../utils/logger';
import { ENV } from '../config/env';
import type { ProcessError } from '../types';

export function useTranscriptionUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const { setStatus, setError, setFileId, setTranscription, setKnowledgeGraph, setSummary } = useTranscriptionStore();
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      logger.debug('Cleaning up upload resources');
      abortControllerRef.current?.abort();
    };
  }, []);

  const cancel = useCallback(async () => {
    logger.info('Cancelling upload process');
    abortControllerRef.current?.abort();
    setStatus('idle');
    setError(null);
    setUploadProgress(0);
  }, [setStatus, setError]);

  const upload = useCallback(async (file: File) => {
    logger.info('Starting upload process', { 
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    });

    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    const signal = abortController.signal;

    try {
      setStatus('generating-url');
      setError(null);
      setUploadProgress(0);

      logger.debug('Requesting upload URL from primary API');
      const { upload_url, file_id } = await generateUploadUrl(file.name, signal);
      logger.debug('Received upload URL and file_id', { file_id });
      setFileId(file_id);

      setStatus('uploading');
      logger.debug('Uploading file to signed URL');
      await uploadFile(upload_url, file, {
        signal,
        onProgress: (progress) => {
          setUploadProgress(progress.percentage);
          logger.debug('Upload progress event', { progress: progress.percentage });
        }
      });

      setStatus('requesting-transcription');
      logger.debug('Requesting transcription from primary API');
      const transcriptionData = await requestTranscription(file_id, signal);

      if (!transcriptionData?.transcription?.speakers || !transcriptionData?.transcription?.chunks || !transcriptionData?.transcription?.text) {
        throw new Error('Invalid transcription response structure.');
      }

      logger.info('Transcription retrieved successfully', {
        speakerCount: transcriptionData.transcription.speakers.length,
        textLength: transcriptionData.transcription.text.length
      });

      setTranscription(transcriptionData);
      setStatus('completed');

      if (transcriptionData.transcription.text) {
        const text = transcriptionData.transcription.text;
        logger.debug('Starting entity extraction process with secondary API', {
          textLength: text.length,
          endpoint: `${ENV.API_URL_SECONDARY}/entity_map_new`
        });

        const emResp = await fetch(`${ENV.API_URL_SECONDARY}/entity_map_new`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': ENV.API_KEY_SECONDARY || ENV.API_KEY
          },
          body: JSON.stringify({ text }),
          signal
        });

        if (!emResp.ok) {
          const errorText = await emResp.text();
          logger.error('Entity map request failed', new Error('Entity map request failed'), { response: errorText });
          throw new Error(`Entity map request failed: ${errorText}`);
        }

        const entity_map_data = await emResp.json();
        logger.info('Entity map retrieved successfully', { 
          entityCount: entity_map_data?.graph?.entities?.length || 0,
          relationshipCount: entity_map_data?.graph?.relationships?.length || 0
        });

        const graph = entity_map_data.graph || { entities: [], relationships: [] };
        const kg = {
          entities: graph.entities || [],
          relationships: graph.relationships || []
        };

        setKnowledgeGraph(kg);

        logger.debug('Starting summarization with secondary API', {
          textLength: text.length,
          entityCount: kg.entities?.length || 0,
          relationshipCount: kg.relationships?.length || 0,
          endpoint: `${ENV.API_URL_SECONDARY}/summarize`
        });

        const summarizePayload = {
          text,
          knowledge_graph: kg,
          system_prompt: "You are an expert assistant skilled at converting raw meeting transcripts into meeting minutes. Include the extracted entities and relationships to produce a coherent summary."
        };

        const summarizeResp = await fetch(`${ENV.API_URL_SECONDARY}/summarize`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': ENV.API_KEY_SECONDARY || ENV.API_KEY
          },
          body: JSON.stringify(summarizePayload),
          signal
        });

        if (!summarizeResp.ok) {
          const errorText = await summarizeResp.text();
          logger.error('Summarization request failed', new Error('Summarization request failed'), { response: errorText });
          throw new Error(`Summarization request failed: ${errorText}`);
        }

        const summaryData = await summarizeResp.json();
        const summary = summaryData.summary || "No summary returned.";
        logger.info('Summarization completed successfully', { summaryLength: summary.length });

        setSummary(summary);

        logger.info('All processes (upload, transcription, entity extraction, summarization) completed successfully', { file_id });
      } else {
        logger.warn('No transcription text found, skipping entity extraction and summarization');
      }

    } catch (error) {
      if (signal.aborted) {
        logger.info('Operation cancelled by user');
        setStatus('idle');
        return;
      }

      const processError: ProcessError = {
        code: 'UPLOAD_ERROR',
        message: error instanceof Error ? error.message : 'Upload failed',
        details: { fileName: file.name }
      };
      
      logger.error('Upload process failed', error instanceof Error ? error : new Error(processError.message), {
        fileName: file.name
      });
      
      setStatus('error');
      setError(processError);
    } finally {
      setUploadProgress(0);
      abortControllerRef.current = null;
    }
  }, [setStatus, setError, setFileId, setTranscription, setKnowledgeGraph, setSummary]);

  return { 
    upload, 
    uploadProgress,
    cancel 
  };
}
```

### src/pages/UploadPage.tsx

```typescript
// src/pages/UploadPage.tsx
import React from 'react';
import { Toaster } from 'sonner';
import { FileUpload } from '../components/FileUpload';
import { ProcessStatus } from '../components/ProcessStatus';
import { TranscriptionControls } from '../components/TranscriptionControls';
import { TranscriptionViewer } from '../components/TranscriptionViewer';
import { DebugPanel } from '../components/DebugPanel';
import { useTranscriptionStore } from '../store/transcription';

export function UploadPage() {
  const { status, error } = useTranscriptionStore();

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Upload your Audio</h1>
        <p className="mt-2 text-gray-400">
          Easily upload audio files and transcribe them.
        </p>
      </header>
      <main className="space-y-8">
        <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
          <FileUpload />
        </div>

        {(status !== 'idle' && status !== 'completed') && (
          <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
            <ProcessStatus status={status} />
            {error && (
              <div className="mt-2 text-sm text-red-400">
                {error.message}
              </div>
            )}
          </div>
        )}

        {status === 'completed' && (
          <>
            <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
              <TranscriptionControls />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
              <TranscriptionViewer />
            </div>
          </>
        )}
      </main>
      <Toaster position="top-right" />
      <DebugPanel />
    </div>
  );
}

```

### src/pages/MeetingHistory.tsx

```typescript
// src/pages/MeetingHistory.tsx
import React, { useState } from 'react';
import { Search, Calendar, Filter, ChevronDown, ChevronRight, Clock } from 'lucide-react';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import { MeetingCard } from '../components/MeetingCard';
import { WeekHeader } from '../components/calendar/WeekHeader';
import { FilterDropdown } from '../components/calendar/FilterDropdown';
import { useTranscriptionStore } from '../store/transcription';
import { logger } from '../utils/logger/core';
import { EntitySummaryModal } from '../components/EntitySummaryModal';

export function MeetingHistory() {
  logger.debug('Rendering MeetingHistory page');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedDates, setExpandedDates] = useState<string[]>(['Today']);
  const [currentWeek, setCurrentWeek] = useState({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date())
  });

  const { summary, knowledgeGraph } = useTranscriptionStore();
  const [showModal, setShowModal] = useState(false);

  let meetingsByDate: Record<string, any[]> = {};

  // If we have a transcription summary and KG, let's show a "Transcribed Meeting"
  if (summary) {
    const entityTags = knowledgeGraph?.entities.map(e => e.name) || [];
    const relationships = knowledgeGraph?.relationships || [];
    meetingsByDate['Today'] = [{
      id: 'meeting-1',
      title: "Transcribed Meeting",
      date: format(new Date(), 'yyyy-MM-dd'),
      time: "9:00 AM",
      duration: "45m",
      participants: ["John Doe", "Jane Smith"],
      summary: summary,
      tags: entityTags,
      relationships: relationships
    }];
  }

  const filteredMeetings = Object.entries(meetingsByDate).reduce((acc, [date, meetings]) => {
    const filtered = meetings.filter(m => {
      const combinedText = `${m.title} ${m.summary} ${(m.tags || []).join(' ')} ${m.participants.join(' ')}`;
      return combinedText.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (filtered.length > 0) {
      acc[date] = filtered;
    }
    return acc;
  }, {} as Record<string, any[]>);

  const toggleDate = (date: string) => {
    logger.debug('Toggling date expansion', { date });
    setExpandedDates(prev => 
      prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="sticky top-0 bg-gray-900 z-10 pb-6">
        <header className="mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Meeting History</h2>
              <p className="text-gray-400">Browse and search through your past meetings</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search meetings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 bg-gray-800 text-gray-200 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <FilterDropdown onToggle={() => setShowFilters(!showFilters)} isOpen={showFilters} />
            </div>
          </div>

          <WeekHeader week={currentWeek} />
        </header>
      </div>

      {/* If summary and knowledgeGraph exist, show a button to view Entity Summary */}
      {summary && knowledgeGraph && (
        <div className="mb-4 flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
          >
            View Summary &amp; Entities
          </button>
        </div>
      )}

      <div className="space-y-4">
        {Object.keys(filteredMeetings).length === 0 && (
          <div className="text-gray-300 bg-gray-800 p-4 rounded-md">
            No meetings found. Process a file to see results here.
          </div>
        )}

        {Object.entries(filteredMeetings).map(([date, meetings]) => (
          <div key={date} className="bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700">
            <button
              onClick={() => toggleDate(date)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700 transition-colors text-gray-200"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="font-medium text-gray-200">{date}</span>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>
                    {meetings.reduce((acc, m: any) => {
                      return acc + 45; 
                    }, 0)} min
                  </span>
                  <span className="mx-2">•</span>
                  <span>{meetings.length} {meetings.length === 1 ? 'meeting' : 'meetings'}</span>
                </div>
              </div>
              {expandedDates.includes(date) ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedDates.includes(date) && (
              <div className="divide-y divide-gray-700/50">
                {meetings.map((meeting: any) => (
                  <MeetingCard
                    key={meeting.id}
                    {...meeting}
                    onClick={() => logger.info('Meeting card clicked', { meetingId: meeting.id })}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {summary && knowledgeGraph && (
        <EntitySummaryModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          summary={summary}
          knowledgeGraph={knowledgeGraph}
        />
      )}
    </div>
  );
}

```

### src/pages/APITestPage.tsx

```typescript
// src/pages/APITestPage.tsx
import React, { useState, useMemo } from 'react';
import { ENV } from '../config/env';
import { logger } from '../utils/logger/index';
import { toast } from 'sonner';
import { SummaryViewer } from '../components/SummaryViewer';
import { processGraphData } from '../utils/processGraphData';
import { getEntityColorMap } from '../utils/entityColors';
import { Graph } from '../components/Graph';
import { Sidebar } from '../components/Sidebar';
import type { ProcessedNode, ProcessedLink } from '../types/graph';

export function APITestPage() {
  const [testText, setTestText] = useState("This is a sample meeting text about Product and Budget.");
  const [graphData, setGraphData] = useState<{entities: any[], relationships: any[]}|null>(null);
  const [summaryText, setSummaryText] = useState<string>('');
  const [entityError, setEntityError] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<ProcessedNode | null>(null);
  
  const apiKey = ENV.API_KEY_SECONDARY || ENV.API_KEY;
  const secondaryUrl = ENV.API_URL_SECONDARY;

  const testEntityMap = async () => {
    logger.info('Testing entity map API', { textLength: testText.length });
    if (!apiKey || !secondaryUrl) {
      toast.error('Missing API key or secondary URL. Check logs.');
      logger.error('Entity map test aborted due to missing keys or URL.', new Error('Missing keys or URL'));
      return;
    }

    try {
      const resp = await fetch(`${secondaryUrl}/entity_map_new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify({ text: testText })
      });

      if (!resp.ok) {
        const errorText = await resp.text();
        logger.error('Entity map request failed', new Error('Entity map request failed'), { response: errorText });
        toast.error(`Entity map failed: ${errorText}`);
        setEntityError(`Failed with status ${resp.status}: ${errorText}`);
        return;
      }

      const data = await resp.json();
      logger.info('Entity map success', data);

      const { graph } = data;
      if (!graph || !Array.isArray(graph.entities) || !Array.isArray(graph.relationships)) {
        logger.error('Entity map schema mismatch', new Error('Invalid graph structure'), { data });
        toast.error('Entity map schema mismatch. Check logs.');
        setEntityError('Schema mismatch: graph.entities or graph.relationships missing.');
        return;
      }

      if (graph.entities.length === 0 && graph.relationships.length === 0) {
        logger.warn('Entity map returned empty entities and relationships', { data });
        toast('Entity map is empty, nothing to visualize.');
      }

      setGraphData({ entities: graph.entities, relationships: graph.relationships });
      toast.success('Entity map success! Visualization ready.');
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      logger.error('Entity map request error', errObj);
      toast.error('Entity map request error. Check logs.');
      setEntityError(errObj.message);
    }
  };

  const testSummarize = async () => {
    logger.info('Testing summarization API', { textLength: testText.length });
    if (!apiKey || !secondaryUrl) {
      toast.error('Missing API key or secondary URL. Check logs.');
      logger.error('Summarization test aborted due to missing keys or URL.', new Error('Missing keys or URL'));
      return;
    }

    try {
      const summarizePayload = {
        text: testText,
        knowledge_graph: { entities: [], relationships: [] },
        system_prompt: "You are an expert assistant skilled at converting raw meeting transcripts into structured meeting minutes. Include extracted entities."
      };

      const resp = await fetch(`${secondaryUrl}/summarize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify(summarizePayload)
      });

      if (!resp.ok) {
        const errorText = await resp.text();
        logger.error('Summarization request failed', new Error('Summarization request failed'), { response: errorText });
        toast.error(`Summarization failed: ${errorText}`);
        return;
      }

      const data = await resp.json();
      logger.info('Summarization success', data);
      const summary = data.summary || 'No summary returned.';
      setSummaryText(summary);
      toast.success('Summarization success! Check logs and visualization.');
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      logger.error('Summarization request error', errObj);
      toast.error('Summarization request error. Check logs.');
    }
  };

  let processedData: { nodes: ProcessedNode[], links: ProcessedLink[] } | null = null;
  if (graphData) {
    const processed = processGraphData({
      graph: {
        entities: graphData.entities.map(e => ({
          ...e,
          meeting_id: 'unknown',
          created_at: Date.now()
        })),
        relationships: graphData.relationships.map(r => ({
          ...r,
          meeting_id: 'unknown',
          created_at: Date.now()
        }))
      }
    });
    processedData = processed;
  }

  const colorMap = useMemo(() => {
    if (!processedData) return new Map();
    return getEntityColorMap(processedData.nodes);
  }, [processedData]);

  return (
    <div className="max-w-4xl mx-auto space-y-4 text-gray-200">
      <h1 className="text-3xl font-bold text-white">API Test Page</h1>
      <p className="text-gray-400">Enter some text and test the secondary APIs</p>

      <textarea
        className="w-full h-32 p-2 bg-gray-800 text-gray-200 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={testText}
        onChange={(e) => setTestText(e.target.value)}
      />

      <div className="flex gap-4">
        <button
          onClick={testEntityMap}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          Test Entity Map
        </button>
        <button
          onClick={testSummarize}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
        >
          Test Summarize
        </button>
      </div>

      {!apiKey && (
        <div className="text-red-400 text-sm mt-4">
          Warning: No API Key found. Please set VITE_API_KEY or VITE_API_KEY_SECONDARY.
        </div>
      )}
      {!secondaryUrl && (
        <div className="text-red-400 text-sm mt-2">
          Warning: No secondary URL found. Please set VITE_API_URL_SECONDARY.
        </div>
      )}

      {summaryText && (
        <SummaryViewer summary={summaryText} />
      )}

      {entityError && (
        <div className="bg-red-800 text-white p-4 rounded">
          <h2 className="font-bold mb-2">Entity Map Error</h2>
          <p className="text-sm">{entityError}</p>
          <p className="text-xs mt-2">Check debug panel for more details.</p>
        </div>
      )}

      {processedData && !entityError && (
        processedData.nodes.length > 0 || processedData.links.length > 0 ? (
          <div className="relative w-full h-[600px] bg-gray-900 rounded-lg p-4">
            <Graph
              nodes={processedData.nodes}
              links={processedData.links}
              onNodeClick={setSelectedNode}
              colorMap={colorMap}
              selectedNode={selectedNode}
            />
            <Sidebar
              selectedNode={selectedNode}
              onClose={() => setSelectedNode(null)}
              links={processedData.links}
              nodes={processedData.nodes}
              colorMap={colorMap}
            />
          </div>
        ) : (
          <div className="bg-gray-700 p-4 rounded text-white">
            <h2 className="font-semibold mb-2">No Entities/Relationships to Show</h2>
            <p className="text-sm">The entity map is empty. Check logs or try different text.</p>
          </div>
        )
      )}
    </div>
  );
}
```

### src/pages/ChatPage.tsx

```typescript
// src/pages/ChatPage.tsx
import React from 'react';

export function ChatPage() {
  return (
    <div className="max-w-4xl mx-auto text-gray-200">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Chat with Your Meetings</h1>
        <p className="mt-2 text-gray-400">
          Interact with past meeting transcriptions and summaries.
        </p>
      </header>
      <main className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-300">User: Hi, can you summarize my last meeting?</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-300">Bot: Sure, your last meeting was about...</p>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </main>
    </div>
  );
}
```

### src/services/.DS_Store

Error reading file.

### src/services/transcription/validation.ts

```typescript
import { logger } from '../../utils/logger';
import type { TranscriptionResponse } from '../../types';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateTranscriptionResponse(
  response: TranscriptionResponse
): ValidationResult {
  logger.debug('Validating transcription response', {
    speakerCount: response.transcription.speakers.length,
    hasText: !!response.transcription.text
  });

  if (!response.transcription) {
    return {
      isValid: false,
      error: 'Invalid transcription response: missing transcription data'
    };
  }

  if (!Array.isArray(response.transcription.speakers)) {
    return {
      isValid: false,
      error: 'Invalid transcription response: missing speakers data'
    };
  }

  if (!response.transcription.text) {
    return {
      isValid: false,
      error: 'Invalid transcription response: missing text content'
    };
  }

  // Validate individual speaker entries
  for (const speaker of response.transcription.speakers) {
    if (!speaker.speaker || !speaker.text || !Array.isArray(speaker.timestamp)) {
      return {
        isValid: false,
        error: 'Invalid speaker entry in transcription'
      };
    }
  }

  logger.debug('Transcription response validation successful');
  return { isValid: true };
}
```

### src/services/transcription/processing.ts

```typescript
import { logger } from '../../utils/logger';
import type { TranscriptionResponse, Speaker } from '../../types';

export interface ProcessedTranscription {
  speakers: Speaker[];
  text: string;
  duration: number;
  speakerStats: {
    [speaker: string]: {
      wordCount: number;
      duration: number;
      segments: number;
    };
  };
}

export function processTranscriptionResponse(
  response: TranscriptionResponse
): ProcessedTranscription {
  logger.debug('Processing transcription response');

  const speakerStats: ProcessedTranscription['speakerStats'] = {};
  let totalDuration = 0;

  // Process speaker statistics
  response.transcription.speakers.forEach(speaker => {
    const duration = speaker.timestamp[1] - speaker.timestamp[0];
    const wordCount = speaker.text.split(/\s+/).length;

    if (!speakerStats[speaker.speaker]) {
      speakerStats[speaker.speaker] = {
        wordCount: 0,
        duration: 0,
        segments: 0
      };
    }

    speakerStats[speaker.speaker].wordCount += wordCount;
    speakerStats[speaker.speaker].duration += duration;
    speakerStats[speaker.speaker].segments += 1;

    totalDuration = Math.max(totalDuration, speaker.timestamp[1]);
  });

  const processed: ProcessedTranscription = {
    speakers: response.transcription.speakers,
    text: response.transcription.text,
    duration: totalDuration,
    speakerStats
  };

  logger.info('Transcription processing complete', {
    duration: totalDuration,
    speakerCount: Object.keys(speakerStats).length,
    totalSegments: response.transcription.speakers.length
  });

  return processed;
}
```

### src/services/api/errors.ts

```typescript
export interface APIErrorOptions {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
}

export class APIError extends Error {
  public status?: number;
  public code: string;
  public details?: unknown;

  constructor(options: APIErrorOptions) {
    super(options.message);
    this.name = 'APIError';
    this.status = options.status;
    this.code = options.code || 'UNKNOWN_ERROR';
    this.details = options.details;

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, APIError.prototype);
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
      details: this.details,
      stack: this.stack
    };
  }
}
```

### src/services/api/utils.ts

```typescript
import { APIError } from './errors';

export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new APIError({
      message: error.message || `HTTP error ${response.status}`,
      status: response.status,
      code: error.code || `HTTP_${response.status}`,
    });
  }
  return response.json();
}
```

### src/services/api/types.ts

```typescript
export interface APIResponse<T = unknown> {
  data: T;
  status: number;
  headers: Headers;
}

export interface SignedUrlResponse {
  upload_url: string;
  file_id: string;
}

export interface APIRequestContext {
  requestId: string;
  endpoint: string;
  method: string;
  duration?: string;
  error?: unknown;
}

export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export interface UploadOptions {
  onProgress?: (progress: UploadProgress) => void;
  onComplete?: () => void;
  onError?: (error: Error) => void;
  signal?: AbortSignal;
}
```

### src/services/api/knowledgeGraph.ts

```typescript
import { KnowledgeGraph } from '../../types';
import { ENV } from '../../config/env';
import { logger } from '../../utils/logger';
import { APIError } from './errors';

const SECONDARY_API_URL = ENV.API_URL_SECONDARY;
const API_KEY = ENV.API_KEY_SECONDARY || ENV.API_KEY;

export async function fetchKnowledgeGraph(): Promise<KnowledgeGraph> {
  const response = await fetch('/api/knowledge-graph');
  const data = await response.json();

  console.log('Knowledge Graph API Response:', data);

  // Expecting data to have a graph object
  if (!data.graph || !Array.isArray(data.graph.entities) || !Array.isArray(data.graph.relationships)) {
    throw new Error('Invalid API response: graph.entities or graph.relationships are not arrays');
  }

  return data.graph as KnowledgeGraph;
}

export async function generateEntityMap(text: string): Promise<KnowledgeGraph> {
  if (!SECONDARY_API_URL || !API_KEY) {
    throw new APIError({
      code: 'CONFIG_ERROR',
      message: 'Missing API configuration',
    });
  }

  const payload = { text };

  try {
    const response = await fetch(`${SECONDARY_API_URL}/entity_map_new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new APIError({
        code: `HTTP_${response.status}`,
        message: 'Entity map request failed',
        status: response.status,
      });
    }

    const data = await response.json();

    if (!data.graph || !Array.isArray(data.graph.entities) || !Array.isArray(data.graph.relationships)) {
      throw new APIError({
        code: 'INVALID_RESPONSE',
        message: 'Entity map response missing required arrays in graph',
      });
    }

    return data.graph;
  } catch (error) {
    logger.error('Entity map request failed', error instanceof Error ? error : new Error(String(error)));
    throw error;
  }
}

export async function generateSummary(
  text: string,
  knowledgeGraph: KnowledgeGraph
): Promise<string> {
  if (!SECONDARY_API_URL || !API_KEY) {
    throw new APIError({
      code: 'CONFIG_ERROR',
      message: 'Missing API configuration',
    });
  }

  const payload = {
    text,
    knowledge_graph: knowledgeGraph,
    system_prompt: "You are an expert assistant skilled at converting raw meeting transcripts into meeting minutes. Include the extracted entities and relationships to produce a coherent summary.",
  };

  try {
    const response = await fetch(`${SECONDARY_API_URL}/summarize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new APIError({
        code: `HTTP_${response.status}`,
        message: 'Summarization request failed',
        status: response.status,
      });
    }

    const data = await response.json();
    return data.summary;
  } catch (error) {
    logger.error('Summarization request failed', error instanceof Error ? error : new Error(String(error)));
    throw error;
  }
}
```

### src/services/api/client.ts

```typescript
import { API_CONFIG } from '../../config/api';
import { APIError } from './errors';
import { logger } from '../../utils/logger';
import type { APIResponse, APIRequestContext } from './types';

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<APIResponse<T>> {
  const requestId = Math.random().toString(36).substring(7);
  const context: APIRequestContext = {
    requestId,
    endpoint,
    method: options.method || 'GET',
  };

  const startTime = performance.now();
  logger.debug('API Request starting', context);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      logger.warn('Request timeout', { ...context, timeout: API_CONFIG.timeout });
    }, API_CONFIG.timeout);

    const response = await fetch(endpoint, {
      ...options,
      headers: new Headers({
        ...API_CONFIG.headers.base,
        ...options.headers,
      }),
      signal: controller.signal,
      credentials: API_CONFIG.cors.credentials,
      mode: API_CONFIG.cors.mode,
    });

    clearTimeout(timeoutId);
    context.duration = `${(performance.now() - startTime).toFixed(2)}ms`;

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new APIError({
        message: errorData.message || `HTTP error ${response.status}`,
        status: response.status,
        code: errorData.code || `HTTP_${response.status}`,
        details: {
          ...context,
          response: {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
          }
        }
      });
    }

    const data = await response.json();
    logger.debug('API Response received', {
      ...context,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    });

    return { data, status: response.status, headers: response.headers };
  } catch (error) {
    context.duration = `${(performance.now() - startTime).toFixed(2)}ms`;

    if (error instanceof APIError) {
      logger.error('API Error', error, { ...context }); 
      throw error;
    }

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        logger.warn('Request aborted', { ...context, error: error.message });
        throw new APIError({
          message: 'Request timeout',
          code: 'REQUEST_TIMEOUT',
          details: context
        });
      }

      logger.error('Request failed', error, { ...context }); 
      throw new APIError({
        message: error.message,
        code: 'REQUEST_FAILED',
        details: context
      });
    }

logger.error('Unknown error', new Error('Unknown error'), { ...context });    throw new APIError({
      message: 'An unknown error occurred',
      code: 'UNKNOWN_ERROR',
      details: context
    });
  }
}
```

### src/services/api/index.ts

```typescript
export * from './transcription';
export * from './upload';
export * from './errors';
export * from './utils';
export * from './types';
export * from './client';
export * from './knowledgeGraph';

```

### src/services/api/upload.ts

```typescript
import { API_CONFIG } from '../../config/api';
import { handleResponse } from './utils';
import { logger } from '../../utils/logger';
import type { UploadOptions } from './types';

export async function generateUploadUrl(filename: string, signal?: AbortSignal) {
  logger.debug('Generating upload URL', { filename });

  const response = await fetch(
    API_CONFIG.endpoints.generateUploadUrl(filename),
    {
      method: 'POST',
      headers: API_CONFIG.headers.base,
      signal,
    }
  );

  const data = await handleResponse<{ upload_url: string; file_id: string }>(response);
  logger.debug('Upload URL generated', { fileId: data.file_id });
  return data;
}

export async function uploadFile(url: string, file: File, options: UploadOptions = {}) {
  logger.debug('Starting file upload', {
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type
  });

  return new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.timeout = API_CONFIG.timeout;

    if (options.signal) {
      options.signal.addEventListener('abort', () => xhr.abort());
    }

    xhr.upload.addEventListener('loadstart', () => {
      logger.debug('Upload started');
      options.onProgress?.({ loaded: 0, total: file.size, percentage: 0 });
    });

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = {
          loaded: event.loaded,
          total: event.total,
          percentage: Math.round((event.loaded / event.total) * 100)
        };
        logger.debug('Upload progress', progress);
        options.onProgress?.(progress);
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        options.onProgress?.({ loaded: file.size, total: file.size, percentage: 100 });
        logger.debug('Upload completed successfully');
        resolve();
      } else {
        const error = new Error(`Upload failed with status ${xhr.status}`);
        logger.error('Upload failed', error);
        reject(error);
      }
    });

    xhr.addEventListener('error', () => {
      const error = new Error('Network error during upload');
      logger.error('Upload network error', error);
      reject(error);
    });

    xhr.addEventListener('abort', () => {
      const error = new Error('Upload aborted');
      logger.error('Upload aborted', error);
      reject(error);
    });

    xhr.addEventListener('timeout', () => {
      const error = new Error('Upload timed out');
      logger.error('Upload timeout', error);
      reject(error);
    });

    try {
      xhr.open('PUT', url);
      xhr.setRequestHeader('Content-Type', 'application/octet-stream');
      xhr.send(file);
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Failed to initiate upload');
      logger.error('Failed to initiate upload', err);
      reject(err);
    }
  });
}
```

### src/services/api/transcription.ts

```typescript
import { API_CONFIG } from '../../config/api';
import { handleResponse } from './utils';
import { logger } from '../../utils/logger';
import type { TranscriptionResponse } from '../../types';

export async function requestTranscription(fileId: string, signal?: AbortSignal): Promise<TranscriptionResponse> {
  logger.debug('Requesting transcription', { fileId });

  const response = await fetch(
    API_CONFIG.endpoints.processFile,
    {
      method: 'POST',
      headers: {
        ...API_CONFIG.headers.base,
        ...API_CONFIG.headers.json,
      },
      body: JSON.stringify({ file_id: fileId }),
      signal,
      credentials: 'omit'
    }
  );

  const data = await handleResponse<TranscriptionResponse>(response);
  
  if (!data.transcription?.speakers) {
    logger.error('Invalid transcription response', new Error('Invalid transcription response'), {
      responseData: data
    });
    throw new Error('Invalid transcription response');
  }
  
  logger.debug('Transcription received', {
    fileId,
    speakerCount: data.transcription.speakers.length,
  });
  
  return data;
}

export async function getTranscriptionResult(fileId: string, signal?: AbortSignal): Promise<TranscriptionResponse> {
  logger.debug('Getting transcription result', { fileId });
  const response = await fetch(
    API_CONFIG.endpoints.getTranscriptionResult(fileId),
    {
      method: 'GET',
      headers: API_CONFIG.headers.base,
      signal,
      credentials: 'omit',
    }
  );
  const data = await handleResponse<TranscriptionResponse>(response);
  logger.debug('Transcription result received', {
    fileId,
    speakerCount: data.transcription.speakers.length
  });
  return data;
}

```

### src/store/transcription.ts

```typescript
// src/store/transcription.ts
import { create } from 'zustand';
import type { TranscriptionState, ProcessError, ProcessStatus, KnowledgeGraph } from '../types';
import { logger } from '../utils/logger/core';

export const useTranscriptionStore = create<TranscriptionState>((set, get) => ({
  file: null,
  fileId: null,
  status: 'idle',
  error: null,
  transcription: null,
  speakerMap: {},
  knowledgeGraph: null,
  summary: null,

  setSpeakerName: (speaker, name) => {
    logger.debug('Updating speaker name', { speaker, name });
    set((state) => ({
      speakerMap: { ...state.speakerMap, [speaker]: name },
    }));
  },
  setFile: (file) => {
    logger.info('Setting file', { 
      name: file.name, 
      size: file.size, 
      type: file.type 
    });
    set({ file });
  },
  setFileId: (fileId) => {
    logger.info('Setting file ID', { fileId });
    set({ fileId });
  },
  setStatus: (status: ProcessStatus) => {
    const prevStatus = get().status;
    logger.info('Status change', { 
      from: prevStatus, 
      to: status 
    });
    set({ status });
  },
  setError: (error: ProcessError | null) => {
    if (error) {
      logger.error('Error occurred', new Error(error.message), {
        code: error.code,
        details: error.details
      });
    }
    set({ error });
  },
  setTranscription: (transcription) => {
    logger.info('Setting transcription result', {
      speakers: transcription.transcription.speakers.length,
      totalText: transcription.transcription.text.length
    });
    set({ transcription });
  },
  setKnowledgeGraph: (kg: KnowledgeGraph | null) => {
    if (kg) {
      logger.info('Setting knowledge graph', {
        entities: kg.entities?.length || 0,
        relationships: kg.relationships?.length || 0
      });
    } else {
      logger.info('Setting knowledge graph to null');
    }
    set({ knowledgeGraph: kg });
  },
  setSummary: (summary: string | null) => {
    logger.info('Setting summary', {
      length: summary?.length || 0
    });
    set({ summary });
  },
  reset: () => {
    logger.info('Resetting transcription state');
    set({
      file: null,
      fileId: null,
      status: 'idle',
      error: null,
      transcription: null,
      speakerMap: {},
      knowledgeGraph: null,
      summary: null
    });
  },
}));

```

