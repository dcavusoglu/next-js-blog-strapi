
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://0.0.0.0:1337/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "generated.tsx": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  }
};

export default config;
