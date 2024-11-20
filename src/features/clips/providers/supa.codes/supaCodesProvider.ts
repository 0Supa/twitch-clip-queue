import axios from 'axios';
import type { Clip } from '../../clipQueueSlice';
import type { ClipProvider } from '../providers';

class SupaCodesProvider implements ClipProvider {
  name = 'supa-codes';
  getIdFromUrl(url: string): string | undefined {
    let uri: URL;
    try {
      uri = new URL(url);
    } catch {
      return undefined;
    }

    if (uri.hostname !== 'fi.supa.sh' && !uri.pathname.endsWith(".mp4")) {
      return undefined;
    }

    return uri.pathname;
  }

  async getClipById(id: string): Promise<Clip | undefined> {
    if (!id) {
      return undefined;
    }

    let clipInfo;
    try {
      const { data } = await axios({
        method: 'get',
        url: `https://fi.supa.sh${id.split('.')[0]}.info.json`,
      });
      clipInfo = data;
    } catch {
      return undefined;
    }

    if (!clipInfo) {
      return undefined;
    }

    return {
      id,
      author: clipInfo.platform === "twitch" ? clipInfo.channel?.login : clipInfo.uploader ?? clipInfo.channel,
      title: clipInfo.platform === "twitch" ? clipInfo.channel?.broadcastSettings.title : clipInfo.description,
      submitters: [clipInfo.creator?.login],
      thumbnailUrl: `https://probe.supa.sh/t/?url=${encodeURIComponent(`https://fi.supa.sh${id}`)}`,
      // createdAt: clipInfo.createdAt ?? clipInfo.timestamp,
    };
  }

  getUrl(id: string): string | undefined {
    return `https://fi.supa.sh${id}`;
  }

  getEmbedUrl(id: string): string | undefined {
    return this.getUrl(id);
  }

  async getAutoplayUrl(id: string): Promise<string | undefined> {
    return undefined;
  }
}

const supaCodesProvider = new SupaCodesProvider();
export default supaCodesProvider;
