import "./App.css"
function PlanMszy(){

    return (
        <div style={{textAlign: "left"}}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <title></title>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n\t\t\tbody { line-height:108%; font-family:Calibri; font-size:10pt }\n\t\t\tp { margin:0pt 0pt 8pt }\n\t\t\tli { margin-top:0pt; margin-bottom:8pt }\n\t\t\tspan.Hyperlink { text-decoration:underline; color:#0000ff }\n\t\t\t.awlist1 { list-style:none; counter-reset:awlistcounter2_0 }\n\t\t\t.awlist1 > li:before { content:counter(awlistcounter2_0, upper-latin) ')'; counter-increment:awlistcounter2_0 }\n\t\t\t.awlist2 { list-style:none; counter-reset:awlistcounter3_0 }\n\t\t\t.awlist2 > li:before { content:counter(awlistcounter3_0, upper-latin) ')'; counter-increment:awlistcounter3_0 }\n@media (max-width: 900px) { \nimg { \n   max-width: 100%;\n   height: auto;\n}\n\n.table-container {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n\ntable {\n    width: 100%;\n    border-collapse: collapse;\n}\n\ntd, th {\n    padding: 8px;\n    text-align: left;\n    border: 1px solid #ddd;\n}\n}\t\n\n\n\t\t"
                }}
            />
            <p style={{ lineHeight: "108%", fontSize: "14pt" }}>
                <strong>&nbsp;</strong>
            </p>
            <p style={{ lineHeight: "108%", fontSize: "14pt" }}>
                <strong>
                    <u>PORZĄDEK STAŁY MSZY ŚW. i NABOŻEŃSTW</u>
                </strong>
            </p>
            <p style={{ lineHeight: "108%", fontSize: "14pt" }}>
                <strong>&nbsp;</strong>
            </p>
            <ol style={{ margin: "0pt", paddingLeft: "0pt" }}>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
                    <u>Msze św. w Niedzielę i święta</u> o g. 9.00, 11.00 i 16.00 ( od X do IV
                    o 15.00 )
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
                    <u>Msze św. na tygodniu</u> o g. 7.30 i 18.00 ( od X do IV o 17.00 )
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
                    <u>Msze św. na cmentarzu</u>: Niedziele przed odpustem majowym i
                    wrześniowym, 6 sierpnia, 1 i 2 listopada.
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
                    <u>Msze św. w j. łacińskim</u> przez 4 kolejne Niedziele Adwentu o g. 6.00
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
                    <u>Nabożeństwa stałe:</u>
                </li>
            </ol>
            <ol className="awlist1" style={{ margin: "0pt", paddingLeft: "0pt" }}>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "2.76pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;{" "}
      </span>
                    . 1 czwartek m-ca do Chrystusa Arcykapłana w int. kapłanów, o powołania i
                    w int. Diecezji
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "3.39pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;{" "}
      </span>
                    . 1 piątek m-ca do NSPJ w int. dusz czyśćcowych
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "3.83pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;&nbsp;{" "}
      </span>
                    . 1 sobota m-ca w int. Wynagradzającej Niepokalanemu Sercu NMP
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "2.41pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;{" "}
      </span>
                    . 3 czwartek m-ca do Ducha Świętego w różnych intencjach Kościoła,
                    Ojczyzny i świata
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "4.41pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;&nbsp;{" "}
      </span>
                    . Nabożeństwo Eucharystyczne codzienne ( po Mszy św. wieczornej ) w int.
                    Pokoju, zainicjowane 24 lutego 2022 r.
                </li>
            </ol>
            <ol start={6} style={{ margin: "0pt", paddingLeft: "0pt" }}>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
                    <u>Pozostałe nabożeństwa odprawiane w kościele</u> : do NSPJ w I Ndz. m-ca
                    ( po każdej Mszy św.), Gorzkie Żale ( w W. Poście po sumie ), Droga
                    Krzyżowa w piątki W. Postu o g. 16.30, majowe , czerwcowe i różańcowe (w X
                    )
                </li>
            </ol>
            <p style={{ lineHeight: "108%", fontSize: "14pt" }}>
                <strong>7.</strong>
                <strong>
                    <u>Nabożeństwa w plenerze</u>
                </strong>
                <strong>: </strong>
            </p>
            <ol className="awlist2" style={{ margin: "0pt", paddingLeft: "0pt" }}>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "2.76pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;{" "}
      </span>
                    . Droga Krzyżowa przez wieś, trasą stałych stacji w Mokremlipiu (
                    Niedziela Palmowa, Święto Podwyższenia Krzyża 14 IX )
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "3.39pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;{" "}
      </span>
                    . Procesja Różańcowa przez całą parafię, trasą stałych stacji różańcowych
                    - 15 km ( w 3 Niedzielę lipca, g. 13.00-19.00 ) od Sułowca, przez
                    Zakłodzie, Sąsiadkę, Mokrelipie i Zaburze.
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "3.83pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;&nbsp;{" "}
      </span>
                    . Droga Krzyżowa po cmentarzu trasą stałych stacji ( przeddzień odpustów
                    parafialnych, w okresie listopada )
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "2.41pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;{" "}
      </span>
                    . Poświęcenia - obchody pól ( w Niedziele maja i czerwca ): dłuższe
                    procesje przez wsie i pola, zakończone Mszą św. i wiejską biesiadą w
                    remizie lub plenerze.
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "4.41pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;&nbsp;{" "}
      </span>
                    . 13 maja - nabożeństwo zawierzenia parafii Niepokalanemu Sercu NMP przy
                    kapliczce w Zaburzu ( pod tym samym tytułem )
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "4.81pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;&nbsp;{" "}
      </span>
                    . Nabożeństwa majowe w wioskach ( prowadzone przez mieszkańców )
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
      <span
          style={{
              width: "2.32pt",
              font: '7pt "Times New Roman"',
              display: "inline-block"
          }}
      >
        &nbsp;{" "}
      </span>
                    .Procesje różańcowe w październiku w każdej wiosce w plenerze w każdą
                    kolejną Niedzielę m-ca ( w ramach stacji tam istniejących ).
                </li>
            </ol>
            <p style={{ lineHeight: "108%", fontSize: "14pt" }}>
                <strong>GRUPY DUSZPASTERSKIE</strong>
            </p>
            <p style={{ lineHeight: "108%", fontSize: "14pt" }}>
                <strong>&nbsp;</strong>
            </p>
            <ol style={{ margin: "0pt", paddingLeft: "0pt" }}>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
                    Koła żywego różańca misyjne ( 6 róż, w tym 1 męska )
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
                    Grupa Adoracyjna ( obsługuje nabożeństwo 1 sobót m-ca. )
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
                    Liturgiczna Służba Ołtarza ( 20 ministrantów , 10 lektorów. Zbiórki w
                    piątki i soboty )
                </li>
                <li
                    style={{
                        lineHeight: "108%",
                        fontSize: "14pt",
                        fontWeight: "bold",
                        listStylePosition: "inside"
                    }}
                >
                    Schola Muzyczna ( 6 dorosłych osób )
                </li>
            </ol>
            <p style={{ lineHeight: "108%", fontSize: "14pt" }}>
                <strong>&nbsp;</strong>
            </p>
            <p style={{ lineHeight: "108%", fontSize: "14pt" }}>
                <strong>KANCELARIA PARAFIALNA </strong>
            </p>
            <p style={{ lineHeight: "108%", fontSize: "14pt" }}>
                <strong>&nbsp;</strong>
            </p>
            <p style={{ lineHeight: "108%", fontSize: "14pt" }}>
                <strong>
                    Czynna codziennie wg. potrzeb wiernych i interesantów. Archiwum metrykalne
                    parafii kompletne od 1814 r.{" "}
                </strong>
            </p>
        </div>

    )
}

export default PlanMszy