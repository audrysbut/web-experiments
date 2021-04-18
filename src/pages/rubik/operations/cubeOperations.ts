export type CubeData = number[];

export const initialize = (): CubeData => {
  return Array.from(Array(54).keys());
};

//TODO: move operations into separate files
export const left = (input: CubeData): CubeData => {
  const val = [...input];
  //TL
  const tl = val[45];
  val[45] = val[36];
  val[36] = val[18];
  val[18] = val[0];
  val[0] = tl;

  //ML
  const ml = val[48];
  val[48] = val[39];
  val[39] = val[21];
  val[21] = val[3];
  val[3] = ml;

  //BL
  const bl = val[51];
  val[51] = val[42];
  val[42] = val[24];
  val[24] = val[6];
  val[6] = bl;

  //rotate corners
  const rtl = val[9];
  val[9] = val[15];
  val[15] = val[17];
  val[17] = val[11];
  val[11] = rtl;

  //rotate center
  const rtm = val[10];
  val[10] = val[12];
  val[12] = val[16];
  val[16] = val[14];
  val[14] = rtm;

  return val;
};

export const leftB = (input: CubeData): CubeData => {
  //TODO: implement better
  return left(left(left(input)));
};

export const right = (input: CubeData): CubeData => {
  const val = [...input];

  //TR
  const tr = val[2];
  val[2] = val[20];
  val[20] = val[38];
  val[38] = val[47];
  val[47] = tr;

  //MR
  const mr = val[5];
  val[5] = val[23];
  val[23] = val[41];
  val[41] = val[50];
  val[50] = mr;

  //BR
  const br = val[8];
  val[8] = val[26];
  val[26] = val[44];
  val[44] = val[53];
  val[53] = br;

  //rotate corners
  const rtl = val[27];
  val[27] = val[33];
  val[33] = val[35];
  val[35] = val[29];
  val[29] = rtl;

  //rotate center
  const rtm = val[28];
  val[28] = val[30];
  val[30] = val[34];
  val[34] = val[32];
  val[32] = rtm;

  return val;
};

export const rightB = (input: CubeData) => {
  //TODO: implement better
  return right(right(right(input)));
};

export const top = (input: CubeData) => {
  const val = [...input];

  //rotate corner
  const rtl = val[0];
  val[0] = val[6];
  val[6] = val[8];
  val[8] = val[2];
  val[2] = rtl;

  //rotate center
  const rtm = val[1];
  val[1] = val[3];
  val[3] = val[7];
  val[7] = val[5];
  val[5] = rtm;

  //TL
  const tl = val[9];
  val[9] = val[18];
  val[18] = val[27];
  val[27] = val[53];
  val[53] = tl;

  //TM
  const tm = val[10];
  val[10] = val[19];
  val[19] = val[28];
  val[28] = val[52];
  val[52] = tm;

  //TR
  const tr = val[11];
  val[11] = val[20];
  val[20] = val[29];
  val[29] = val[51];
  val[51] = tr;

  return val;
};

export const topB = (input: CubeData) => {
  //TODO: implement better
  return top(top(top(input)));
};

export const bottom = (input: CubeData): CubeData => {
  const val = [...input];

  //rotate corner
  const rtl = val[36];
  val[36] = val[42];
  val[42] = val[44];
  val[44] = val[38];
  val[38] = rtl;

  //rotate center
  const rtm = val[37];
  val[37] = val[39];
  val[39] = val[43];
  val[43] = val[41];
  val[41] = rtm;

  //BR
  const br = val[35];
  val[35] = val[26];
  val[26] = val[15];
  val[15] = val[45];
  val[45] = br;

  //BM
  const bm = val[34];
  val[34] = val[25];
  val[25] = val[16];
  val[16] = val[46];
  val[46] = bm;

  //BL
  const bl = val[33];
  val[33] = val[24];
  val[24] = val[17];
  val[17] = val[47];
  val[47] = bl;

  return val;
};

export const bottomB = (input: CubeData) => {
  //TODO: implement better
  return bottom(bottom(bottom(input)));
};

export const back = (input: CubeData): CubeData => {
  const val = [...input];

  //rotate corner
  const rtl = val[45];
  val[45] = val[51];
  val[51] = val[53];
  val[53] = val[47];
  val[47] = rtl;

  //rotate center
  const rtm = val[46];
  val[46] = val[48];
  val[48] = val[52];
  val[52] = val[50];
  val[50] = rtm;

  //BR
  const br = val[44];
  val[44] = val[15];
  val[15] = val[0];
  val[0] = val[29];
  val[29] = br;

  //MR
  const mr = val[32];
  val[32] = val[43];
  val[43] = val[12];
  val[12] = val[1];
  val[1] = mr;

  //BR
  const br2 = val[35];
  val[35] = val[42];
  val[42] = val[9];
  val[9] = val[2];
  val[2] = br2;

  return val;
};

export const backB = (input: CubeData) => {
  //TODO: implement better
  return back(back(back(input)));
};

export const front = (input: CubeData): CubeData => {
  const val = [...input];

  //rotate corner
  const rtl = val[18];
  val[18] = val[24];
  val[24] = val[26];
  val[26] = val[20];
  val[20] = rtl;

  //rotate center
  const rtm = val[19];
  val[19] = val[21];
  val[21] = val[25];
  val[25] = val[23];
  val[23] = rtm;

  //BR
  const br = val[8];
  val[8] = val[11];
  val[11] = val[36];
  val[36] = val[33];
  val[33] = br;

  //BM
  const bm = val[7];
  val[7] = val[14];
  val[14] = val[37];
  val[37] = val[30];
  val[30] = bm;

  //BL
  const bl = val[6];
  val[6] = val[17];
  val[17] = val[38];
  val[38] = val[27];
  val[27] = bl;

  return val;
}

export const frontB = (input: CubeData) => {
  //TODO: implement better
  return front(front(front(input)));
};