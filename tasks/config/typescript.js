/**
 * Created by jbernardin on 3/6/16.
 */

module.exports = function(grunt) {
  grunt.config.set('typescript', {
    dev: {
      src: ['assets/ts/**/*.ts'],
      dest: 'assets/js/',
      options: {
          "target": "ES5",
          "module": "system",
          "moduleResolution": "node",
          "sourceMap": true,
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true,
          "removeComments": false,
          "noImplicitAny": false,
          "outDir": "assets/js",
          "sourceRoot": "assets/ts",
          "exclude": [
            "node_modules"
          ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-typescript');
};
