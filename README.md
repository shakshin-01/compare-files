# CLI app, which compares two configuration files and shows a difference.

## Eslint status ##

[![Node.js CI](https://github.com/shakshin-01/frontend-project-lvl2/actions/workflows/node.js.yml/badge.svg)](https://github.com/shakshin-01/frontend-project-lvl2/actions/workflows/node.js.yml)

## CodeClimate and test coverage status ##

<a href="https://codeclimate.com/github/shakshin-01/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/3e7e71e9c9f0437a7310/maintainability" /></a>

<a href="https://codeclimate.com/github/shakshin-01/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/3e7e71e9c9f0437a7310/test_coverage" /></a>

## Install ##

```sh
# clone the repository
git clone https://github.com/shakshin-01/compare-files.git

# go to the folder with the repository
cd compare-files

# install dependencies
make install

# install the package
make link
```

### How to start app
```
Supported file formats: json, yml
Supported output: stylish(default), plain, json

$ gendiff --format [output type] <pathToFile1> <pathToFile2>
```
### Stylish type

```sh
$ gendiff <...path/file1.format> <...path/file2.format>
```

[![asciicast](https://asciinema.org/a/xDZvtWC3PcmlX8LAbDKYNXJc1.svg)](https://asciinema.org/a/xDZvtWC3PcmlX8LAbDKYNXJc1)

### Plain type

```sh
$ gendiff --format plain <...path/file1.format> <...path/file2.format>
```

[![asciicast](https://asciinema.org/a/FQaXeTwlOoGd1J8hEdRwGfR0k.svg)](https://asciinema.org/a/FQaXeTwlOoGd1J8hEdRwGfR0k)

### json type

```sh
$ gendiff --format json <...path/file1.format> <...path/file2.format>
```

[![asciicast](https://asciinema.org/a/PZaLrUSfgMTdq15Fl6FjtHwvv.svg)](https://asciinema.org/a/PZaLrUSfgMTdq15Fl6FjtHwvv)
