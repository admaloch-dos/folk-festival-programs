// https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f02_1954_01_01.jpg
// https://www.floridamemory.com/FMP/selected_documents/medium/s1619_.jpg

const itemData = [
    {
      "year": 1953,
      "url": 333885,
      "text": "1st Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/large/s1619_b001_f01_1953_01_01.jpg",
      "type": "Schedule"
    },
    {
      "year": 1954,
      "url": 333886,
      "text": "2nd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f02_1954_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1955,
      "url": 333888,
      "text": "3rd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f03_1955_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1955,
      "url": 333889,
      "text": "3rd Annual Florida Folk Festival Schedule",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f03_1955_02_01.jpg",
      "type": "Schedule"
    },
    {
      "year": 1956,
      "url": 333890,
      "text": "4th Annual Florida Folk Festival Schedule",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f04_1956_01_01.jpg",
      "type": "Schedule"
    },
    {
      "year": 1957,
      "url": 333891,
      "text": "5th Annual Florida Folk Festival Schedule",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f05_1957_01_01.jpg",
      "type": "Schedule"
    },
    {
      "year": 1958,
      "url": 333892,
      "text": "6th Annual Florida Folk Festival Schedule",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f06_1958_01_01.jpg",
      "type": "Schedule"
    },
    {
      "year": 1959,
      "url": 333893,
      "text": "7th Annual Florida Folk Festival Schedule",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f07_1959_01_01.jpg",
      "type": "Schedule"
    },
    {
      "year": 1960,
      "url": 333894,
      "text": "8th Annual Florida Folk Festival Schedule",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f08_1960_01_01.jpg",
      "type": "Schedule"
    },
    {
      "year": 1961,
      "url": 333895,
      "text": "9th Annual Florida Folk Festival Schedule",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f09_1961_01_01.jpg",
      "type": "Schedule"
    },
    {
      "year": 1962,
      "url": 333896,
      "text": "10th Annual Florida Folk Festival Schedule",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f10_1962_01_01.jpg",
      "type": "Schedule"
    },
    {
      "year": 1963,
      "url": 333897,
      "text": "11th Annual Florida Folk Festival Schedule",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f11_1963_01_01.jpg",
      "type": "Schedule"
    },
    {
      "year": 1964,
      "url": 333898,
      "text": "12th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f12_1964_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1965,
      "url": 333899,
      "text": "13th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f13_1965_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1967,
      "url": 333901,
      "text": "15th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b001_f15_1967_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1968,
      "url": 333902,
      "text": "16th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b002_f01_1968_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1969,
      "url": 333903,
      "text": "17th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b002_f02_1969_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1970,
      "url": 333904,
      "text": "18th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/fpc/memory/collections/folklife/festival_programs/1970/1970-01.jpg",
      "type": "Program"
    },
    {
      "year": 1971,
      "url": 333905,
      "text": "19th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/fpc/memory/collections/folklife/festival_programs/1971/1971-01.jpg",
      "type": "Program"
    },
    {
      "year": 1972,
      "url": 333906,
      "text": "20th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/fpc/memory/collections/folklife/festival_programs/1972/1972-01.jpg",
      "type": "Program"
    },
    {
      "year": 1973,
      "url": 333907,
      "text": "21st Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/fpc/memory/collections/folklife/festival_programs/1973/1973-01.jpg",
      "type": "Program"
    },
    {
      "year": 1975,
      "url": 333908,
      "text": "23rd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/fpc/memory/collections/folklife/festival_programs/1975/1975-03.jpg",
      "type": "Program"
    },
    {
      "year": 1976,
      "url": 333909,
      "text": "24th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b002_f09_1976_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1977,
      "url": 333910,
      "text": "25th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/fpc/memory/collections/folklife/festival_programs/1977/1977-03.jpg",
      "type": "Program"
    },
    {
      "year": 1978,
      "url": 333911,
      "text": "26th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/fpc/memory/collections/folklife/festival_programs/1978/1978-02.jpg",
      "type": "Program"
    },
    {
      "year": 1979,
      "url": 333912,
      "text": "27th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/fpc/memory/collections/folklife/festival_programs/1979/1979-01.jpg",
      "type": "Program"
    },
    {
      "year": 1980,
      "url": 333913,
      "text": "28th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b002_f13_1980_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1981,
      "url": 333914,
      "text": "29th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b002_f14_1981_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1982,
      "url": 333915,
      "text": "30th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b002_f15_1982_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1983,
      "url": 333916,
      "text": "31st Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b003_f01_1983_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1984,
      "url": 333917,
      "text": "32nd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b003_f02_1984_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1985,
      "url": 333918,
      "text": "33rd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b003_f03_1985_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1986,
      "url": 333919,
      "text": "34th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b003_f04_1986_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1987,
      "url": 333920,
      "text": "35th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b003_f05_1987_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1988,
      "url": 333921,
      "text": "36th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b003_f06_1988_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1989,
      "url": 333922,
      "text": "37th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b003_f07_1989_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1990,
      "url": 333923,
      "text": "38th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b003_f08_1990_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1991,
      "url": 333924,
      "text": "39th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b004_f01_1991_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1992,
      "url": 333925,
      "text": "40th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b004_f02_1992_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1993,
      "url": 333926,
      "text": "41st Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b004_f03_1993_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1994,
      "url": 333927,
      "text": "42nd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b005_f01_1994_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1995,
      "url": 333928,
      "text": "43rd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b005_f02_1995_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1996,
      "url": 333929,
      "text": "44th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b005_f03_1996_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1997,
      "url": 333930,
      "text": "45th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b005_f04_1997_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1998,
      "url": 333931,
      "text": "46th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b005_f05_1998_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 1999,
      "url": 333932,
      "text": "47th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b005_f06_1999_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2000,
      "url": 333933,
      "text": "48th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b006_f01_2000_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2001,
      "url": 333934,
      "text": "49th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b006_f02_2001_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2002,
      "url": 333935,
      "text": "50th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b006_f03_2002_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2003,
      "url": 333936,
      "text": "51st Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b006_f04_2003_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2004,
      "url": 333937,
      "text": "52nd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b006_f05_2004_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2005,
      "url": 333938,
      "text": "53rd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b006_f06_2005_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2006,
      "url": 333939,
      "text": "54th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b006_f07_2006_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2007,
      "url": 333940,
      "text": "55th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b007_f01_2007_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2008,
      "url": 333941,
      "text": "56th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b007_f02_2008_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2009,
      "url": 333942,
      "text": "57th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b007_f03_2009_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2010,
      "url": 333943,
      "text": "58th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b007_f04_2010_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2011,
      "url": 333944,
      "text": "59th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b007_f05_2011_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2012,
      "url": 333945,
      "text": "60th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b007_f06_2012_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2013,
      "url": 333946,
      "text": "61st Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b007_f07_2013_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2014,
      "url": 333947,
      "text": "62nd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b007_f08_2014_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2015,
      "url": 333948,
      "text": "63rd Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b007_f09_2015_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2016,
      "url": 333949,
      "text": "64th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b008_f01_2016_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2017,
      "url": 333950,
      "text": "65th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b008_f02_2017_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2018,
      "url": 336082,
      "text": "66th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b008_f03_2018_01_01.jpg",
      "type": "Program"
    },
    {
      "year": 2019,
      "url": 346138,
      "text": "67th Annual Florida Folk Festival Program",
      "img": "https://www.floridamemory.com/FMP/selected_documents/medium/s1619_b008_f04_2019_01_01.jpg",
      "type": "Program"
    }
  ]