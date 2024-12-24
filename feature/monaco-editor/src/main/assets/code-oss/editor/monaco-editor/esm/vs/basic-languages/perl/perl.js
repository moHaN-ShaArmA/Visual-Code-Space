/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.2(404545bded1df6ffa41ea0af4e8ddb219018c6c1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/perl/perl.ts
var conf = {
  comments: {
    lineComment: "#"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".perl",
  brackets: [
    { token: "delimiter.bracket", open: "{", close: "}" },
    { token: "delimiter.parenthesis", open: "(", close: ")" },
    { token: "delimiter.square", open: "[", close: "]" }
  ],
  // https://learn.perl.org/docs/keywords.html
  // Perl syntax
  keywords: [
    "__DATA__",
    "else",
    "lock",
    "__END__",
    "elsif",
    "lt",
    "__FILE__",
    "eq",
    "__LINE__",
    "exp",
    "ne",
    "sub",
    "__PACKAGE__",
    "for",
    "no",
    "and",
    "foreach",
    "or",
    "unless",
    "cmp",
    "ge",
    "package",
    "until",
    "continue",
    "gt",
    "while",
    "CORE",
    "if",
    "xor",
    "do",
    "le",
    "__DIE__",
    "__WARN__"
  ],
  // Perl functions
  builtinFunctions: [
    "-A",
    "END",
    "length",
    "setpgrp",
    "-B",
    "endgrent",
    "link",
    "setpriority",
    "-b",
    "endhostent",
    "listen",
    "setprotoent",
    "-C",
    "endnetent",
    "local",
    "setpwent",
    "-c",
    "endprotoent",
    "localtime",
    "setservent",
    "-d",
    "endpwent",
    "log",
    "setsockopt",
    "-e",
    "endservent",
    "lstat",
    "shift",
    "-f",
    "eof",
    "map",
    "shmctl",
    "-g",
    "eval",
    "mkdir",
    "shmget",
    "-k",
    "exec",
    "msgctl",
    "shmread",
    "-l",
    "exists",
    "msgget",
    "shmwrite",
    "-M",
    "exit",
    "msgrcv",
    "shutdown",
    "-O",
    "fcntl",
    "msgsnd",
    "sin",
    "-o",
    "fileno",
    "my",
    "sleep",
    "-p",
    "flock",
    "next",
    "socket",
    "-r",
    "fork",
    "not",
    "socketpair",
    "-R",
    "format",
    "oct",
    "sort",
    "-S",
    "formline",
    "open",
    "splice",
    "-s",
    "getc",
    "opendir",
    "split",
    "-T",
    "getgrent",
    "ord",
    "sprintf",
    "-t",
    "getgrgid",
    "our",
    "sqrt",
    "-u",
    "getgrnam",
    "pack",
    "srand",
    "-w",
    "gethostbyaddr",
    "pipe",
    "stat",
    "-W",
    "gethostbyname",
    "pop",
    "state",
    "-X",
    "gethostent",
    "pos",
    "study",
    "-x",
    "getlogin",
    "print",
    "substr",
    "-z",
    "getnetbyaddr",
    "printf",
    "symlink",
    "abs",
    "getnetbyname",
    "prototype",
    "syscall",
    "accept",
    "getnetent",
    "push",
    "sysopen",
    "alarm",
    "getpeername",
    "quotemeta",
    "sysread",
    "atan2",
    "getpgrp",
    "rand",
    "sysseek",
    "AUTOLOAD",
    "getppid",
    "read",
    "system",
    "BEGIN",
    "getpriority",
    "readdir",
    "syswrite",
    "bind",
    "getprotobyname",
    "readline",
    "tell",
    "binmode",
    "getprotobynumber",
    "readlink",
    "telldir",
    "bless",
    "getprotoent",
    "readpipe",
    "tie",
    "break",
    "getpwent",
    "recv",
    "tied",
    "caller",
    "getpwnam",
    "redo",
    "time",
    "chdir",
    "getpwuid",
    "ref",
    "times",
    "CHECK",
    "getservbyname",
    "rename",
    "truncate",
    "chmod",
    "getservbyport",
    "require",
    "uc",
    "chomp",
    "getservent",
    "reset",
    "ucfirst",
    "chop",
    "getsockname",
    "return",
    "umask",
    "chown",
    "getsockopt",
    "reverse",
    "undef",
    "chr",
    "glob",
    "rewinddir",
    "UNITCHECK",
    "chroot",
    "gmtime",
    "rindex",
    "unlink",
    "close",
    "goto",
    "rmdir",
    "unpack",
    "closedir",
    "grep",
    "say",
    "unshift",
    "connect",
    "hex",
    "scalar",
    "untie",
    "cos",
    "index",
    "seek",
    "use",
    "crypt",
    "INIT",
    "seekdir",
    "utime",
    "dbmclose",
    "int",
    "select",
    "values",
    "dbmopen",
    "ioctl",
    "semctl",
    "vec",
    "defined",
    "join",
    "semget",
    "wait",
    "delete",
    "keys",
    "semop",
    "waitpid",
    "DESTROY",
    "kill",
    "send",
    "wantarray",
    "die",
    "last",
    "setgrent",
    "warn",
    "dump",
    "lc",
    "sethostent",
    "write",
    "each",
    "lcfirst",
    "setnetent"
  ],
  // File handlers
  builtinFileHandlers: ["ARGV", "STDERR", "STDOUT", "ARGVOUT", "STDIN", "ENV"],
  // Perl variables
  builtinVariables: [
    "$!",
    "$^RE_TRIE_MAXBUF",
    "$LAST_REGEXP_CODE_RESULT",
    '$"',
    "$^S",
    "$LIST_SEPARATOR",
    "$#",
    "$^T",
    "$MATCH",
    "$$",
    "$^TAINT",
    "$MULTILINE_MATCHING",
    "$%",
    "$^UNICODE",
    "$NR",
    "$&",
    "$^UTF8LOCALE",
    "$OFMT",
    "$'",
    "$^V",
    "$OFS",
    "$(",
    "$^W",
    "$ORS",
    "$)",
    "$^WARNING_BITS",
    "$OS_ERROR",
    "$*",
    "$^WIDE_SYSTEM_CALLS",
    "$OSNAME",
    "$+",
    "$^X",
    "$OUTPUT_AUTO_FLUSH",
    "$,",
    "$_",
    "$OUTPUT_FIELD_SEPARATOR",
    "$-",
    "$`",
    "$OUTPUT_RECORD_SEPARATOR",
    "$.",
    "$a",
    "$PERL_VERSION",
    "$/",
    "$ACCUMULATOR",
    "$PERLDB",
    "$0",
    "$ARG",
    "$PID",
    "$:",
    "$ARGV",
    "$POSTMATCH",
    "$;",
    "$b",
    "$PREMATCH",
    "$<",
    "$BASETIME",
    "$PROCESS_ID",
    "$=",
    "$CHILD_ERROR",
    "$PROGRAM_NAME",
    "$>",
    "$COMPILING",
    "$REAL_GROUP_ID",
    "$?",
    "$DEBUGGING",
    "$REAL_USER_ID",
    "$@",
    "$EFFECTIVE_GROUP_ID",
    "$RS",
    "$[",
    "$EFFECTIVE_USER_ID",
    "$SUBSCRIPT_SEPARATOR",
    "$\\",
    "$EGID",
    "$SUBSEP",
    "$]",
    "$ERRNO",
    "$SYSTEM_FD_MAX",
    "$^",
    "$EUID",
    "$UID",
    "$^A",
    "$EVAL_ERROR",
    "$WARNING",
    "$^C",
    "$EXCEPTIONS_BEING_CAUGHT",
    "$|",
    "$^CHILD_ERROR_NATIVE",
    "$EXECUTABLE_NAME",
    "$~",
    "$^D",
    "$EXTENDED_OS_ERROR",
    "%!",
    "$^E",
    "$FORMAT_FORMFEED",
    "%^H",
    "$^ENCODING",
    "$FORMAT_LINE_BREAK_CHARACTERS",
    "%ENV",
    "$^F",
    "$FORMAT_LINES_LEFT",
    "%INC",
    "$^H",
    "$FORMAT_LINES_PER_PAGE",
    "%OVERLOAD",
    "$^I",
    "$FORMAT_NAME",
    "%SIG",
    "$^L",
    "$FORMAT_PAGE_NUMBER",
    "@+",
    "$^M",
    "$FORMAT_TOP_NAME",
    "@-",
    "$^N",
    "$GID",
    "@_",
    "$^O",
    "$INPLACE_EDIT",
    "@ARGV",
    "$^OPEN",
    "$INPUT_LINE_NUMBER",
    "@INC",
    "$^P",
    "$INPUT_RECORD_SEPARATOR",
    "@LAST_MATCH_START",
    "$^R",
    "$LAST_MATCH_END",
    "$^RE_DEBUG_FLAGS",
    "$LAST_PAREN_MATCH"
  ],
  // operators
  symbols: /[:+\-\^*$&%@=<>!?|\/~\.]/,
  quoteLikeOps: ["qr", "m", "s", "q", "qq", "qx", "qw", "tr", "y"],
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  // The main tokenizer for our languages
  tokenizer: {
    root: [
      { include: "@whitespace" },
      [
        /[a-zA-Z\-_][\w\-_]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@builtinFunctions": "type.identifier",
            "@builtinFileHandlers": "variable.predefined",
            "@quoteLikeOps": {
              token: "@rematch",
              next: "quotedConstructs"
            },
            "@default": ""
          }
        }
      ],
      // Perl variables
      [
        /[\$@%][*@#?\+\-\$!\w\\\^><~:;\.]+/,
        {
          cases: {
            "@builtinVariables": "variable.predefined",
            "@default": "variable"
          }
        }
      ],
      { include: "@strings" },
      { include: "@dblStrings" },
      // Perl Doc
      { include: "@perldoc" },
      // Here Doc
      { include: "@heredoc" },
      [/[{}\[\]()]/, "@brackets"],
      // RegExp
      [/[\/](?:(?:\[(?:\\]|[^\]])+\])|(?:\\\/|[^\]\/]))*[\/]\w*\s*(?=[).,;]|$)/, "regexp"],
      [/@symbols/, "operators"],
      { include: "@numbers" },
      [/[,;]/, "delimiter"]
    ],
    whitespace: [
      [/\s+/, "white"],
      [/(^#!.*$)/, "metatag"],
      [/(^#.*$)/, "comment"]
    ],
    numbers: [
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"],
      [/\d+/, "number"]
    ],
    // Single quote string
    strings: [[/'/, "string", "@stringBody"]],
    stringBody: [
      [/'/, "string", "@popall"],
      [/\\'/, "string.escape"],
      [/./, "string"]
    ],
    // Double quote string
    dblStrings: [[/"/, "string", "@dblStringBody"]],
    dblStringBody: [
      [/"/, "string", "@popall"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      { include: "@variables" },
      [/./, "string"]
    ],
    // Quoted constructs
    // Percent strings in Ruby are similar to quote-like operators in Perl.
    // This is adapted from pstrings in ../ruby/ruby.ts.
    quotedConstructs: [
      [/(q|qw|tr|y)\s*\(/, { token: "string.delim", switchTo: "@qstring.(.)" }],
      [/(q|qw|tr|y)\s*\[/, { token: "string.delim", switchTo: "@qstring.[.]" }],
      [/(q|qw|tr|y)\s*\{/, { token: "string.delim", switchTo: "@qstring.{.}" }],
      [/(q|qw|tr|y)\s*</, { token: "string.delim", switchTo: "@qstring.<.>" }],
      [/(q|qw|tr|y)#/, { token: "string.delim", switchTo: "@qstring.#.#" }],
      [/(q|qw|tr|y)\s*([^A-Za-z0-9#\s])/, { token: "string.delim", switchTo: "@qstring.$2.$2" }],
      [/(q|qw|tr|y)\s+(\w)/, { token: "string.delim", switchTo: "@qstring.$2.$2" }],
      [/(qr|m|s)\s*\(/, { token: "regexp.delim", switchTo: "@qregexp.(.)" }],
      [/(qr|m|s)\s*\[/, { token: "regexp.delim", switchTo: "@qregexp.[.]" }],
      [/(qr|m|s)\s*\{/, { token: "regexp.delim", switchTo: "@qregexp.{.}" }],
      [/(qr|m|s)\s*</, { token: "regexp.delim", switchTo: "@qregexp.<.>" }],
      [/(qr|m|s)#/, { token: "regexp.delim", switchTo: "@qregexp.#.#" }],
      [/(qr|m|s)\s*([^A-Za-z0-9_#\s])/, { token: "regexp.delim", switchTo: "@qregexp.$2.$2" }],
      [/(qr|m|s)\s+(\w)/, { token: "regexp.delim", switchTo: "@qregexp.$2.$2" }],
      [/(qq|qx)\s*\(/, { token: "string.delim", switchTo: "@qqstring.(.)" }],
      [/(qq|qx)\s*\[/, { token: "string.delim", switchTo: "@qqstring.[.]" }],
      [/(qq|qx)\s*\{/, { token: "string.delim", switchTo: "@qqstring.{.}" }],
      [/(qq|qx)\s*</, { token: "string.delim", switchTo: "@qqstring.<.>" }],
      [/(qq|qx)#/, { token: "string.delim", switchTo: "@qqstring.#.#" }],
      [/(qq|qx)\s*([^A-Za-z0-9#\s])/, { token: "string.delim", switchTo: "@qqstring.$2.$2" }],
      [/(qq|qx)\s+(\w)/, { token: "string.delim", switchTo: "@qqstring.$2.$2" }]
    ],
    // Non-expanded quoted string
    // qstring<open>.<close>
    //  open = open delimiter
    //  close = close delimiter
    qstring: [
      [/\\./, "string.escape"],
      [
        /./,
        {
          cases: {
            "$#==$S3": { token: "string.delim", next: "@pop" },
            "$#==$S2": { token: "string.delim", next: "@push" },
            // nested delimiters
            "@default": "string"
          }
        }
      ]
    ],
    // Quoted regexp
    // qregexp.<open>.<close>
    //  open = open delimiter
    //  close = close delimiter
    qregexp: [
      { include: "@variables" },
      [/\\./, "regexp.escape"],
      [
        /./,
        {
          cases: {
            "$#==$S3": {
              token: "regexp.delim",
              next: "@regexpModifiers"
            },
            "$#==$S2": { token: "regexp.delim", next: "@push" },
            // nested delimiters
            "@default": "regexp"
          }
        }
      ]
    ],
    regexpModifiers: [[/[msixpodualngcer]+/, { token: "regexp.modifier", next: "@popall" }]],
    // Expanded quoted string
    // qqstring.<open>.<close>
    //  open = open delimiter
    //  close = close delimiter
    qqstring: [{ include: "@variables" }, { include: "@qstring" }],
    heredoc: [
      [/<<\s*['"`]?([\w\-]+)['"`]?/, { token: "string.heredoc.delimiter", next: "@heredocBody.$1" }]
    ],
    heredocBody: [
      [
        /^([\w\-]+)$/,
        {
          cases: {
            "$1==$S2": [
              {
                token: "string.heredoc.delimiter",
                next: "@popall"
              }
            ],
            "@default": "string.heredoc"
          }
        }
      ],
      [/./, "string.heredoc"]
    ],
    perldoc: [[/^=\w/, "comment.doc", "@perldocBody"]],
    perldocBody: [
      [/^=cut\b/, "type.identifier", "@popall"],
      [/./, "comment.doc"]
    ],
    variables: [
      [/\$\w+/, "variable"],
      // scalar
      [/@\w+/, "variable"],
      // array
      [/%\w+/, "variable"]
      // key/value
    ]
  }
};
export {
  conf,
  language
};