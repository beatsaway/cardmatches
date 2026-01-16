const multiplicationTable = [
    // 2 times table
    {ctext: "二一得", cans: "二", mtext: "2 x 1", mans: "2"},
    {ctext: "二二得", cans: "四", mtext: "2 x 2", mans: "4"},
    {ctext: "二三得", cans: "六", mtext: "2 x 3", mans: "6"},
    {ctext: "二四得", cans: "八", mtext: "2 x 4", mans: "8"},
    {ctext: "二五得", cans: "一十", mtext: "2 x 5", mans: "10"},
    {ctext: "二六一", cans: "十二", mtext: "2 x 6", mans: "12"},
    {ctext: "二七一", cans: "十四", mtext: "2 x 7", mans: "14"},
    {ctext: "二八一", cans: "十六", mtext: "2 x 8", mans: "16"},
    {ctext: "二九一", cans: "十八", mtext: "2 x 9", mans: "18"},
    
    // 3 times table
    {ctext: "三一得", cans: "三", mtext: "3 x 1", mans: "3"},
    {ctext: "三二得", cans: "六", mtext: "3 x 2", mans: "6"},
    {ctext: "三三得", cans: "九", mtext: "3 x 3", mans: "9"},
    {ctext: "三四一", cans: "十二", mtext: "3 x 4", mans: "12"},
    {ctext: "三五一", cans: "十五", mtext: "3 x 5", mans: "15"},
    {ctext: "三六一", cans: "十八", mtext: "3 x 6", mans: "18"},
    {ctext: "三七", cans: "二十一", mtext: "3 x 7", mans: "21"},
    {ctext: "三八", cans: "二十四", mtext: "3 x 8", mans: "24"},
    {ctext: "三九", cans: "二十七", mtext: "3 x 9", mans: "27"},
    
    // 4 times table
    {ctext: "四一得", cans: "四", mtext: "4 x 1", mans: "4"},
    {ctext: "四二得", cans: "八", mtext: "4 x 2", mans: "8"},
    {ctext: "四三一", cans: "十二", mtext: "4 x 3", mans: "12"},
    {ctext: "四四一", cans: "十六", mtext: "4 x 4", mans: "16"},
    {ctext: "四五中", cans: "二十", mtext: "4 x 5", mans: "20"},
    {ctext: "四六", cans: "二十四", mtext: "4 x 6", mans: "24"},
    {ctext: "四七", cans: "二十八", mtext: "4 x 7", mans: "28"},
    {ctext: "四八", cans: "三十二", mtext: "4 x 8", mans: "32"},
    {ctext: "四九", cans: "三十六", mtext: "4 x 9", mans: "36"},
    
    // 5 times table
    {ctext: "五一得", cans: "五", mtext: "5 x 1", mans: "5"},
    {ctext: "五二得", cans: "一十", mtext: "5 x 2", mans: "10"},
    {ctext: "五三一", cans: "十五", mtext: "5 x 3", mans: "15"},
    {ctext: "五四中", cans: "二十", mtext: "5 x 4", mans: "20"},
    {ctext: "五五", cans: "二十五", mtext: "5 x 5", mans: "25"},
    {ctext: "五六中", cans: "三十", mtext: "5 x 6", mans: "30"},
    {ctext: "五七", cans: "三十五", mtext: "5 x 7", mans: "35"},
    {ctext: "五八中", cans: "四十", mtext: "5 x 8", mans: "40"},
    {ctext: "五九", cans: "四十五", mtext: "5 x 9", mans: "45"},
    
    // 6 times table
    {ctext: "六一得", cans: "六", mtext: "6 x 1", mans: "6"},
    {ctext: "六二一", cans: "十二", mtext: "6 x 2", mans: "12"},
    {ctext: "六三一", cans: "十八", mtext: "6 x 3", mans: "18"},
    {ctext: "六四", cans: "二十四", mtext: "6 x 4", mans: "24"},
    {ctext: "六五中", cans: "三十", mtext: "6 x 5", mans: "30"},
    {ctext: "六六", cans: "三十六", mtext: "6 x 6", mans: "36"},
    {ctext: "六七", cans: "四十二", mtext: "6 x 7", mans: "42"},
    {ctext: "六八", cans: "四十八", mtext: "6 x 8", mans: "48"},
    {ctext: "六九", cans: "五十四", mtext: "6 x 9", mans: "54"},
    
    // 7 times table
    {ctext: "七一得", cans: "七", mtext: "7 x 1", mans: "7"},
    {ctext: "七二一", cans: "十四", mtext: "7 x 2", mans: "14"},
    {ctext: "七三", cans: "二十一", mtext: "7 x 3", mans: "21"},
    {ctext: "七四", cans: "二十八", mtext: "7 x 4", mans: "28"},
    {ctext: "七五", cans: "三十五", mtext: "7 x 5", mans: "35"},
    {ctext: "七六", cans: "四十二", mtext: "7 x 6", mans: "42"},
    {ctext: "七七", cans: "四十九", mtext: "7 x 7", mans: "49"},
    {ctext: "七八", cans: "五十六", mtext: "7 x 8", mans: "56"},
    {ctext: "七九", cans: "六十三", mtext: "7 x 9", mans: "63"},
    
    // 8 times table
    {ctext: "八一得", cans: "八", mtext: "8 x 1", mans: "8"},
    {ctext: "八二", cans: "一十六", mtext: "8 x 2", mans: "16"},
    {ctext: "八三", cans: "二十四", mtext: "8 x 3", mans: "24"},
    {ctext: "八四", cans: "三十二", mtext: "8 x 4", mans: "32"},
    {ctext: "八五中", cans: "四十", mtext: "8 x 5", mans: "40"},
    {ctext: "八六", cans: "四十八", mtext: "8 x 6", mans: "48"},
    {ctext: "八七", cans: "五十六", mtext: "8 x 7", mans: "56"},
    {ctext: "八八", cans: "六十四", mtext: "8 x 8", mans: "64"},
    {ctext: "八九", cans: "七十二", mtext: "8 x 9", mans: "72"},
    
    // 9 times table
    {ctext: "九一得", cans: "九", mtext: "9 x 1", mans: "9"},
    {ctext: "九二", cans: "十八", mtext: "9 x 2", mans: "18"},
    {ctext: "九三", cans: "二十七", mtext: "9 x 3", mans: "27"},
    {ctext: "九四", cans: "三十六", mtext: "9 x 4", mans: "36"},
    {ctext: "九五", cans: "四十五", mtext: "9 x 5", mans: "45"},
    {ctext: "九六", cans: "五十四", mtext: "9 x 6", mans: "54"},
    {ctext: "九七", cans: "六十三", mtext: "9 x 7", mans: "63"},
    {ctext: "九八", cans: "七十二", mtext: "9 x 8", mans: "72"},
    {ctext: "九九", cans: "八十一", mtext: "9 x 9", mans: "81"}
];

 

