const e=`# dr.derp\r
dr.derp-hypernetworks:\r
    front-shot:\r
        full-body:\r
            - "<hypernetwork:A1 Extra-600000:\${weight}>"\r
        medium-shot:\r
            - <hypernetwork:A2-440000:\${weight}>\r
        cowboy-shot:\r
            - <hypernetwork:A3-200000:\${weight}>closeup\r
        upper-body-shot:\r
            - <hypernetwork:A4-200000:\${weight}>closeup\r
        close-up-shot:\r
            - <hypernetwork:A5-200000:\${weight}>closeup\r
        extreme-close-up-shot:\r
            - <hypernetwork:A6-200000:\${weight}>closeup\r
    side-shot:\r
        full-body:\r
            - <hypernetwork:B1-186000-260000:\${weight}>side\r
        medium-shot:\r
            - <hypernetwork:B2-200000-100000:\${weight}>side\r
        cowboy-shot:\r
            - <hypernetwork:B3-200000-280000:\${weight}>side\r
        upper-body-shot:\r
            - <hypernetwork:B4-200000-280000:\${weight}>side closeup\r
        close-up-shot:\r
            - <hypernetwork:B5-200000:\${weight}>side closeup\r
        extreme-close-up-shot:\r
            - <hypernetwork:B6-200000:\${weight}>side closeup\r
    profile-shot:\r
        full-body:\r
            - <hypernetwork:C1-185000-300000:\${weight}>profile\r
        medium-shot:\r
            - <hypernetwork:C2-200000-300000:\${weight}>profile\r
        cowboy-shot:\r
            - <hypernetwork:C3-200000-300000:\${weight}>profile\r
        upper-body-shot:\r
            - <hypernetwork:C4-200000-260000:\${weight}>profile closeup\r
        close-up-shot:\r
            - <hypernetwork:C5-200000:\${weight}>profile closeup\r
        extreme-close-up-shot:\r
            - <hypernetwork:C6-200000:\${weight}>profile closeup\r
    back-side-shot:\r
        full-body:\r
            - <hypernetwork:D1-180000:\${weight}>back side\r
        medium-shot:\r
            - <hypernetwork:D2-200000:\${weight}>back side\r
        cowboy-shot:\r
            - <hypernetwork:D3-200000:\${weight}>back side\r
        upper-body-shot:\r
            - <hypernetwork:D4-270000:\${weight}>head back closeup\r
        close-up-shot:\r
            - <hypernetwork:D5-200000-260000:\${weight}>head back closeup\r
        extreme-close-up-shot:\r
            - <hypernetwork:D6-200000:\${weight}>head back closeup\r
    back-shot:\r
        full-body:\r
            - <hypernetwork:E1-188000:\${weight}>back\r
        medium-shot:\r
            - <hypernetwork:E2-200000:\${weight}>back\r
        cowboy-shot:\r
            - <hypernetwork:E3-200000:\${weight}>back\r
        upper-body-shot:\r
            - <hypernetwork:E4-200000:\${weight}>head back closeup \r
        close-up-shot:\r
            - <hypernetwork:E5-200000:\${weight}>head back closeup \r
        extreme-close-up-shot:\r
            - <hypernetwork:E6-200000-140000:\${weight}>head back closeup\r
weight:\r
    strong:\r
        - "0.55"\r
    moderate:\r
        - "0.45"\r
    medium:\r
        - "0.35"\r
    modest:\r
        - "0.25"\r
    weak:\r
        - "0.15"`;export{e as default};
