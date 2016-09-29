module.exports = {
  'build-commonjs': {
    filters: {
      inFormats: ['less', 'js', 'jsx'],
      baseNames: ['index']
    },
    pkg: {
      name: 'patternplate-getting-started',
      style: 'style'
    },
    patterns: {
      formats: {
        jsx: {
          name: 'component',
          transforms: ['react', 'resolve-imports']
        },
        js: {
          name: 'script',
          transforms: ['resolve-imports']
        },
        less: {
          name: 'style',
          transforms: ['resolve-includes']
        }
      }
    },
    transforms: {
      'react': {
        inFormat: 'js',
        outFormat: 'js',
        resolveDependencies: false
      },
      'resolve-includes': {
        inFormat: 'less',
        outFormat: 'less'
      },
      'resolve-imports': {
        inFormat: 'js',
        outFormat: 'js'
      }
    }
  }
};
