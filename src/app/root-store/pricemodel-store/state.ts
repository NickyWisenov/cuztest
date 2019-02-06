export interface State {
    job_type: number;
    start_date: string;
    end_date: string;
    from_language: number;
    to_languaage: number;
    nature: number;
    word_count: number;
    currency: string;
    job_distance: number;
    proof_reading_enabled: boolean;
    is_lao_project: boolean;
    job: number;
    country: number;
    province: number;
    promotion_code: string;
}

export const initialState: State = {
    job_type: 1,
    start_date: '2018-1-11T1:14',
    end_date: '2018-1-12T5:15',
    from_language: null,
    to_languaage: null,
    nature: 3,
    word_count: 340,
    currency: 'CAD',
    job_distance: 12,
    proof_reading_enabled: true,
    is_lao_project: false,
    job: 2,
    country: 1,
    province: 2,
    promotion_code: 'asdfqwer',
}