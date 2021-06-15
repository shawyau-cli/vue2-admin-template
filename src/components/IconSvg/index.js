import iconsvg from './index.vue';

/**
 * 自动导入 assets/iconsvg 下svg文件
 */
export function importAllSvg() {
  try {
    const requireContext = require.context(
      '../../assets/iconsvg',
      false,
      /\.svg$/,
    );
    requireContext.keys().forEach(requireContext);
  } catch (error) {
    console.log(error);
  }
}

export default iconsvg;
