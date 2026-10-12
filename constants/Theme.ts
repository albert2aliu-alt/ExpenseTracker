export const Theme = {
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 },
  radius: { sm: 10, md: 15, lg: 21, xl: 30, full: 9999 },
  fontSize: { xs: 11, sm: 13, md: 15, lg: 17, xl: 20, xxl: 24, xxxl: 32 },
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
    extraBold: '800' as const,
  },
  shadow: {
    sm: {
      boxShadow: '0 3px 10px rgba(15, 41, 66, 0.06)',
      elevation: 2,
    },
    md: {
      boxShadow: '0 8px 20px rgba(15, 41, 66, 0.10)',
      elevation: 5,
    },
    lg: {
      boxShadow: '0 14px 32px rgba(15, 41, 66, 0.18)',
      elevation: 10,
    },
  },
};
