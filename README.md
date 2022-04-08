## Kindleifier 1.0!
Kindles, especially the paperwhite, have great reading screens. Their low refresh rate is great for enjoying paged content like epubs and pdfs... But what about webserials?

For content updated daily, and distributed via html, the Kindle experience is tragic. Reformatting to epub/similar then importing constantly is painful. Scrolling on the low refresh rate screen is painful. And the lack of an easy way to change text font/size is the final straw. Surely there must be a better way...

Enter Kindleifier, a simple server-side reformatter/pager. Complete with opt-in ads (for the content creator(s), not me). Because, d*mmit, a Kindle should offer a good reading experience for plain html. So, as I vowed to a friend, VSCode went brrrrr.

## Install
1. Ensure Nodejs is installed (Windows `choco install nodejs -y`) (*nix `brew install node`)
2. `npm install`

## Startup
`node server.js` or `npm start` (optonally takes port as int argument, ex: `node server.js 1337`)

## Use
### Desktop
* Navigate to the hosted url
    - (logged in console upon startup)
* Apply url parameters
    - url - the url to kindleify
    - p - the page number (0 means ads for that url)
    - full example: "http://10.0.0.3:1337/?url=https://www.princerevolution.org/knight_v1c1/&p=1"
* Adjust user-settings.json to taste
    - Note: consult userSettingsService.js for schema
* Ensure your site has a parser provided
    - Note: update siteParser.js, plenty of examples already
### Kindle
* Navigate to the hosted url
    - example: "10.0.0.3:1337"
* Binge :)

```
77777!7!!!!!!!!77!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~?&.                                                                                                                                   ~@
77777!!!!!!!!!!7!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~?&.                                                                                                                                   ~@
77777!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~?&.                                                                                                                                   ~@
!!!77!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7&.                                     .!?JJ?!~~~^^::...                   ...::^^^^:                                                ~@
!!!!!!!!!!!!!!!!!7?JYYYYYYYYJJ?7!!!~!!!!!~~!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7&.                                    :55YJJYP?^~!7??JJJJJJJJJJJJJJJJJJJJJJ??7!~^:.:!?~                                              ~@
!!!!!!7!!!!!!!?J55PPPPP5555555555J7!~!~~~~~~!!!7777!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^7&.                                    Y57?JY??G~.........::::^^^^^^^^^^:::...........:5?                                             ~@
!!!!!!7!!!!!?Y5PPPP55PPPPPPPPPPPPP5Y!!!7???JY5PP5Y55PPP5YYJ?77!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^7&.                                    G7!P?JY^YY:::^~~!~~~^^^::::.........::::::::::::^B~                                            ~@
!!!!!!!!!!?5PPPPPGGG5PGGGGGGGGPPPPPP55PGGGGGGGGGPGBB####BBBGP5J?7!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~?&.                                    5Y!?77P!PJ:::::^^^~~~~~~~^^^::::::::::::::::::^~!GJ                                            ~@
!!!!!!!!!JPGGGGGGGBBGGGGGGGGGGGPPPPPPPG######BB###&&&&&####B#BBP5J?7!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^7&.                                    ^P?^~YGY#!::::::::::::::::::::::::::::::::::::^~~G5                                            ~@
!!!!!!!!YGGGGBBBBBBBGGGGGGGGGGGPPP5555P##########&&&&&&&&####B#G5JJJ?7!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7&.                                     .7777~?B^^^::::::::::::::::::::::::::::::::::::^#J                                            ~@
77!!!!!YGBBBB##BBBBGGGGGGGGGGGGPPPP5555PGGGBBBBPPG#&&&&&&&&BGGGGP5YYJJ??!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7&.                                           5J:^^::::::::::::::::::::::::::::::::::^:J&^                                            ~@
!!!!!!!PBB######BBGGGGGGGGGGGGGPGPGP55PPPBBB#PYYYYPB&&&&&#GPPGGG5555YJJJ?!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7&.                                          !B^^^::::::::::::::::::::::::::::::::::^^!&Y                                             ~@
!!!!!!7G######BBGGPPPPPPGGGGGGGGGGGBBBGGPPGB#GYYJYJJB##BGGPPGGGPPPP5YYJJJ7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7&.                                         .BY^^^^^:::::::::::::::::::::::::::^^^^^^:GB.                                             ~@
!!!!!!7PBBGGGGGPPGGGPGGGGGPPPPP5PPGGGBBGG55YJYY5JY5YPBBBBGGGGGGGGPP55YJJJ?~~~~~~~~^^^^^^^^^^^~~~~~~~~~~~7&.                                         J#?7!~^^^^::::::::::::::::::::::::^^^^^^:Y&!                                              ~@
!!!!!!!?Y5555PPPPGGGGGGGPPPP5555PPPGGGGPPPP5YYJ5JYPY5BGBBBGGGGGGGGGP5YJJJ?!~~~~~~~~~^^^^^^^^^~~~~~~~~~~~7&.                                        ^&7:^^^^:::::::::::::::::::::::::::^^^^^:7&5                                               ~@
!!!!!!!!7JY5PPPPPPGGGGGGGPPPPPPPPPPGGGGGGGPPYYJYYYPYYBBBBGGGBBBBBGGP55YJJ7~~~~~~~~~~^^^^^^^^^^^^^^^^~~~^7&.                                       .GP:~^^^::::::::::.........:::::::::^^^^^^#B:                                               ~@
!!!!!!!!!7J5PPP5PGGGBB##BBBGGPPPPPPB#BGPPGGGYYJYYJ5YJG###PJJ5B###BBBBGPY7~~~~~~~~~~~~^^^^^^^^^^^^^^^~~~~7&.                                       ?&^^^^^:::::::::...::::::::::::::::::^^~:5&!                                                ~@
!!!!!!!!!!7Y5PPPPGB&&&####BGPPPPPPGB&&#BGPY5JYYJ5JY5JG&#BP5YYPPB###BGP5J?7!!~~~~~~~~~~~^^~^^^^^^^^^^~~~~7&.                                      :&J:~^^^::::::::...::::::::::::::::::^^^^?&P                                                 ~@
!!!!!!!!!!!?5GBGPB#####BBGGGGGGGGGB#&&&&#G5JJJYYJYJJJY#&BPPPGB55BBBGP5JJJJ??77!~~~~~~~~^^^^^^^^^^^^^~~~^7&.                                      5B:^^^^:::::::::.:::::::::::::.:::::^^^!7B&~                                                 ~@
!!!!!!!!!!!!!7Y5YPGGBBGGPPGGGGBBBB#&&@@@@&#5JJJYJ??JJJP#GPPP##BGBBGP55JJJJJJJJJ?7!~~~~~~~~~^^^^^^^^^~~~^7&.                                     ~&!:^^^^:::::::::...............::::::^~:~&P                                                  ~@
!!!!!!!!!!!!7J5Y?5GGGGB#BGPPGGGBB#&@@@@@@&BPJYJ???JJJYY5PP5P#####BP5P5YJJJYYJJJJJ??7!~~~~~~^^^^^^^^^~~~^7#.                                     GP.^^^^^:::::::::...............::::::^^.J@7                                                  ~@
!!!!!!!!!!?5G#&#G55PGBBB#BBBB#BB#&@@@@@&#BGBPJYJ????JYYYYY55#&####P5GP5Y5YY5YYJJJJJJ?7!~~~~^^^^^^^^^~~~^7#.                                    !&~:^^^^^::::::::::............::::::::^^.P&^                                                  ~@
!!!!!!!!!!JP#&#&&#BBB#&&&&&&&&&&&@@@@&BGGBB##5YYJJ??JJYYYYYY#&#BBBP5PBGP55P5YYYYYYYJJJJ?7!~^~^^^^^^^~~~^7#.                                    PG.^^^^^^:::::::::::...........::::::::^^.B#.                                                  ~@
!!!!!!!!!!!75B#&&&&&&&&########&&@@@#B#####&&PJYYYJ?JJY55Y5G###BBBGPPGGGPPP55555YYYYYJJJ??7!~~^^^^^^~~~^7#.                                   :&7:^^^^::::::::::::::::.....:::::::::::^^.BB.                                                  ~@
!!!!!!!!!!!!!YGGG#&&&&&&#BB#&&&&@@@@#&&#&&&&&GJJYYJJJJY555B&&##BBBBBGGGGGGGGPP555555YYYYJJJJ?7~^~~~~~~~^7#.                                   !&!~^^^^^^^:::::::::::::::::::::::::::::^^.GB.                                                  ~@
!!!!!!!!!!!!!JYPGBGG#&&&&&&&&@@@@@@@@&&&&&&&#GYJYYYJJJY5G#&&&##BGBGGGGBGBBGGPP555555555YYYYYYJ?!~~~~~~~^7&.                                   J#?J?7!~^^^::::::::::::::::::::::::::::::^.Y#.                                                  ~@
!!!!!!!!!!!!7JY5GBP55GGB#&&#&&&&&@@@@@&&&##BGBG555YYJ5G#&&&&###BGBGGBBBBBBBGPPPP555555555P5YJJJ?7!~~~~~^7&.                                   YB7!~^^^^^^^:::::::::::::::::::::::::::^^^:~&^                                                  ~@
!!!!!!!!!!!?JYY55GBGP55PGB###########BBBBBBBBBBBBGP5P#&&&&####BBBGBGBBBB#BBGGGPPPPPPP55PPP5YJYYYJJ7!~~~^7&.                                   5Y.^^^^^^^^^^^^^^^:::::::::::::::^^^^^^^~!77#?                                                  ~@
!!!!!!!!!!7JYY55PGB##GPPGB######BBGGGGGB#BBBBBBBBBBB&&&######BBBBBBBBBB##BBBBBGGGGGGGBGP55YJJYYYYYJJ7~~^7#.                                   JP:~~^^^^^^^^^^^^^^^^^:::::::::::::^^^^^^~!!JG...:.                                             ~@
!!!!!!!!!!?YY5555PBB###BGB##BBGPPPPPPPPB##BBBBBBBB#&&&##B######BBBBBBBB##BBBB###BBBBBGP5YYYYYY5Y55YYY?!~7#.                                   !G:~~~^~77!!!!!!!!!!!!!!!77777???JJJJYYYYYYJJY7!~~7?.                                           ~@
!!!!!!!!!?JY555PPPGB###&##BGP555PPPGGGGGBBB#BBB##B#B####B#####BBBBBBBBB##BBBBBB###BBGP5555555YY55555YYJ7?#.                                   .B~~~~JGP5PGJ77?JJJJYYYYYYYYYYYJJJ??77!!~~^^^:^^^^^JG:                                          ~@
!!!!!!!!7JYY55PGGGBB##BBGP55PPPGGGGBBBBBGGBB####BBBB#########BBBBBBBBBBB##BBBGBBB#BGGPPPPPPPPPPPP5Y555YY5#.                                    ?5^~!#J!!?JGJ!~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^P5                                          ~@
!!!!!!!7JYYY555PPGGGP5YY55GGGGGGGGBBB##BBBBB#########&&#####BGGBBBBBBBBB###BBBBB###BBBGPPGGB##BGPJ??JY5Y5#.                                    .P?~~GJ^^PJ5B!~~~~~~~~~~~~~~~~!!!77777!!!!!!77777??P#:.                                        ~@
!!!!!!7YY5PPP5YJJYYJYYYPPGBBGGGGBBB#BBBBBBBBBB###&&&#########BBBBBBBBB##&&&###B##BBBB#####B#BBBBPJJJJJ55P#.                                     :5?~!555G55B~~~~!!77??JYY555PPPPGGGGPPP55555YYY55G&5^^:                                       ~@
!!!7J5PGGGGP5YYY555555PGGBB#BBBBB#BBBBBBBBBBBB#&&&##############BBBBBBB#&&&&#BBBBBBBBBB###BB##BBBPYYY5PPG#.                                     :^YY77!!~!PGJY5PGGGGGGGGPPP5555YYYYYYYYYYY5555Y555?~^^:                                       ~@
!!!7YPGGPPP5555PPPPPPPGG######BBBBBBBBBBBBBB##&&&&##BB##########BBBGGB###&&&#BBGBBBBBB#BBB#BBBBBBBGGGGGPG#.                                    .^^^7YYJJJ55YYJ??7!!!~~~^^^^^^:::::::::::::^^^^^^^::..                                         ~@
!!!7PBGGPP55555PPPPGGGBB####BBBBBBBBBBBBBB#&&&&&&&#BBBBBBBBBBBBBGGBBBB####&&&##BBGBBBB#BBBBBBBBBGBBBGGGGG#.                                      ..:::^~^^::::::::........                                                                    ~@
!!!!5GPGPPP5555PGGGGGBB#######BBBBBBBBB###&&&&&&&&#####BBBBBBBGGGGGBBBBB#B#&&&&#BBGGBBBBBBBBBBBBBBBBGGGPG#.                                                                                                                                   ~@
!!!!7Y5PPPP55GGPGGBBBBBBBBBBBB#########BBB#&&&&&&&####BBBBBBBBBBBBBBBBBBBBB#&&&&##BBBBBBBBBBBBBBBBGGGGGPG#.                                                                                                                                   ~@
!!!!!!J555555GBPGGBBBBBBBBBBBBBB##B###BBBBGB#&&&####BBBGB#############B#BBB###&&&####BBGBBBBBB#BBBGGGGGGB#.                                                                                                                                   ~@
!!!!!!!7JY5PPGBGPGBBBBBBBBBBBBBBB##&&&&&&&####&&####BGGGB#############BBBBB##########BGGGBBBBBBBGGGGGBGGB#.                                                                                                                                   ~@
!!!!!!!!!?Y5PGBBGGGGGBBBBBBBBBB###&&&&&&&&&&&&&&####BGGGB########BBBBBBBBBBBBGB###&####BGGBBBBBBBBBBBBBBB#.                                                                                                                                   ~@
!!!!!!!!!!7J5PGBBGGGBBBBBBBBGPG##&&&&&&&&&#&##&&#####GPGB#####BBBBBBBBBB##BBGB#&&&######BBBBBBBBBBBBBBBB##.                                                                                                                                   ~@
!!!!!!!!!!!!7J5GGBBBBBBBBBGY!!YPB##&#########&&&#####BPBB#####BBBBBBB#B###BBB####&######BB###BBBGBBBBBB###.                                                                                                                                   ~@
!7!7!!!!!!!!!!!?J555PPGG5J7~!!7YPGBBB#B#####&&&#BB##BBPGBBBBBBBBBBBBBBBB####BB#B########BGB###BBGBBBBBB###.                                                                                                                                   ~@
!!!777777!!7!!!!!!!!!!!!!!!!!!!J5PGGGBBBB###&&&#B#BBBBGBBBBBBBBBBBBBBBBB#####BBB########BGPB##BBBB#######B.                                                                                                                                   ~@
YY55555555555555555555YYYY555555PPPPPPGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGPPGGGGGGGGBBB#&&P5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555YB@
~~~~~~~~~~~~~~~~!!!!!!~~~~!!!!!!!~~~~~~!!!~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!77777!7777J&.                                                                                                                                   !@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!!!!!!!!!!77?JJJJ?77!!!!!7!7!!!!!7777777777777!?&.                                                                                                                                   ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!~!!!!!!!!!!!!!!!!!7??JJJJJYJJYYJ?7!!!!!!!!!!!!!!!!!!!!!77!?&.                                                                                                                                   ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!~!7777777777?7????JJJ7!!!!!!!!!!!!!!!!!!!!7!?&.                                                                                                                                   ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!77777777????????????JJ7!!!!!!!!!!!!!!!!!!7!J&.                                                                                                                                   ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!7777JYYYJJJJJJJY555J???JYJ!!!!!!!!!!!!!!!!!!!?&.                                                                                                                                   ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7??YGBBBGPYYJY5PB###BGPYJY5Y!!!!!!!!!!!!!!!!!!J&.                                                                             &#BP5B                                                ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!??Y5YY5PGP?777YPBBP55PGPYY55?!!!!!!!!!!!!!!!!!J&.                                                            &BP5YYJJJJJYYYJJ?!~^^^!JP#                                             ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!??YY5PPPY?7777?JYPPGGPPP5YYYJ!!!!!!!!!!!!!!!!!J&.                                          &#BBGB#        BJ~:                       :!JP#                                          ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!?777????JYJJYPPYYYJ????JJJY5J!!!!!!!!!!!!!!!!!J&.                                    #GY7~^..    .^75#  P~                              :!YG&                                       ~@
^^^^^^^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!777?JJJJP##B#&&#PY55YJJJJJJYJ!!!!!!!!!!!!!!!!!J&.                                &P?~.               .!Y7:                                 :!YB                                     ~@
^^^^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~77??J5PPPGGGGGGGBBBBBGGP5YJJJYY?7!!!!!!!!!!!!!!!J&.                             #5!.                      :7?^                                  .!5#                                  ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!YJ??5GBBGPP5Y555PPBB###BPYYJYY5P?!!!!!!!!!!!!!!!J&.                         #PJ^.                           :7?~.                                  .~YB                               ~@
^^^~^^~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~?JJJYPGP5PYJJYYYY5PGG##BG555PY55?!!!!!!!!!!!!!!!J&.                       #JY:                                .!J!.                                   .~JB                            ~@
^^^^^^^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7????GGGGBPY5PGB###BP55P#&#####GJJ?!~!!!!!!!!!!!!!!J&.                   &#B#? :J~                                  ~J?:                                     ^?G&                        ~@
^^^^^^^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!YGGGBGYB####BGB########BBB&&&&&&#GPPGPPP5J7!!!!!!!!!!?&.                   5.!#7   ??                                   ^?J^                              .......:!Y#                      ~@
^^^^^^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~?PGPP###B##&&&&#####&&&&&&&&&&&&&#B&&&&&&&##BGP5J7!!!!!?&.                    P:Y&J   ~J:                                   :?J!.             .^~!77???????777777???777B5B                   ~@
^^^^~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~75P55GGP55PBPG&&&&&&&&&&&&&&&&&&&&B5G##&&&&&&#####BGPJ7!!J&.                     #^!#P:  :J!                                    .7Y7.       ^!???7!~^^:...               YG7!JB                ~@
^^^^^^^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~?55PP5YJY5GBBYYG#&&&&&&&&&&&@@@&&#G55B&#GGG#&&&&&&#BB###P7?&.                       7^B#!   ??.                                     ~J?:  .7Y?^.                          :B&B57~P              ~@
^^^^^^^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!J5YY5YJYYPBB##555PG#&&&&&&&&&&&&#BGPPP#&#BP55#&&&&&&&&#B#B5?&.                        5:5&J   ~Y:                           ..:^^~~~~~!JGY757.        .:^~^~!!77???JJJJJJJJJG&&&&:?              ~@
^^^^^^^^^~~~~~~~~~~~^^^^^^~~~~~~~~~~~~~~~~~?55YYYYY5PGBB###PPPPPPGGBB#####BBBGGGGPG&#BP5YYG&&&&&&&#BGGG5J&.                         B^7&P:  :J!                     :^!777!~~^::::::.7#P^.:    ^75G##&&&&&&&&&&###BBGPP55YJJ??:Y              ~@
^^^^^^^^~~~~~~~~~~~^^^^^^^^~~~~~~~~~~~~~~7J5YYYPGGGGGB###&&BPPPPPPPPPPPGGGGGGGGBBB##BBG5YYP##&&&&##GPGGPY&.                          &7^B#!   ?J.              .^!7?7~:.            7##GB##Y:JG##BBGPP5YJJ???777???JJY5PPGBB##&               ~@
^^^~~~~~~~~~~~~~~~^^^^^^^^^^~~~~~~~^~~~!?Y5555GBBBGGBB###&&BGPPPPPPPPPGGGGGGGBBBB#BBGPP555PGGB#####BGPGP5&.                            Y:5&J   ~Y^          :!7?!^.           ..::.:#&&&&&&#PJ77???JYY5PGB##&&                                ~@
~~~~~~~~~~~~~~~~~^^^^~~^~~~~~^~~!!77??JJYYY5P5GBBGBBBB##&&&BGGPPPPPPPPPGGGGBBBB#BBGPP5YY5PGP55PBBBBBGPGP5&.                             B^?&G:  .J7     :~7?7^.       .:~7J5PGBGPY55GGGP5J77?P&                                               ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!?YY55YYJJJYYY5PPGBBBBBB###&&#BBGPGPPPPGGPGGGGBBBBBBGGGGPPPPGGPPP5PGGGGGGG5P&.                              &!~B#!   7J^~!7!^.      .:!JPB###GPY?77?YYJJJJY5G#                                                   ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7Y5YJYYYYYYY55PPGBBBBBBBB#&&#BBGGGPGGGPGGGGGGGBBBBBGGBBGGGGGGBBGP55PPGPPPPY5&.                                Y:5&Y.  ?5:.      .^?5B##BPY?77?YG#&                                                               ~@
~~~~~~~~~~~~~~~~~~~~~~~~~~~~!7JYJJJY555555PGGBBBBBBBB##GGGBGGGGPPGGGGGGGGGBB##BGGBBBBBBBBB#BBGGPPPPP5PP??&.                                 G:?&G^ Y?    .~?PB#B5J77?YP#&                                                                     ~@
~~~~~~~~~~~~^~~~~~~~~~~~~!7?JYYYY55P5PPPPGGGGBBBBBB#&&GJ?JJY5PPPPPGGGGGGGGGGGPGBBBBBB#BB###BBGGGPPGGPPP?J&.                                  &!~##7P~ ^?5GG5J77?5G&                                                                           ~@
~~~~~~~^^^^^^~~~~~~~~~~!7?JJYYYY555YJY5GBBBGBBBBBB#&&#5J?777777???JJJJJJJJJJJYB#BBBBB#####BGGGGGPGGGPPP5P&.                                    J:P&#5PPY?7?YG&                                                                                ~@
^^^^^^^^^^^~~~~~~~~~~!7JYJJYY55Y5PY55PGBB##BGBBB#####GJ???777!!7!777777777???P##BB####&&#BBGBGPPPPPPPPP5P&.                                     P:??77JP#                                                                                     ~@
^^^^^^^^^^^~~~~~~~~~7JJJYYY555PPPYYYPGBBBBBGPGGGB#BBB5???77777777777777777??YBBBBB##B####BGBBPP55PPGGPPPG&.                                      BYB&                                                                                         ~@
^^^^^^^^~~~~~~~~~~!?JYYYY5555PPPYYYYYPGGGPP5Y5PPPGBBGYJ?777777777777777777775BBBB#BBB#BBPJJYPGGGGGGGBBGGB&.                                                                                                                                   ~@
^^^^^^^~~~~~~~~~~7JJYYYY55P5PP5YYYYYYY555YYYY55PPPGBB5???77777!!!!!!7777!77JGBBBBBBGBBB5?JYPBBBBGGGGGGGGG&.                                                                                                                                   ~@
^^^^~~~~~~~~~~~7?JYJYYYY5PGPP5YYY55YYYY55555555GPPPGBGJ??77777!!!7!!!!!77!75BBGGGGPGGG5JJYJPBBBGGGGGGBBGB&.                                                                                                                                   ~@
^^^^~~~~~~~~~~7JJYYYYYY55PGPPYYYY55Y55555555555GBPPPGGJ??77777!!!!!!!!!77!?PGGP555PPPY?JYYYGB#########BGB&.                                                                                                                                   ~@
^^^^~~~~~~~~!?JYYYYYYYY5PPGG5YYY555YPPPPPPPPPP5GGPPPGG5??777!777?Y7!!!!7!?JYY5555PP5J?JY5Y5B####BBBBBGGPG&.                                                                                                                                   ~@
^^^~~~~~~~~7?JJYY555555PGGGG5YYY55Y5PGGPPPPPGPPGPPPGGG5??77777!!YY7!7!!!!?Y55YY5555J??J55YY5PPGPPGPPPPPPG&.                                                                                                                                   ~@
~~~~~~~~~~7JJJJYY55555PPGGGGP55555Y5PGPPPPPGGPPGPPPGGG5??777!7555777777777YY55J??JJYYYJYYYYYJ5PPPGGPPPPPB&.                                                                                                                                   ~@
~~~~~~~~!?JJJJYYY5555PGGGGBBBPP55YY55P5PPPPGGPGGPPPPBGPJ7777?Y&&J77777!!7?YJ????JJJJJJJYYJYJJJ5PGGGPPPPG#&.                                                                                                                                   ~@
~~~~~~~?JYYYYYYY555PPGGGGBBBBGPPYYY55YYYYYY55PPPPP55B#G5?77JYY&&Y!777777JJJ??JJJJYJJJYYYYJJJYJYPGGGGGGGB#&.                                                                                                                                   ~@
~~~~~7?JJYYY5555PPPPGPGGGGGGBBG5YYY55555YYYYYYYYYYY5B#BPJ?Y5GG5GBPJ77777YPPPPP5YYY5555YJJJJJJJJYPGGGGBB##&.                                                                                                                                   ~@
~~~~7JYYYYY555PPPGGPPGGGGGGGBBGYYYY5PP5555555555555PB#BPPPY???77?JPPJ?7?YBBBBBG5YY5555YJJYYYJYYY5PPPGB#BB&.                                                                                                                                   ~@
!!!!?5555YY5PPGGGGGBGGBBGBBBB#GYYY55PPPPPPPPPPPPPPGB##BYJ5J???????7Y5J??YBBBGPPPGGPP55YJJYYYYYY5PPGGP5GGB&.                                                                                                                                   ~@
!!!7J5PP555PGGGGGBBBBBBB#B####PYY555PPPPPPPGGGGGGGB###B5JYYJ?JYJJJJ5YJJJYB#BGGGGB&&&&B5JYYY555YPGGBBBP55G&7~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~Y@

```