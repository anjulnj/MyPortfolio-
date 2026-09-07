// Simulated powder XRD pattern for FAU (Faujasite), computed directly from
// the same real T-atom (Si) framework coordinates used in the 3D scene —
// not looked up or fabricated. Method: structure factor F(hkl) = Σ f_Si ·
// exp(2πi(hx+ky+lz)) over all 192 T-atoms in the unit cell, intensity ∝
// |F|² with a Lorentz–polarization correction, Cu Kα1 radiation
// (λ = 1.5406 Å), peak positions from Bragg's law on the real unit cell
// (a = 24.345 Å, space group Fd-3m). Framework-only approximation (no O,
// no extra-framework cations) — the low-angle peak positions and their
// relative ordering match the well-known published FAU/zeolite-Y pattern
// closely (e.g. 111 ≈ 6.2°, 220 ≈ 10.3°, 311 ≈ 12.0°, 331 ≈ 15.9°).
export interface XrdPeak {
  twoTheta: number;
  intensity: number;
}

export const fauXrdPattern: XrdPeak[] = [{"twoTheta": 6.28, "intensity": 100.0}, {"twoTheta": 10.27, "intensity": 17.2}, {"twoTheta": 12.05, "intensity": 14.8}, {"twoTheta": 15.85, "intensity": 18.6}, {"twoTheta": 18.93, "intensity": 8.1}, {"twoTheta": 20.62, "intensity": 7.8}, {"twoTheta": 23.09, "intensity": 3.4}, {"twoTheta": 23.95, "intensity": 9.3}, {"twoTheta": 27.39, "intensity": 6.7}, {"twoTheta": 30.02, "intensity": 3.7}, {"twoTheta": 31.15, "intensity": 7.3}, {"twoTheta": 31.81, "intensity": 8.4}, {"twoTheta": 32.88, "intensity": 4.2}, {"twoTheta": 34.53, "intensity": 11.1}, {"twoTheta": 35.14, "intensity": 4.7}, {"twoTheta": 36.12, "intensity": 3.7}, {"twoTheta": 36.7, "intensity": 5.7}, {"twoTheta": 37.65, "intensity": 6.0}, {"twoTheta": 39.67, "intensity": 3.2}];
